# carlhauser.com

This repository contains the code of [carlhauser.com](https://carlhauser.com)

### development

```bash
npm i # install npm packages
npm run dev # run dev server
```

#### environment variables

```javascript
process.env.GAPI_CLIENT_EMAIL // contains the googleapi service email
process.env.GAPI_PRIVATE_KEY // contains the googleapi private key
process.env.SPREADSHEET_ID // contains the google spreadsheet id
```

### deploy on now

```bash
npm i now -g # install now global
```

#### create secrets

```bash
now secrets add gapi-service-email "mail"
now secrets add gapi-private-key -- "`< file.key`"
now secrets add spreadsheet-id  ""
```

#### now dev

Develop local and simulate the now platform.

```bash
npm run now-dev

# or

now dev
```

#### deploy

```bash
now
```