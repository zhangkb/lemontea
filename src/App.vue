<template>
  <div id="app">
      <div class="logo">
          <!-- <img src="./assets/logo.jpeg"> -->
      </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*.hello {
    background: url(../assets/images/lemon.jpeg) center no-repeat;
}*/
* {
    padding: 0;
    margin: 0;
}
html,
body {
    background-color: #fffff3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*background: url(./assets/images/lemon.jpeg) center no-repeat;*/
}
.logo {
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 240px;
    background: url(./assets/logo.jpg) center no-repeat;
    background-size: 240px 240px;
    margin: 40px auto;
}
</style>
