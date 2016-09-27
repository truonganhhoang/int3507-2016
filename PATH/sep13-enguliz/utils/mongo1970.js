/**
 * Created by Thinking on 09/17/2016.
 */
var MongoClient = require('mongodb').MongoClient;

var URI = "mongodb://localhost:27017/enguliz";

module.exports = {
    createCollection: (col) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            db.createCollection(col, (err, collection) => { return console.log('Create database: ' + col); });
            db.close();
        });
    },
    insert: function(col, doc) {
        MongoClient.connect(URI, function(err, db) {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.insert(doc, {w:1}, (err, result) => { });
            db.close();
        });
    },
    update: (col, key, doc) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.insert(doc, {w:1}, (err, result) => {
                collection.update({_id: key}, {$push:{doc:{doc2:1}}}, {w:1}, (err, result) => {});
            });
            db.close();
        });
    },
    findOne: (col, q, callback) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.findOne(q, (err, item) => {
                callback(item);
            });
            db.close();
        });
    },
    remove: (col, where) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.remove(where, {w:1}, (err, result) => {});
        });
    },
    dropTable: (col) => {
        //TODO
    },
    dropDatabase: () => {
        //TODO
    },
    fetchRows: (col, where, doc) => {
        //TODO
    },
    fetchRows: (col, callback) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.find({}).toArray((x, y) => {
                callback(y);
            });
            db.close();
        });
    }
};