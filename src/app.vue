<template>
  <main class="main">
    <v-header></v-header>
    <section id="wrapper">
      <div id="scroller">
        <home></home>
      </div>
    </section>
    <v-footer></v-footer>
  </main>
</template>
<script>
require('./app.scss')
import vHeader from 'components/header/header'
import vFooter from 'components/footer/footer'
import home from 'pages/home.vue'
import AlloyTouch from 'alloytouch'
import 'alloytouch/transform'

export default {
  mounted() {
      let target = document.querySelector("#scroller");
      new AlloyTouch({
        touch: "#wrapper", //反馈触摸的dom
        vertical: true, //不必需，默认是true代表监听竖直方向touch
        target: target, //运动的对象
        property: "translateY", //被滚动的属性
        sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
        min: window.innerHeight - 45 - 48 - 2000, //不必需,滚动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        step: 40,
        animationEnd: function(value) {
          console.log(value);
        }
      })
    },
    components: {
      vHeader,
      vFooter,
      home
    },

}
</script>
<style>
.main {
  height: 100%;
  padding: 1.066667rem 0 1.333333rem 0;
}

#wrapper {
  position: absolute;
  z-index: 1;
  top: 1.066667rem;
  bottom: 1.333333rem;
  left: 0;
  width: 100%;
  background: #ccc;
  overflow: hidden;
}

#scroller {
  position: absolute;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;
}
</style>
