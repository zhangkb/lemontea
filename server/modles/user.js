const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * [_User description]
 * @type {person}
 * 用户表
 * 包括注册会员，和管理员
 */
const _User = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    sex: String,
    cardType: String,
    cardNum: Number,
    roles: String,
    favorite: [
        {
            title_id: Schema.Types.ObjectId,
            title: String,
            time: String
        }
    ]
})

// 创建model
const userModel = mongoose.model('User', _User);

module.exports = userModel;
