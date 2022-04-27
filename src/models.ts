const mongoose = require('./index'),
    UserModel = require('./models/User'),
    TheoricModel = require('./models/Theoric');

const models = {
    User: mongoose.model('user', UserModel),
    Theoric: mongoose.model('theoric', TheoricModel)
};


module.exports = models;