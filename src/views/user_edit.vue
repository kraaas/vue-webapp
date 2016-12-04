<template>
  <div class="edit">
    <section class="item avatar_wrap">
      <label class="tip">头像</label>
      <img class="avatar" :src="user.avatar" alt="">
      <i class="arrow fa fa-angle-right"></i>
    </section>
    <section class="item info_wrap">
      <label class="tip">昵称</label>
      <input class="input_label" type="text" v-model="user.nickname" placeholder="请填写">
    </section>
    <section class="item sex_wrap">
      <label class="tip">性别</label>
      <span class="right_text">{{user.sex}}</span>
      <i class="arrow fa fa-angle-right"></i>
    </section>
    <section class="item job_wrap">
      <label class="tip">职业</label>
      <input class="input_label" type="text" v-model="user.job" placeholder="请填写">
    </section>
    <section class="item desc_wrap">
      <label class="tip">介绍</label>
      <div class="textarea" contenteditable="true" maxlength="70">
        {{user.description}}
      </div>
    </section>
    <button class="save" type="button" @click="saveUser" :disabled="loading">
      {{loading ? '保存中...' : '保存'}}
    </button>
  </div>
</template>
<script>
import {
  mapMutations
} from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    user() {
      return Object.assign({}, this.$store.state.user)
    }
  },
  methods: {
    saveUser() {
      this.loading = !this.loading
      this.$store.dispatch('updateUser', this.user).then(() => {
        this.loading = !this.loading
      	this.$router.back()
      })
    }
  }
}
</script>
<style lang="sass">
.edit {
  .item {
    position: relative;
    min-height: 1.066667rem;
    line-height: 1.066667rem;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    color: #666;
    .tip {
      padding: 0 0.266667rem;
      color: #9c9b9b;
    }
    .right_text {
      float: right;
      margin-right: 0.8rem;
    }
    .input_label {
      color: #666;
      border: none;
      float: right;
      height: 1.04rem;
      text-align: right;
      padding-right: 0.533333rem;
    }
  }
  .avatar_wrap {
    margin-bottom: 0.266667rem;
    height: 1.6rem;
    line-height: 1.6rem;
    border: none;
    .avatar {
      width: 1.066667rem;
      border-radius: 1.066667rem;
      float: right;
      margin-right: 1.013333rem;
      margin-top: 0.266667rem;
    }
  }
  .info_wrap {}
  .job_wrap {
    border: none;
  }
  .desc_wrap {
    margin-top: 0.266667rem;
    border: none;
    .textarea {
      background: #fff;
      padding-left: 0.266667rem;
      line-height: 1.5;
      padding: 0 0.266667rem;
      padding-bottom: 0.266667rem;
    }
  }
  .save {
    display: block;
    width: 96%;
    height: 0.933333rem;
    margin: 0 auto;
    margin-top: 0.4rem;
    border: none;
    background-color: #74cdef;
    font-size: 0.293333rem;
    color: #fdfdfd;
    box-shadow: 0px 0.026667rem 0.053333rem #dedede;
  }
}
</style>
