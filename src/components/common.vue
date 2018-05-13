<template>
  <div id="app">
      <div class="top">
          <div class="container">
              <span v-show="islogin == false" @click="dialogVisible = true">登录</span>
              <router-link style="color:#fff;" :to="{ path: '/acount' }"><span v-show="islogin == true">{{ user.name }}</span></router-link>
              <span v-show="islogin == true" @click="logout">退出</span>
              <span @click="register = true" v-show="islogin == false" >注册</span>
          </div>
      </div>
    <div class="header">
        <span class="header-name">
            科普推广系统
        </span>
        <div class="menu">
            <router-link v-for="text in navgatText"  :to="{ path: text.path}"><span @click="selected(text)" :class="{ active: activeName == text.name }">{{ text.name }}</span></router-link>
            <!-- <router-link to="/base"><span>科普基地</span></router-link>
            <router-link to="/base"><span>政策法规</span></router-link>
            <router-link to="/base"><span>科学生活</span></router-link>
            <router-link to="/base"><span>农村科苑</span></router-link>
            <router-link to="/base"><span>科技万象</span></router-link>
            <router-link to="/base"><span>中原风采</span></router-link>
            <router-link to="/base"><span>资源查询</span></router-link> -->
        </div>
    </div>
    <div class="sitting"></div>
    <div class="router-view">
        <router-view></router-view>
    </div>
    <div class="footer">
        <h2>友情链接</h2>
        <ul>
            <li><a target="_blank" href="http://www.kepuchina.cn/">科普中国</a></li>
            <li><a target="_blank" href="http://www.qxkp.net/">中国气象科普网</a></li>
            <li><a target="_blank" href="http://science.china.com.cn/">中国科学中国</a></li>
            <li><a target="_blank" href="http://tech.chinadaily.com.cn/">中国日报网</a></li>
            <li><a target="_blank" href="http://www.dili360.com/">中国国家地理网</a></li>
        </ul>
    </div>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-input v-model="user.email" placeholder="账号">
          <template slot="prepend">账号</template>
      </el-input>
      <el-input type="password" v-model="user.password" placeholder="密码">
          <template slot="prepend">密码</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="注册"
      :visible.sync="register"
      width="40%"
      :before-close="handleClose">
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
      <span slot="footer" class="dialog-footer">
        <el-button @click="register = false">取 消</el-button>
        <el-button type="primary" @click="registerFun">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'App',
  data: function () {
      return {
          msg: 'header',
          dialogVisible: false,
          register: false,
          islogin: false,
          user: {
            name: '',
            password: '',
            email: '',
            sex: '',
            id: '',
          },
          navgatText: [
            {
              name: '首页',
              path: '/'
            },{
              name: '科普基地',
              path: '/base'
            },{
              name: '政策法规',
              path: '/policy'
            },{
              name: '科学生活',
              path: '/science'
            },{
              name: '农村科苑',
              path: '/countryside'
            },{
              name: '科技万象',
              path: '/technology'
            },{
              name: '中原风采',
              path: '/central'
            },{
              name: '资源查询',
              path: '/serach'
            }
          ],
          activeName: '首页'
    }
  },
  created(){
      this.getUser()
  },
  methods: {
    selected: function(text){
      this.activeName = text.name;
      console.log(text.name);
    },
    fetchData: function () {
      console.log('路由变化');
      this.activeName = this.$route.path;
    },
    handleClose: function(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
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
                self.user.name = response.data.data.name;
                self.dialogVisible = false;
                self.islogin = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    registerFun: function(){
        console.log(123);
        var self = this;
        axios.post('http://120.79.214.223:3001/register', qs.stringify({
            email: this.user.email,
            password: this.user.password,
            name: this.user.name,
            sex: this.user.sex,
            roles: 'member'
        }))
        .then(function (response) {
            console.log(response);
            if (response.status === 200 && response.data.msg.status == 1) {
                console.log(response)
                this.register = false;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    logout: function(){
        this.$confirm('您真的要离开了吗0.0','退出',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(()=>{
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            this.islogin = false;
            this.$router.push({path:'/home'})
        });
    },
    getUser: function(){
        console.log(localStorage.getItem('token'));
        axios.get('http://120.79.214.223:3001/getuser',{
            params: {
                token: localStorage.getItem('token'),
                id: localStorage.getItem('id')
            }
        }).then((response)=>{
            if (response.status === 200 && response.data.msg.status == 1) {
                Object.assign(this.user,response.data.data[0]);
                // self.user.name = response.data.data.name;
                console.log(this.user.name);
                this.islogin = true;
            }
        });
    }
  },
}
</script>

<style lang="less">

html,
body {
    background-color: #ffffff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // display: flex;
  // justify-content: center;
}
.sitting {
    width: 1200px;
    height: 90px;
}
.header {
    position: fixed;
    top: 0;
    left: 50%;
    width: 1200px;
    padding: 25px;
    margin-left: -600px;;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255,.8);
    z-index: 99;
    .header-name {
        font-size: 26px;
    }
    .menu {
        width: 800px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        span {
            padding: 0 10px;
            cursor: pointer;
        }
        .active {
            background-color: #4ba733;
            color: #fff;
        }
    }
}
.router-view {
    width: 1200px;
    margin: 0 auto;
    margin-top: 25px;
    // background-color: #fffff0;
}
.footer {
    width: 1200px;
    margin: 50px auto;
    margin-bottom: 0;
    padding: 30px;
    background-color: rgba(171, 159, 159, 0.1);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    color: #fff;
    h2 {
        font-size: 20px;
        // color: #fff;
    }
    ul {
        display: flex;
        flex-direction: row;
        li {
            color: #fff;
            height: 25px;
            line-height: 25px;
            margin: 20px;
            padding: 0 25px;
            border-right: 1px solid #ddd;
            a {
                color: #fff;
            }
        }
    }
}
.top {
    position: fixed;
    width: 100%;
    height: 25px;
    font-size: 14px;
    color: #fff;
    line-height: 25px;
    text-align: right;
    cursor: pointer;
    background-color: #ddd;
    z-index: 100;
    .container {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
    }
}
.el-dialog .el-input {
    width: 50%;
    margin: 20px 0;
}
.dialog-footer {
    display: flex;
    justify-content: center;
}
</style>
