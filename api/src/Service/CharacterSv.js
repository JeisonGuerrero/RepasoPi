const axios = require('axios');
const { Character, Episode } = require('../db.js');

const infoApi = async () => {

    try {
        const arr = [];
        for (let i = 1; i < 43; i++) {
          arr.push(i);
        }
        const promises = arr.map((i) =>
          axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
        );
        const results = await Promise.all(promises);
      
        const characters = results.map((e) => {
          return e.data.results.map((i) => {
            return {
              id: i.id,
              name: i.name,
              species: i.species,
              origin: i.origin.name,
              image: i.image,
              created: i.created,
            };
          });
        });
        return characters.flat();
    } catch (error) {
        return console.log(error);
    }
  };

  const getDbInfo = async () => {

    try {
        const dbInfo = await Character.findAll({
            include: {
                model: Episode,
                attributes: ['name'], 
                throught: {
                    attributes: [],
                }
            }
        })
        return dbInfo

    } catch (error) {
        return console.log(error);
    }
  };


  //Puede ser Promesa
  const allDataCharacter = async () => {
    try {
      const allinfoApi= await infoApi();
      const allinfoDb = await getDbInfo();

      const allinfo = [...allinfoApi, ...allinfoDb];

      return allinfo

    } catch (error) {
      return console.log(error);
    }
  }

module.exports = {
    infoApi,
    getDbInfo,
    allDataCharacter,
}