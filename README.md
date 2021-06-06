# Odet Service Upload

## Inputs

### `odet.yml` should reside in your repo root

### `api-key`
**Required**

API key for your organization, store it under Github secrets for security purposes

## Example usage
```
uses: shovelers/odet-service-upload@{latest-version}
with:
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