const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
   const {headers} = req;
   if (!!headers && !headers['x-api-key'] || headers['x-api-key'] === 'INVALID_KEY') {
    const error = {};
    error.status = 401;
    error.data = 'invalid headers'
    
    return next(error);
  }
  next();
};
