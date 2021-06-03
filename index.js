const core = require('@actions/core');
const github = require('@actions/github');

try {
  const odetFile = core.getInput('odet-file');
  const apiKey = core.getInput('api-key');
  console.log(`${odetFile}`);
  console.log(`${apiKey}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}