<template lang="html">
  <div class="register">
      <h2>科普推广系统</h2>
      <div class="reg-box">
          <el-card>
              <div class="clearfix reg-header">
                    <span>注册</span>
              </div>
              <div class="">
                  <el-input v-model="user.name" placeholder="账号">
                      <template slot="prepend">账号</template>
                  </el-input>
                  <el-input type="password" v-model="user.password" placeholder="密码">
                      <template slot="prepend">密码</template>
                  </el-input>
                  <el-input type="password" v-model="user.password2" placeholder="确认密码">
                      <template slot="prepend">确认密码</template>
                  </el-input>
                  <el-input v-model="user.email" placeholder="Email">
                      <template slot="prepend">Email</template>
                  </el-input>
                  <el-input v-model="user.phone" placeholder="联系方式">
                      <template slot="prepend">联系方式</template>
                  </el-input>
                  <el-input v-model="user.sex" placeholder="性别">
                      <template slot="prepend">性别</template>
                  </el-input>
                  <span class="dialog-footer">
                    <el-button @click="">取 消</el-button>
                    <el-button type="primary" @click="">确 定</el-button>
                  </span>
                  <span><router-link style="color:#fff" to="/login">已有账户啦，立即登录</router-link></span>
              </div>

          </el-card>
      </div>
  </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return  {
            user: {
                name: '',
                password: '',
                password2: '',
                email: '',
                phone: '',
                sex: '',
            }
        }
    }
}
</script>

<style lang="less">
    .register {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(../assets/images/back.jpg) center no-repeat;
        h2 {
            font-size: 30px;
            padding: 10px 50px;
            color: #fff;
            font-weight: bolder;
        }
    }
    .reg-box {
        width: 600px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .reg-header {
            padding-left: 56px;
            text-align: left;
            span {
                font-size: 24px;
                color: #fff;
            }
        }
        .el-input {
            margin: 10px 20px;
            width: 80%;
        }
        .el-card {
            display: flex;
            justify-content: center;
            text-align: center;
            border: none;
            background: rgba(0,0,0,0);
            .dialog-footer {
                display: block;
                margin: 20px;
                .el-button {
                    width: 180px;
                }
            }
        }
    }
</style>
