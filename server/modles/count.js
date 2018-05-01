const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * [_User description]
 * @type {person}
 * 用户表
 * 包括注册会员，和管理员
 */
const _Count = new Schema({
    city: String,
    time: String,
    deviseNum: Number,
    onlineNum: String,
    networkNum: String,
    authNum: String,
    newNum: String,
})

// 创建model
const userModel = mongoose.model('Count', _Count);

module.exports = userModel;
