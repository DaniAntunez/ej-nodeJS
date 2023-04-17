const Character = require("./character.model");

const getCharacter = async (req, res) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getCharacter };
