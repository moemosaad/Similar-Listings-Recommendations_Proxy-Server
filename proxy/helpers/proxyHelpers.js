// const axios = require("axios");

const proxyHelpers = {
  getClient: (url, callback) => {
    console.log(url);
    axios.get(url).then(({ data }) => {
      console.log(data);
      callback(null, data);
      //   res.send(data);
    });
  }
};

module.exports = proxyHelpers;
