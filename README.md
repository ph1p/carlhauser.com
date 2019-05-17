# carlhauser.com

This repository contains the code of [carlhauser.com](https://carlhauser.com)

### development

```bash
npm i
npm run dev
```

#### environment variables

```javascript
process.env.GAPI_CLIENT_EMAIL // contains the googleapi service email
process.env.GAPI_PRIVATE_KEY // contains the googleapi private key
process.env.SPREADSHEET_ID // contains the google spreadsheet id
```