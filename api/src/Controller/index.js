const { allDataCharacter } = require("../Service/CharacterSv");
const axios = require('axios');
const { Character, Episode } = require('../db.js');

const controller = {}

controller.getCharacter = async (req, res)=>{
    try {
        const allPersonajes = await allDataCharacter();
        res.status(200).send(allPersonajes);
    } catch (error) {
        return console.log(error);
    }
};

controller.getAllEpisodes= async (req, res)=>{
    try {
        const arr = [];
        for (let i = 1; i < 4; i++) {
        arr.push(i);
        }
        const promises = arr.map((i) =>
        axios.get(`https://rickandmortyapi.com/api/episode?page=${i}`)
        );
        const results = await Promise.all(promises);
        
        const episodes = results.map((ele) => {
            return ele.data.results.map((i) => {
                return {
                    id: i.id,
                    name: i.name,
                };
            });
        }).flat();
        
        
       
        const subirAlaDB= episodes.map(ele=>{
            Episode.findOrCreate({
                where:{id: ele.id,
                        name: ele.name} 
            })
        })
        
        const todosLosEpisodios= await Episode.findAll({
            attributes: ['name']
        })

        res.status(200).send(todosLosEpisodios)
    } catch (error) {
      console.log(error)  
    }
}

controller.getCharacterById = async (req, res) => {
    try {
        const id = req.params.id;
        const character = await allDataCharacter();
        const characterId = character.find((e)=>e.id == id);
    
        characterId 
        ? res.status(200).send(characterId) 
        : res.status(404).send('Error: Not Found'); 
        
    } catch (error) {
        console.log(error);
    }
}

controller.postCharacter = async (req, res)=>{
    try {
        let {
            name,
            species,
            origin,
            image,
            created,
            episode,
          } = req.body;
        const newCharacter = await Character.create({
            name,
            species,
            origin,
            image,
            created,
        })
        const newEpisode = await Episode.findAll({
           where:{ name: episode }
        })

        await newCharacter.addEpisode(newEpisode);
        res.status(200).json({...req.body});

    } catch (error) {
        res.status(406).send('Efe men');
    }
}

module.exports = controller;