var express = require('express');
const User = require('../modles/user');
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');
var jwt = require('jsonwebtoken');
var router = express.Router();


// module.exports = router;
module.exports = function(app) {
    // app.get("/logout", api.logout);
    app.post("/register", function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        const admin = new User({
            name: req.body.name,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            roles: req.body.roles
        });
        admin.save((err, data) => {
            if (err) {
                res.json({
                    msg: {
                        status: 0,
                        msg: '哇哦创建用户错误'
                    },
                });
            }

            res.json({
                msg: {
                    status: 1,
                    msg: '创建成功'
                },
                data: data
            })
        });
    });
    app.post("/login", function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        console.log(req.body);
        let email = req.body.email;
        let password = req.body.password;
        console.log("password", password)
        let phone = req.body.phone;
        let query = '';
        if (email) {
            query = {
                email: email
            }
        } else if (phone) {
            query = {
                phone: phone
            }
        }
        User.findOne(query).then((data) => {
            console.log("登陆用户", data);
            if (!data) {
                console.log("wrong user")
                res.json({
                    msg: {
                        status: 0,
                        msg: '用户不存在'
                    },
                    data: {}
                })
            }

            if (data.password == req.body.password) {
                console.log("login success")
                var token = jwt.sign({
                    exp: app.exp,
                    name: data.person,
                    id: data._id
                }, app.secret, function(err, token) {
                    console.log(token);
                    res.json({
                        msg: {
                            status: 1,
                            msg: "登录成功"
                        },
                        data: {
                            token: token,
                            id: data._id,
                            name: data.name
                        }
                    })
                });
            } else {
                console.log("wrong password")
                res.json({
                    msg: {
                        status: 2,
                        msg: "密码错误"
                    },
                    data: {}
                })
            }

        })
    });
    app.get('/getuser',function(req,res){
            res.header("Access-Control-Allow-Origin", "*");
            let token = req.query.token;
            let userid = req.query.id;
            // console.log(req);
            console.log(userid)
            new Promise(function(resolve, reject) {
                jwt.verify(token, app.secret, function(err, decoded) {
                    if (err) {
                        res.json({
                            ok: 0,
                            msg: err
                        })
                    } else {
                        User.find({
                            _id: userid
                        }, {
                            password: 0,
                            demand_list: 0,
                            roles: 0
                        }).then((response) => {
                            if (!response) {
                                console.log("wrong user")
                                res.json({
                                    msg: {
                                        status: 0,
                                        msg: '用户不存在'
                                    },
                                    data: {}
                                })
                            }
                            console.log(response)
                            res.json({
                                msg: {
                                    status: 1,
                                    msg: '获取成功'
                                },
                                data: response
                            })
                        })
                    }
                });
            });

    });
    app.post('/upload',function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        console.log(req.files);
        if (!req.files) {
            res.json({
                msg: {
                    status: 0,
                    msg: "无上传文件"
                }
            });
        }
        let token = req.body.token;
        console.log('123');
        new Promise(function(resolve, reject) {
            jwt.verify(token, app.secret, function(err, decoded) {
                if (err) {
                    res.json({
                        status: 0,
                        msg: '登录超时！'
                    })
                } else {
                    console.log('asdhasdgauy')
                    let sampleFile = req.files.foo;
                    var name = (new Date()).getTime();
                    console.log(sampleFile)
                    sampleFile.mv('./www/' + name + sampleFile.name, function(err, data) {
                        console.log(err)
                        console.log('data', data)
                        if (err) {
                            res.json({
                                status: 0,
                                msg: "上传失败"
                            });
                        }

                        res.json({
                            status: 1,
                            msg: "上传成功",
                            data: {
                                name: name + sampleFile.name
                            }
                        });
                    });
                }
            });
        });
    });
    app.post('/userupdate',function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        let token = req.body.token;
        let user = req.body.user;
        let userid = req.body.id;
        user = JSON.parse(user);
        console.log(user.name)
        new Promise(function(resolve, reject) {
            jwt.verify(token, app.secret, function(err, decoded) {
                if (err) {
                    res.json({
                        ok: 0,
                        msg: 'token verify fail!'
                    })
                } else {
                    User.findOneAndUpdate({
                        _id: userid
                    }, { $set: user }, { new: true }).then((response) => {
                        if (!response) {
                            console.log("wrong user")
                            res.json({
                                msg: {
                                    status: 0,
                                    msg: '用户不存在'
                                },
                                data: {}
                            })
                        }
                        console.log(response)
                        res.json({
                            msg: {
                                status: 1,
                                msg: '修改成功'
                            },
                            data: response
                        })
                    })
                }
            });
        });
    });
}

// 用户注册
app.post('/regiter', async (ctx, next) => {

	var postParams = ctx.request.body;
	console.log(postParams);
	console.log('ctx.session.captcha: ', ctx.session.captcha);

	if (!postParams.code || !ctx.session.captcha || ctx.session.captcha.toLowerCase() != postParams.code.toLowerCase()) {
		return ctx.body = {
			ok: 0,
			msg: '验证码出错'
		};
	}
	try {
		let app = ctx.app;
		delete postParams['code'];
		var user = await user_service.findByName(postParams.username);

		if (user) {
			return ctx.body = {
				ok: 0,
				msg: '用户名已存在'
			};
		}

		var newUser = await user_service.save(postParams);

		console.log(newUser);

		var token = jwt.sign({
			exp: Math.floor(Date.now() / 1000) + parseInt(nconf.get('jwt').expiretime),
			name: newUser.username
		}, app.secret);
		ctx.body = {
			ok: 1,
			token: token
		};
	} catch (err) {
		throw err;
	}
});

/**
 * 条件查询
 * @param q
 * @returns {Promise}
 */
app.post('/search',function(req, res){
        let q = req.query.q;
        let query = q['query'] || {};
        let sort = q['sort'] || {};
        let page = q['page'] || {};
        let pageIndex = page['index'];
        let pageSize = page['size'];
        let skip = (pageIndex - 1) * pageSize;
        //-----------------notice start--------------
        // 处理模糊匹配字段
        // if (query['$or']) {
        //     query['$or'] = [
        //         {title:{$regex: query.title, $options: "$i"}},
        //         {content:{$regex: query.content, $options: "$i"}}
        //     ];
        // }
        if (query.title || query.content) {
            let keyword = '^';
            let qtitle = query.title
            for (var i = 0; i < qtitle.length; i++) {
                keyword += '(?=.*' + qtitle[i] + ')';
            }
            query['$or'] = [
                {title: {$regex: keyword, $options: "$i"}},
                {content: {$regex: keyword, $options: "$i"}}
            ];
            delete query.title;
            delete query.content
            // query.content = {$regex: query.content, $options: "$i"};
        }

        // 处理DBRef字段
        if (query.site) {
            query.site = new DBRef('site', helper.toObjectID(query.site));
        }

        // 处理ObjectId字段
        if (query._id) {
            query._id = helper.toObjectID(query._id)
        }

        if (query.ids) {
            // console.log('输出ids');
            // console.log(query.ids)
            let queryIds = query.ids;
            let ids = [];
            for (var i = 0; i < queryIds.length; i++) {
                ids[i] = helper.toObjectID(queryIds[i])
            }
            query._id = {$in: ids};
            delete query.ids;
        }
        //-----------------notice end--------------
        // console.log('输出query = 98')
        // console.log(query)
        // 查询数量
        let query_count = new Promise((resolve, reject) => {
            console.log(query)
            db.info.count(query, async (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });

        // 查询数据
        let query_data = new Promise((resolve, reject) => {
            // console.log(query)
            db.info.find(query).sort(sort).skip(skip).limit(pageSize).toArray(async (err, result) => {
                if (!err) {
                    // console.log(result)
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });

        // 构造分页信息
        let buildPageInfo = (pageIndex, pageSize, totalCount) => {

            // let totalPage = (totalCount % pageSize > 0) ? parseInt(totalCount / pageSize) + 1 : Math.floor(totalCount / pageSize);

            // 向上取整
            let totalPage = Math.ceil(totalCount / pageSize);
            let nextPage = (pageIndex == totalPage) ? pageIndex : pageIndex + 1;
            let prePage = (pageIndex > 1) ? pageIndex - 1 : pageIndex;
            let lastResultIndex = pageIndex * pageSize - 1;
            let firstResultIndex = (pageIndex - 1) * pageSize;

            let pageInfo = {
                firstResultIndex: firstResultIndex,
                lastResultIndex: lastResultIndex,
                pageIndex: pageIndex,
                pageSize: pageSize,
                prePage: prePage,
                nextPage: nextPage,
                totalCount: totalCount,
                totalPage: totalPage
            };

            return pageInfo;
        };

        // 构造分页结果
        let buildPage = new Promise((resolve, reject) => {
            Promise.all([query_count, query_data]).then((datas) => {

                let totalCount = datas[0];
                let data = datas[1];

                // console.log(data[0]);
                // console.log(data[1]);

                let result = {
                    pageDatas: data,
                    pageInfo: buildPageInfo(pageIndex, pageSize, totalCount)
                };

                resolve(result);
            });

        });

});
