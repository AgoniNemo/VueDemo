<template>
  <div class="info">
    <div class="image-container">
      <div class="image">
        <img :src="imageUrl">
      </div>
      <div class="text-container">这是文字</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import url from '@/assets/header.jpg';
export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    computed: {
      imageUrl() {
          return url;
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.image-container
  background: red;
  .image
    background: #ffffff
    display: inline-block;
    width: 48px
    height: 48px
    vertical-align:text-top;
  .text-container
    display: inline-block;
    margin-left: 20px;
    padding-top: 20px;
</style>
