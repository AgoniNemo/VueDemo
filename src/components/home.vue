<template>
 <div>
    <el-row>
    <el-col :span="24" class="header">
      <dropdown trigger="hover" ref="dropdownView">
        <div class="image">
          <img  class="icon" :src=imageUrl>
        </div>
        <div slot="content">
          <menus>
            <menu-item icon="user" :click=personalInformationClick>个人信息</menu-item>
            <menu-item icon="ticket" :click=informationManger>资料管理</menu-item>
            <menu-item icon="heart-o" :click=collectionVideo>收藏影片</menu-item>
            <div class="divider"></div>
            <menu-item icon="power-off" :click=logout>退出</menu-item>
          </menus>
        </div>
      </dropdown>
    </el-col>
  </el-row>
  <router-view></router-view>
 </div>
</template>
<script type="text/ecmascript-6">
import url from '@/assets/header.jpg';

export default {
    computed: {
        imageUrl() {
            return url;
        }
    },
    methods: {
      informationManger() {
         console.log('资料管理');
        let dropdown = this.$refs.dropdownView;
        dropdown.isShow = false;
        this.$router.push({ path: '/' });
      },
      collectionVideo() {
        console.log('收藏影片');
        let dropdown = this.$refs.dropdownView;
        dropdown.isShow = false;
        this.$router.push({ path: '/helloworld' });
      },
      personalInformationClick() {
        console.log('个人信息');
        let dropdown = this.$refs.dropdownView;
        dropdown.isShow = false;
        this.$router.push({ path: '/info' });
      },
      logout() {
        console.log('退出登录');
        let dropdown = this.$refs.dropdownView;
        dropdown.isShow = false;
        this.$router.push({ path: '/' });
      }
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
    height: 48px
    box-shadow: 0 10px 18px #888888
    background: #3c81df
    .image
      display: inline-block
      position: absolute
      top: 4px
      right: 10px
      height: 40px
      width: 40px
      .icon
        border-radius: 50%
.main
    background-color: red
    height: 50px
</style>
