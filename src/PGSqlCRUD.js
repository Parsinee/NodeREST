const express = require('experss');
const Sequelize = require("sequelize");
const app = express();

app.use(express.json())


const dbUrl = 'postgres://webadmin:MAIgsf81141@node40729-noderest.proen.app.ruk-com.cloud:11478/Books'


const sequelize = new Sequelize(dbUrl);