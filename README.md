# Odet Service Upload

## Inputs

### `odet-file`
**Required** 

name of yaml file with odet service data

### `api-key`
**Required**

api key for your organization, store it under github secrets for security purposes

## Example usage
```
uses: shovelers/odet-service-upload@{latest-version}
with:
  odet-file: 'odet.yml'
  api-key: ${{secrets.YOUR_API_KEY_SECRET_NAME}}
```

## Dev Setup

### Install Dependencies
`npm install`\
\
`npm i -g @vercel/ncc`

### To build
Before pushing your changes, run the following command

`ncc build index.js`

this will build your code in `dist/index.js`