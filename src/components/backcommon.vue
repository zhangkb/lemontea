<template lang="html">
  <div class="back-header">
      <el-menu
          :default-active="activeIndex1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
              <router-link to="/back">文章列表</router-link>
          </el-menu-item>
          <el-menu-item index="2">
              <router-link style="color:#fff;" to="/admin">管理员列表</router-link>
          </el-menu-item>
          <el-menu-item index="3">
              <router-link to="/user">
                  个人中心
              </router-link>
          </el-menu-item>
          <el-menu-item index="4">
              <router-link to="/count">
                  数据统计
              </router-link>
          </el-menu-item>
        </el-menu>
        <span class="user-name">用户名</span>
        <span class="logout">退出</span>
        <div class="back-container">
            <router-view>
            </router-view>
        </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex1: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less">
    .back-header {
        position: relative;
        .user-name {
            position: absolute;
            right: 80px;
            top: 0;
            color: #fff;
            line-height: 60px;
            cursor: pointer;
        }
        .logout {
            position: absolute;
            right: 20px;
            top: 0;
            color: #fff;
            line-height: 60px;
            cursor: pointer;
        }
        .el-menu {
            a {
                color: #fff;
            }
        }
        .back-container {
            width: 1200px;
            margin: 0 auto;
        }
    }
</style>
