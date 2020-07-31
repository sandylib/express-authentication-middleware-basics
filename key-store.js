const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
const utils = require('./test/utils');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;

module.exports = async (req, res) => {
     const keys = await utils.getKeysFromFile();
     const newGenerateKey = shortid.generate() + LINE_ENDING;
     keys.push(newGenerateKey);
     await utils.generateKeysFile(keys);
     const newkey = keys[0].split('\n')[0];
     res.status(201).json({apiKey: newkey});
       
};

