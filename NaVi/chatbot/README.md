 # cwat chatbot
Readme is coming soon.
## Setup project

**1. Setup npm**

```sh
$ npm install 
```
**2. Setup nodemon**

```sh
$ npm install nodemon -g
```

**3. Setup ngrok**

> ”I want to expose a local server behind a NAT or firewall to the internet.”
 
  - Dowload [ngrok](https://ngrok.com/download)
  - Archive file ngrok.zip
  - Run file [ngrok.exe]()
  - Run : **ngrok http 3000**
  - Copy : https://....ngrok.io -> Paste to serverURL in defaut.json

**4. Config file (defaut.json)**

- Copy file defaut.example.json and rename to defaut.json
- Change parameter :
    *appSecret* , *pageAccessToken*, *validationToken* : in [developer.facekbook.com](https://developers.facebook.com/)
