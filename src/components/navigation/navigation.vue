<template>
  <section  class="navigat_wrap">
    <ul class="navigation">
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类1</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类2</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类3</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类3</span>
      </li>
    </ul>
    <ul class="navigation">
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类1</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类2</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类3</span>
      </li>
      <li class="item">
        <span class="icon"></span>
        <span class="text">分类3</span>
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
