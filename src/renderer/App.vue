<!--
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-11 12:12:12
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 16:28:18
 * @FilePath: \shortcut-practise\src\renderer\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEe
-->
<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name: 'shortcuts'
  }
</script>

<style>
  /* CSS */
  #app {
    height: 100vh;
  }
</style>
