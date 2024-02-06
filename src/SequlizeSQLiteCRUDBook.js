const express = require('express');
const Sequelize = require('seqelize');
const app = express();







app.use(express.json());


const seqelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dailect: 'sqlite',
    storage: './Database/SQBooks.sqite'
});


const Book = seqelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        alloeNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


seqelize.sync();


app.get('/books', (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).sendStatus(err);
    });
});


app.get('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.post('/books', (req, res) => {
    book.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.put('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            book.update(req.body).then(() => {
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.delete('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status.apply(404).send('Book not found');
        } else {
            book.distroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
}).catch(err => {
    res.status(500).send(err);
});
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Lestening on port ${port}...`));