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
              <li class="media-box">
                  <div class="media-img">
                      <img src="../assets/images/media-01.jpg" alt="">
                  </div>
                  <div class="media-content">
                      <h2>孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血</h2>
                      <span>科普中国-乐享健康 2018-04-20</span>
                  </div>
              </li>
              <li class="media-box">
                  <div class="media-img">
                      <img src="../assets/images/media-01.jpg" alt="">
                  </div>
                  <div class="media-content">
                      <h2>孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血</h2>
                      <span>科普中国-乐享健康 2018-04-20</span>
                  </div>
              </li>
          </ul>
          <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>热点推荐</span>
              </div>
              <div v-for="o in media"  class="text item hot-list">
                <div class="img-box">
                    <img :src="o.url" alt="">
                </div>
                <span>o.title</span>
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
                    url: require('../assets/images/media-01.jpg'),
                    title: "孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
                },
                {
                    url: require('../assets/images/media-02.jpg'),
                    title: "补充维生素不是想补就能补 补充过量会中毒",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
                },
                {
                    url: require('../assets/images/media-03.jpg'),
                    title: "老人黄昏突然变得糊涂？可能患上了“日落综合征”",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
                },
                {
                    url: require('../assets/images/media-04.jpg'),
                    title: "头皮瘙痒怎么办？注意清洁、正确护理很重要",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
                },
                {
                    url: require('../assets/images/media-05.jpg'),
                    title: "警惕“病从口入” 预防食源性疾病有方法",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
                },
                {
                    url: require('../assets/images/media-01.jpg'),
                    title: "孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",
                    time: "2018-04-20",
                    auth: "科普中国-乐享健康"
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
</style>
