<template lang="html">
  <div class="base-box">
      <div class="base">
          <ul class="media-list">
              <li v-for="item in media" :key="">
                  <router-link class="media-box" to="/item/123">
                      <div class="media-img">
                          <img :src="item.url" alt="">
                      </div>
                      <div class="media-content">
                          <h2>{{ item.title }}</h2>
                          <span>{{ item.auth }} {{ item.time }}</span>
                      </div>
                  </router-link>

              </li>

          </ul>
          <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>热点推荐</span>
              </div>
              <div style="margin: 20px 0;" v-for="o in media"  class="text item hot-list">
                <div class="img-box">
                    <img :src="o.url" alt="">
                </div>
                <span class="textdia" >{{o.title}}</span>
              </div>
          </el-card>
      </div>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>


  </div>
</template>

<script>
export default {
    name: '',
    data: function(){
        return {
            media: [
                {
                    url: 'http://www.kepuchina.cn/tech/cxgc/201804/W020180428515824477671.jpg',
                    title: "甘肃武威医用重离子加速器系统全面完成检测报告",
                    time: "2018-04-20",
                    auth: "新华网"
                },
                {
                    url: 'http://www.kepuchina.cn/tech/cxgc/201804/W020180428509139869970.jpg',
                    title: "中国女性在发明中贡献远超全球平均水平",
                    time: "2018-04-28",
                    auth: "新华网"
                },
                {
                    url:'http://www.kepuchina.cn/kpcs/lcb/lcb3/201707/W020170720566959928100.jpg',
                    title: "自动驾驶“跳级”没那么简单",
                    time: "2017-07-20",
                    auth: "科学网"
                },
                {
                    url:'http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402545094279325.png',
                    title: "创业路上遇难事 政策帮你破难题",
                    time: "2018-04-20",
                    auth: "中国政府网"
                },
                {
                    url: 'http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402548846883852.jpg',
                    title: "创客们！来看专属创业优惠政策",
                    time: "2018-04-20",
                    auth: "中国政府网"
                },
                {
                    url: 'http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402566793185321.jpg',
                    title: "“双创”要升级 来看最新版本",
                    time: "2018-04-20",
                    auth: "中国政府网"
                },
            ]
        }
    }
}
</script>

<style lang="less">
.base {
    width: 1000px;
    display: flex;
    justify-content: space-around;
    background-color: #eee;
    margin: 0 auto;
    padding: 40px 10px;
    img {
        transition: all .4s;
    }
    img:hover {
        transform: scale(1.2);
    }
}
.media-list {
    display: flex;
    flex-direction: column;
    background-color: #eee;
    .media-box {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        margin: 10px;
        background-color: #fff;
        padding: 20px;
        .media-img {
            width: 150px;
            height: 100px;
            overflow: hidden;
        }
        .media-content {
            padding: 0 20px;
        }
    }
}
.sort-list {
    display: flex;
    flex-direction: column;
    background: #eee;
    padding: 20px;
}
.box-card {
    width: 240px;
    max-height: 600px;
    text-align: left;
}
.el-pagination {
    margin-top: 40px;
}
.hot-list {
    display: flex;
    justify-content: flex-start;
}
.img-box {
    width: 40px;
    height: 40px;
    margin-right: 25px;
    overflow: hidden;
    img {
        width: 200%;
    }

}
.textdia {
    width: 130px;
    overflow: hidden;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
