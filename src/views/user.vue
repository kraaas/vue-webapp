<template>
  <div class="user">
    <section class="userinfo">
      <img class="avatar" :src="user.avatar">
      <span class="nickname">{{user.nickname}}</span>
      <span class="skill">{{user.job}}</span>
      <router-link  to="/edit">
        <span class="edit"><i class="fa fa-gear"></i></span>
      </router-link>
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
          <router-link to="/edit">
            <div class="entry-name">
              <i class="icon fa fa-edit"></i>
              <span class="text">修改信息</span>
            </div>
            <i class="arrow fa fa-angle-right"></i>
          </router-link>
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
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
<style lang="sass">
@import "../assets/style/mixin.scss";
.userinfo {
  position: relative;
  padding: 0.4rem 0;
  height: 4.0rem;
  background-color: #11acda;
  .nickname, 
  .skill{
    display: block;
    text-align: center;
    color: #fff;
  }
  .avatar {
    display: block;
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
  .edit {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 0.666667rem;
    border: 1px solid #dedede;
    border-radius: 0.666667rem;
    text-align: center;
    color: #dedede;
  }
}

.entry-wrap {
  background-color: #fff;
  .entry-item {
    position: relative;
    line-height: 1.2rem;
    height: 1.2rem;
    border-bottom: 1px solid #e4e4e4;
    .icon {
      display: inline-block;
      margin: 0 0.4rem;
      width: 0.4rem;
      vertical-align: middle;
      font-size: 0.453333rem;
      color: #11acda;
    }
    .text {
      vertical-align: middle;
    }
    .entry-name {
      font-size: 0.32rem;
      color: #252525;
    }
    
  }
}

.entry-sys {
  margin-top: 0.4rem
}
</style>
