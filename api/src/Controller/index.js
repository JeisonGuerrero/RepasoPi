const { allDataCharacter } = require("../Service/CharacterSv");
const axios = require('axios');
const { Episode } = require('../db.js');

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
        for (let i = 1; i < 43; i++) {
          arr.push(i);
        }
        const promises = arr.map((i) =>
          axios.get(`https://rickandmortyapi.com/api/episode?page=${i}`)
        );
        const results = await Promise.all(promises);

        let json= await results.data
        let nombreEpisodios= json.map(ele=>ele.name)
        const episodeId= nombreEpisodios.map(ele=> ele.id)



        const subirAlaDB= nombreEpisodios.map(ele=>{
            Episode.findOrCreate({
                where:{name: ele}
            })
        })

        const subirIdDb= episodeId.map(ele=>{
            Episode.findOrCreate({
                where:{id: ele}
            })
        })

        const todosLosEpisodios= await Episode.findAll()

        res.status(200).send(todosLosEpisodios)
    } catch (error) {
      console.log(error)  
    }
}

module.exports = controller;