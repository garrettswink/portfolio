// Root Package Json
{
  "name": "garrett-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "install-client": "cd client && npm install",
    "build-client": "cd client && npm run build",
    "install-server": "cd server && npm install",
    "build": "npm run install-client && npm run build-client && npm run install-server",
    "start": "node server/app.js"
  },
  "engines": {
    "node": "14.x",
    "npm": "6.x"
  }
}

// Client Package Json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.4",
    "bootstrap": "^5.3.2",
    "bulma": "^0.9.4",
    "express": "^4.18.2",
    "nodemailer": "^6.9.8",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.2",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1",
    "vite": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.53.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4"
  }
}


// Server Package Json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemailer": "^6.9.8"
  }
}



// It doesn't look like I'm using npm start. Maybe that is the problem?
// What adjustments should I make
// So that instead of Home Page, my website is displays
// On the deployed heroku account.