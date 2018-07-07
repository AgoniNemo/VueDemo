<template>
<div class="video">
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="content">
    <el-row :gutter="20" v-loading.fullscreen.lock="loading"
          element-loading-text="努力加载中" v-for="cols in rows" :key="cols.id">
      <el-col :span="span" v-for="video in cols" :key="video.id">
        <a @click.stop="imaegClick(video)">
          <el-card :body-style="{ padding: '5px' }" shadow="hover">
            <img :src=imageUrl class="image">
            <div style="padding: 10px 0px;">
              <span style="display: block; height: 40px; overflow: hidden; white-space:pre-wrap;">这是{{video}}标题</span>
              <div class="bottom">
                <span class="time">时间</span>
                <span class="views">观看10次</span>
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
  <div class="foot">
    <pagination :total="969" layout="total, pager, jumper" :page-size="30"></pagination>
  </div>
</div>
</template>
<script type="text/ecmascript-6">

import url from '@/assets/header.jpg';
export default {
  data() {
    return {
      span: 4,
      loading: false,
      videos: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  methods: {
    imaegClick(video) {
      console.log(video);
      this.loading = true;
    }
  },
  computed: {
    imageUrl() {
          return url;
    },
    rows() {
      let col = 24 / this.span;
      let result = [];
      let total = [];
      for (let index = 0; index < this.videos.length; index++) {
        const element = this.videos[index];
        result.push(element);
        if (result.length % col === 0) {
          total.push(result);
          result = [];
        }
      }
      console.log(total);
      return total;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.video
    top: 10px
    .el-carousel__item h3
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    .el-carousel__item:nth-child(2n)
        background-color: #99a9bf;
    .el-carousel__item:nth-child(2n+1)
        background-color: #d3dce6;
.content
  padding: 10px
  .el-col
    margin-top: 10px
  .el-card
    min-height: 261px

</style>
