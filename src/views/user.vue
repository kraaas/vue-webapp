<template>
  <div class="user">
    <section class="userinfo">
      <span class="avatar"></span>
      <span class="nickname">kraaas</span>
      <span class="skill">React, Vue, Angular</span>
    </section>
    <section class="entry">
      <ul class="entry-wrap entry-user">
        <li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-file-photo-o"></i>
          	<span class="text">相册</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
        <li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-star"></i>
          	<span class="text">收藏</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
        <li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-money"></i>
          	<span class="text">钱包</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
        <li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-credit-card"></i>
          	<span class="text">卡包</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
      </ul>
      <ul class="entry-wrap entry-sys">
      	<li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-edit"></i>
          	<span class="text">修改信息</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
        <li class="entry-item">
          <div class="entry-name">
          	<i class="icon fa fa-gear"></i>
          	<span class="text">系统设置</span>
          </div>
          <i class="arrow fa fa-angle-right"></i>
        </li>
      </ul>
      <ul class="entry-sys"></ul>
    </section>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="sass">
@import "../assets/style/mixin.scss";
.userinfo {
  padding: 0.4rem 0;
  height: 4.0rem;
  background-color: #11acda;
  span {
    display: block;
    text-align: center;
    color: #fff;
  }
  .avatar {
    margin: 0 auto;
    width: 2.0rem;
    height: 2.0rem;
    @include bg_image('../assets/img/avatar');
    background-size: 2.0rem 2rem;
    border-radius: 2rem;
  }
  .nickname {
    padding: 0.133333rem 0;
  }
  .skill {
    color: #b8e2ef;
  }
}

.entry-wrap {
	background-color: #fff;
  .entry-item {
  	position: relative;
    line-height: 1.2rem;
    height: 1.2rem;
    border-bottom: 1px solid #e4e4e4;
    .icon{
    	display: inline-block;
    	margin:0 0.4rem;
    	width: 0.4rem;
    	vertical-align: middle;
    	font-size: 0.453333rem;
    	color: #11acda;
    }
    .text{
    	vertical-align: middle;
    }
    .entry-name {
      font-size: 0.32rem;
      color: #252525;
    }
    .arrow{
    	position: absolute;
    	top: 50%;
    	right: 0.4rem;
    	transform: translateY(-50%);
    	font-size: 0.373333rem;
    	color: #989696;
    }
  }
}
.entry-sys{
	margin-top: 0.4rem
}
</style>
