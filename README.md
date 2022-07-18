# Story Books

Story Books is a website which you can share the memories from your life. All you need is a Google Account!

## Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Also I used the Express Handlebars template engine for rendering the web pages.

## Installation

Use the install command to install the dependencies:

```bash
npm install
```

Then you need to specify the listening port, mongoDB database connection string and your Google Auth client credentials as below:

`config/config.env` :
```
BACKEND_PORT = 3000
MONGO_URI = XX
GOOGLE_CLIENT_ID = XX
GOOGLE_CLIENT_SECRET = XX
```

I didn't share the exact file I used because of the security reasons. If any question spawns on your mind, feel free to get in touch!

## Screenshots

![Login Screen](https://github.com/somercelik/story-books/blob/develop/images/login.png?raw=true)
![Your Stories](https://github.com/somercelik/story-books/blob/develop/images/your-stories.png?raw=true)
![Public Stories](https://github.com/somercelik/story-books/blob/develop/images/all-stories..png?raw=true)
![Single Story View](https://github.com/somercelik/story-books/blob/develop/images/single-story-view.png?raw=true)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)