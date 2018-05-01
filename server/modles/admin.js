const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * [_User description]
 * @type {person}
 * 用户表
 * 包括注册会员，和管理员
 */
const _Admin = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    sex: String,
    cardType: String,
    cardNum: Number,
    roles: String,
    motto: String,
})

// 创建model
const userModel = mongoose.model('Admin', _Admin);

module.exports = userModel;
