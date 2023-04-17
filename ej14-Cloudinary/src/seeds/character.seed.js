const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Character = require('../api/character/character.model');



const arrayCharacters = [
    {
      name: "Homer",
      surname: "Simpson",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/homer_ekzxdw.png",
    },
    {
      name: "Lisa",
      surname: "Simpson",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/lisa_ooxh8d.png",
    },
    {
      name: "Marge",
      surname: "Simpson",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/marge_cta5je.png",
    },
    {
      name: "Bart",
      surname: "Simpson",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/bart_gopogk.png",
    },
    {
      name: "Maggie",
      surname: "Simpson",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/maggie_rsio2f.png",
    },
    {
      name: "Ned",
      surname: "Flanders",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/ned_dhw69t.jpg",
    },
    {
      name: "Milhouse",
      surname: "Van Houten",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/milhouse_o3ibgx.png",
    },
    {
      name: "Krusty",
      surname: "El payaso",
      image: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679498308/Simpsons/krusty_c8f0u4.png",
    },
];
  
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    const allCharacters = await Character.find();
    if(allCharacters.length > 0){
        await Character.collection.drop()
        console.log("characters borrados");
    };
})
.catch((err) => console.log("error borrando characters", err))
.then(async () => {
    const charactersMap = arrayCharacters.map((character) => new Character(character));
    await Character.insertMany(charactersMap);
    console.log("characters insertados");
})
.catch((err) => console.log("error insertando characters", err))
.finally(() => mongoose.disconnect());

