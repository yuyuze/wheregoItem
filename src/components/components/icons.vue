<template>
  <swiper :options="swiperOption">
    <swiper-slide class="icons" v-for="(page,index) of iconListComputed" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img :src="item.imgUrl" class="icon-img-content" alt="item.desc">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          desc: "游乐园"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          desc: "必游榜单"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          desc: "演出"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          desc: "城市观光"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          desc: "一日游"
        }
      ],
      swiperOption: {}
    };
  },
  computed: {
    iconListComputed: function() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        console.log(page);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="scss">
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  display: flex;
  flex-wrap: wrap;
  .icon {
    position: relative;
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    overflow: hidden;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 44px;
      box-sizing: border-box;
      padding: 10px;
      .icon-img-content {
        height: 100%;
        margin: 0 auto;
        display: block;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
}
</style>
