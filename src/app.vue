<template>
  <main class="main">
    <v-header></v-header>
    <section class="wrap">
      <user-center></user-center>
    </section>
    <v-footer></v-footer>
  </main>
</template>
<script>
require('font-awesome/scss/font-awesome.scss')
require('./app.scss')
import vHeader from 'components/header/header'
import vFooter from 'components/footer/footer'
import userCenter from 'views/user'

export default {
  mounted() {},
    components: {
      vHeader,
      vFooter,
      userCenter
    }
}
</script>
<style>
.main {
  height: 100%;
  background-color: #f1f1f1;
}
.wrap{
  padding: 1.066667rem 0 1.333333rem 0;
}
</style>
