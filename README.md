# Project Name

Express + Vue with front side rendering only.

## Technologies

🟩 Node. Tested on v13.2.0. Might work in different versions.
Express server. Webpack builder.
Templates express-es6-template-engine

## Setup - Without docker
Install node dependencies.
```
npm install
```

The .env file is optional. Variables can be set in the environment. Is useful while developing. Copy .env.sample file.

### Development - Without docker
Run
```
npm run dev
```
Will listen for changes and rebuild when necessary. No "hot" reload in the browser yet.

### Build for production - Without docker
Build assets. Will create final asset js files in /public/dist.
```
npm run build
```

Start production/staging server. Will create final asset js files in /public/dist.
```
npm run start
```

### To serve https (if not solved before requesting to the express server)
Get creds using certbot (temporarily).
```
sudo certbot certonly --standalone --preferred-challenges http -d somedomainexample.com	npm run test
```

## Testing
```
npm run test
```
