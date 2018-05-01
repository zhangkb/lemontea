<template>
  <div class="hello">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in carousel" :key="item.url">
          <img :src="item.url" alt="">
          <!-- <img src="../assets/images/01.jpg" alt=""> -->
        </el-carousel-item>
      </el-carousel>
      <el-row type="flex" :gutter="20">
          <el-col :span="12">
              <div class="info-com info-tongzhi">
                  <el-card class="box-card">
                      <div slot="header" class="clearfix info-notice-title">
                        <span>通知公告</span>
                      </div>
                      <div v-for="o in notice" class="text item info-notice">
                          <span> {{o.title}} </span>
                          <span> {{o.time}} </span>
                      </div>
                  </el-card>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="info-com info-tongzhi">
                  <el-card class="box-card">
                      <div slot="header" class="clearfix info-notice-title">
                        <span>通知公告</span>
                      </div>
                      <div v-for="o in notice" class="text item info-notice">
                          <span> {{o.title}} </span>
                          <span> {{o.time}} </span>
                      </div>
                  </el-card>
              </div>
          </el-col>
      </el-row>
      <h2 class="groom">科普推荐</h2>
      <el-row type="flex" :gutter="20" class="info-groom">
          <el-col :span="8" v-for="item in groom" :key="item.url">
              <div class="info-groom-item">
                  <img :src="item.url" alt="">
              </div>
          </el-col>
          <!-- <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col>
          <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col>
          <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col>
          <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col>
          <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col>
          <el-col :span="8">
              <div class="info-com">

              </div>
          </el-col> -->
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carousel: [
          {
              url: require('../assets/images/01.jpg')
          },
          {
              url: require('../assets/images/02.jpg')
          },
          {
              url: require('../assets/images/03.jpg')
          },
          {
              url: require('../assets/images/04.jpg')
          },
          {
              url: require('../assets/images/05.jpg')
          },
      ],
      groom: [
          {
              url: require('../assets/images/info-07.jpg')
          },
          {
              url: require('../assets/images/info-01.jpg')
          },
          {
              url: require('../assets/images/info-02.jpg')
          },
          {
              url: require('../assets/images/info-03.jpg')
          },
          {
              url: require('../assets/images/info-04.jpg')
          },

          {
              url: require('../assets/images/info-06.jpg')
          },

          {
              url: require('../assets/images/info-05.jpg')
          },
      ],
      notice: [
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
          {
              title: '《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布',
              time: '2018-03-01 10:10'
          },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  // color: #42b983;
}
img {
    width: 100%;
    height: 100%;
}
// .el-carousel {
//     height: 430px;
// }
.el-carousel__container {
    height: 460px;
}
.info-com {
    width: 100%;
    height: 450px;
    background-color: #ddd;
}
.groom {
    margin: 25px 0;
    height: 45px;
    font-size: 26px;
    line-height: 45px;
}
.info-groom {
    width: 100%;
    height: 630px;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
    .info-groom-item {
        width: 350px;
        margin: 5px auto;
        img {
            width: 100%;
        }
    }
}
.info-tongzhi {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    .el-card {
        width: 100%;
        height: 100%;
        .info-notice-title {
            font-size: 20px;
        }
    }
    .el-card__body {
        padding-left: 10px;
        padding-right: 20px;
    }
    .info-notice {
        display: flex;
        justify-content: space-between;
    }
}
</style>
