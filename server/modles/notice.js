const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * [_User description]
 * @type {person}
 * 用户表
 * 包括注册会员，和管理员
 */
const _Notice = new Schema({
    name: String,
    title: String,
    Author: String,
    DateTime: String,
    Classify: String,
    Content: String
})

// 创建model
const titleModel = mongoose.model('Notice', _Notice);

module.exports = titleModel;
