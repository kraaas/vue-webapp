<template>
  <section  class="navigat_wrap">
    <ul class="navigation" v-for="item in 2">
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类{{item}}</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类{{item}}</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类{{item}}</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类{{item}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="sass">
@import "../../assets/style/mixin.scss";
.navigat_wrap {
  box-shadow: 0 0.066667rem 0.066667rem #dedede;
}

.navigation {
  display: flex;
  padding: 0.266667rem 0;
  background-color: #fff;
  .item {
    text-align: center;
    flex: 1;
    .icon {
      display: inline-block;
      width: 1.066667rem;
      height: 1.066667rem;
      border-radius: 1.066667rem;
      @include bg_image('avatar') background-size: 1.066667rem 1.066667rem;
      background-repeat: no-repeat;
    }
    .text {
      display: block;
    }
  }
}
</style>
