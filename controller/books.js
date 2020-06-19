var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://RbCrow:gch18120@cluster0-snylr.mongodb.net/test';

module.exports = {
    library: async (req, res) => {
        let client = await MongoClient.connect(url);
        let dbo = client.db("Library");
        let results = await dbo.collection("Books").find({}).toArray();
        res.render('books/library', { books: results });
    },
    detail: async (req, res) => {
        let id = req.query.id;
        var ObjectID = require('mongodb').ObjectID;

        let client = await MongoClient.connect(url);
        let dbo = client.db("Library");

        let result = await dbo.collection("Books").findOne({ "_id": ObjectID(id) });
        
        res.render('books/detail', { book: result });
    },
    doUpdate: async (req, res) => {
        let id = req.body.id;
        let bookid = req.body.bookid;
        let name = req.body.name;
        let genre = req.body.genre;
        let author = req.body.author;
        let amount = req.body.amount;

        let newValues = { $set: {bookid : bookid, genre: genre, name: name, author: author, amount: amount } };
        
        var ObjectID = require('mongodb').ObjectID;

        let condition = { "_id": ObjectID(id) };

        let client = await MongoClient.connect(url);
        let dbo = client.db("Library");
        await dbo.collection("Books").updateOne(condition, newValues);

        res.redirect('/books/library');
    },
    delete: async (req, res) => {
        let id = req.body.id;
        var ObjectID = require('mongodb').ObjectID;
        
        let condition = { "_id": ObjectID(id) };

        let client = await MongoClient.connect(url);
        let dbo = client.db("Library");
        await dbo.collection("Books").deleteOne(condition);

        res.redirect('/books/library');
    },
    insert: function (req, res) {
        res.render('books/insert');
    },
    doInsert: async (req, res) => {
        let bookid = req.body.bookid;
        let name = req.body.name;
        let genre = req.body.genre;
        let author = req.body.author;
        let amount = req.body.amount;
        let newBook = { bookid : bookid, genre: genre, name: name, author: author, amount: amount };
        
        let client = await MongoClient.connect(url);
        let dbo = client.db("Library");
        await dbo.collection("Books").insertOne(newBook);

        res.redirect('/books/library');
    }
};
