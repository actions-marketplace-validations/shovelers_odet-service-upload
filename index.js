const core = require("@actions/core");
const github = require("@actions/github");
var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");

var data = new FormData();
const odetFile = core.getInput("odet-file");
const apiKey = core.getInput("api-key");
data.append("yaml", fs.createReadStream(odetFile));
var config = {
  method: "post",
  url: "https://odet-staging.herokuapp.com/services",
  headers: {
    "X-ODET-KEY": apiKey,
    ...data.getHeaders(),
  },
  data: data,
};
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
