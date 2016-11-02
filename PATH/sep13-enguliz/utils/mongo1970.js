/**
 * Created by Thinking on 09/17/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var URI = "mongodb://localhost:27017/enguliz";
var RespHome = require('../models/logical/RespHome');
var ObjectId = require('mongodb').ObjectID;
var async = require("async");


module.exports = {
    createCollection: (col) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            db.createCollection(col, (err, collection) => { return console.log('Create database: ' + col); });
            db.close();
        });
    },
    insertOne: function(col, doc, callback) {
        MongoClient.connect(URI, function(err, db) {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.insertOne(doc, {w:1}, (err, result) => { callback(result); });
            db.close();
        });
    },
    insertMany: (col, doc, callback) => {
        MongoClient.connect(URI, function(err, db) {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.insertMany(doc, (err, result) => { callback(result); });
            db.close();
        });
    },
    update: (col, key, doc) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.insertOne(doc, {w:1}, (err, result) => {
                collection.updateOne({_id: key}, {$push:{doc:{doc2:1}}}, {w:1}, (err, result) => {});
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
    remove: (col, where, callback) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.removeOne(where, {w:1}, (err, result) => { callback(result); });
        });
    },
    dropTable: (col) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            db.dropCollection(col, (err, result) => {
               db.close();
            });
        });
    },
    dropDatabase: () => {
        //TODO
    },
    fetchRows: (col, where, callback) => {
        MongoClient.connect(URI, (err, db) => {
            if(err) { return console.dir(err); }
            var collection = db.collection(col);
            collection.find(where).toArray((x, y) => {
                callback(y);
            });
            db.close();
        });
    },
    fetchAll: (col, callback) => {
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