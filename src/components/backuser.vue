<template lang="html">
  <div class="acount">
      <!-- <h2>个人信息</h2> -->
      <h2>基本信息</h2>
      <span v-show="textShow" class="usermod el-icon-edit-outline" @click="modUser"></span>
      <div class="acount-box">
          <ul class="acount-list">
              <li>
                  <span>用户名</span>
                  <p v-if="textShow">{{ user.name }}</p>
                  <el-input v-model="user.name" v-if="modShow" placeholder=账户名></el-input>
              </li>
              <li>
                  <span>地址</span>
                  <p v-if="textShow">{{ user.address | CodeToTextFilter }}</p>
                  <div class="city-select"  v-if="modShow">
                      <el-cascader
                        :options="city"
                        v-model="selectedCity"
                        >
                      </el-cascader>
                  </div>
              </li>
              <li>
                  <span>手机号码</span>
                  <p v-if="textShow">{{ user.phone }}</p>
                  <el-input v-model="user.phone" v-if="modShow" placeholder="手机号码"></el-input>
              </li>
              <li>
                  <span>电子邮箱</span>
                  <p v-if="textShow">{{ user.email }}</p>
                  <el-input v-model="user.email" v-if="modShow" placeholder="邮箱"></el-input>
              </li>

              <li>
                  <span>用户头像</span>
                  <div class="acount-user-logo">
                      <img v-model="cacheLogo" :src="'http://120.79.214.223:3001/' + cacheLogo" alt="">
                  </div>
                  <div v-if="modShow" class="acount-logo-operate">
                      <el-upload class="upload-demo"
                       action="http://120.79.214.223:3001/upload"
                       name="foo"
                       :multiple="false"
                       :show-file-list="false"
                       :limit="1"
                       :before-upload="beforeUpload"
                       :http-request="httpLogoUpload"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove">
                           <el-button  class="up-btn" type="primary">上传图片
                           </el-button>
                          <span>
                              jpg/png/bmp,小于1M 建议：200*200像素
                          </span>
                      </el-upload>
                  </div>
              </li>
          </ul>
          <div class="submit-box" v-show="modShow">
              <el-button class="sub-btn" @click="modUser">取消</el-button>
              <el-button class="sub-btn" @click="updateUser" type="primary">确定</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import { regionData , CodeToText} from 'element-china-area-data';
import axios from "axios";
import qs from "qs";
export default {
    name: 'acount',
    data: function () {
        return {
            city: regionData,
            selectedCity:[],
            textShow: true,
            modShow: false,
            cacheLogo: '',
            user: {
                name: '',
                address: '',
                phone: '',
                email: '',
                avatar: ''
            }
        }
    },
    created(){
        this.getUser();
    },
    filters: {
        CodeToTextFilter: function(value){
            if (!value) {
                return '';
            }
            value = value.split(',');
            let result = CodeToText[value[0]]+' '+CodeToText[value[1]]+' '+CodeToText[value[2]];
            return result;
        },
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        beforeUpload(file) {
            const isIMG = (file.type === 'image/jpeg' || 'image/png' || '');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isIMG) {
              this.$message.error('只能上传jpg或png格式图片');
            }
            if (!isLt2M) {
              this.$message.error('图片大小不能超过2MB');
            }
            return isIMG && isLt2M;
        },
        httpLogoUpload(param){
            let file = param.file;
            let self = this;
            console.log(file);
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('foo', param.file);
            formData.append('token', token);
            let config = {
                'Content-Type': 'multipart/form-data'
            };
            axios.post('http://120.79.214.223:3001/upload',formData, config).then((response)=>{
                console.log(response);
                if (response.status === 200 && response.data.status == 1) {
                    self.cacheLogo = response.data.data.name;
                } else {
                    self.$message.error('上传失败，请重试');
                }
            })
        },
        getUser(){

            axios.get("http://120.79.214.223:3001/getUser", {
                params: {
                    id: localStorage.getItem('id'),
                    token: localStorage.getItem('token')
                }
            }).then((response) => {
                if (response.status === 200) {
                    Object.assign(this.user,response.data.data[0]);
                    this.cacheLogo = response.data.data[0].avatar;
                    console.log(this.cacheLogo);
                }
            });
        },
        modUser: function(){
            var self = this;
            self.selectedCity = self.user.address.split(',')
            self.textShow = !self.textShow;
            self.modShow = !self.modShow;
            self.cacheLogo = self.user.avatar;
            // console.log(this.user)
        },
        updateUser: function(){
            var self = this;
            console.log(self.user);
            console.log(self.selectedCity)
            console.log(CodeToText[self.selectedCity[0]])
            self.user.address = self.selectedCity.join(',');
            self.user.avatar = self.cacheLogo;
            self.user.qualification = this.cacheQua;
            axios.post('http://120.79.214.223:3001/userupdate',qs.stringify({
                id: localStorage.getItem('id'),
                token: localStorage.getItem('token'),
                user: JSON.stringify(self.user)
            })).then((response) => {
                console.log(response)
                this.$message({
                    message: "修改成功",
                    type: "success"
                });
                Object.assign(this.user,response.data.data[0]);

                self.modUser();
            });
        },
    }
}
</script>

<style lang="less">
.acount {
    position: relative;
    h2 {
        font-size: 20px;
        padding: 0;
        margin: 0;
        line-height: 36px;
        border-bottom: 1px solid #ddd;
        width: 600px;
        margin: 0 auto;
        text-align: left;
        padding-left: 48px;
    }
    .usermod {
        position: absolute;
        top: 0;
        right: 27%;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #aaa;
        cursor: pointer;
    }
}
    .acount-box {
        width: 600px;
        margin: 0 auto;
        padding: 0 50px;
        .acount-list {
            display: flex;
            flex-direction: column;
            li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                min-height: 70px;
                > span {
                    width: 90px;
                    font-size: 16px;
                    line-height: 22px;
                    color: #999;
                    margin-right: 20px;
                    text-align: left;
                    // display: block;
                }
                p {
                    font-size: 16px;
                    line-height: 22px;
                    color: #333;
                }
                .el-input {
                    margin-left: 20px;
                    width: 282px;
                }
                .acount-user-logo {
                    width: 100px;
                    height: 100px;
                    border: 1px solid #ddd;
                    overflow: hidden;
                    margin-left: 20px;
                    img {
                        width: 100%;
                    }
                }
                .acount-logo-operate {
                    width: 150px;
                    margin-left: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                     > span {
                        font-size: 13px;
                        line-height: 18px;
                        color: #666;
                    }
                    .up-btn {
                        width: 94px;
                        padding: 0;
                        margin-bottom: 7px;
                        line-height: 30px;
                        font-size: 13px;
                    }
                }

            }
        }
        .submit-box {
            margin-top: 70px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .sub-btn {
            width: 132px;
            font-size: 16px;
        }
        .el-cascader__label {
            padding-left: 35px;
        }
    }
    .city-select {
        width: 282px;
    }
</style>
