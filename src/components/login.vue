<template lang="html">
  <div class="login">
      <h2>科普平台系统登录</h2>
      <div class="login-box">
          <el-card>
              <el-input v-model="user.email" placeholder="账号">
                  <template slot="prepend">账号</template>
              </el-input>
              <el-input type="password" v-model="user.password" placeholder="密码">
                  <template slot="prepend">密码</template>
              </el-input>
              <el-select v-model="selected" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="dialog-footer">
                <router-link to="/register">
                    <el-button @click="">注册</el-button>
                </router-link>
                <el-button type="primary" @click="login">登陆</el-button>
             </span>
          </el-card>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
    name: 'login',
    data () {
        return {
            user: {
                email: '',
                password: '',
            },
            options: [
                {
                    value: 'admin',
                    label: '后台'
                },
                {
                    value: 'home',
                    label: '会员'
                },
            ],
            selected: ''
        }
    },
    methods: {
        login: function(){
            var self = this;
            axios.post('http://120.79.214.223:3001/login', qs.stringify({
                email: this.user.email,
                password: this.user.password
            }))
            .then(function (response) {
                console.log(response);
                if (response.status === 200 && response.data.msg.status == 1) {
                    localStorage.setItem('token',response.data.data.token);
                    localStorage.setItem('id',response.data.data.id);
                    if (self.selected == 'admin') {
                        self.$router.push({
                          path: "/back"
                        })
                    } else {
                        self.$router.push({
                          path: "/"
                        })
                    }

                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
}
</script>

<style scoped lang="less">
    .login {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url(../assets/images/back.jpg);
        h2 {
            font-size: 30px;
            padding: 10px 50px;
            color: #fff;
            font-weight: bolder;
        }
    }
    .login-box {
        width: 600px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .el-input {
            margin: 30px 20px;
            width: 80%;
        }
        .el-select {
            margin: 30px 20px;
        }
        .el-card {
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            text-align: center;
            border: none;
            background: rgba(0,0,0,0);
            .dialog-footer {
                width: 100%;
                display: block;
                .el-button {
                    width: 120px;
                    margin: 0 20px;
                }
            }
        }
    }
</style>
