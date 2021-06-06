const core = require("@actions/core");
const github = require("@actions/github");
var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");

var data = new FormData();
const odetFile = 'odet.yml';
const apiKey = core.getInput("api-key");
data.append("yaml", fs.createReadStream(odetFile));
const url = core.getInput("staging") === 'true' ? "https://odet-staging.herokuapp.com" : "https://app.odet.cloud";
var config = {
  method: "post",
  url: `${url}/services`,
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
