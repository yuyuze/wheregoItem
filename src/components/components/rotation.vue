<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="swiper">
      <img :src="slide" class="swiper-pic">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 2
        }
      },
      swiperSlides: [
        "//imgs.qunarzz.com/p/tts0/1810/26/3c6d0e9342a45202.jpg_r_480x320x90_6b7e0634.jpg",
        "//imgs.qunarzz.com/vs_ceph_vs_tts/82b6bc70-eff8-4d6b-9827-b6cf3aa20491.jpg_r_480x320x90_32543bc2.jpg",
        "https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_256x160_224237e3.jpg",
        "https://imgs.qunarzz.com/sight/p0/1809/75/756c6ed69c72ec41a3.img.jpg_256x160_bde3e5a2.jpg"
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
.swiper-container {
  .swiper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 44.6%;
    .swiper-pic {
      width: 100%;
    }
  }
  .swiper-pagination{
    .swiper-pagination-bullet{
      width: 20px;
      height: 20px;
    }
    .swiper-pagination-bullet-active{
      background: #fff;
    }
  }
}
</style>
