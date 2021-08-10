<template>
<div class="container">
   <swiper class="swiper" style="background: #FFFFFF" :options="swiperOption">
    <swiper-slide v-for="(item, index) in banner" :key="index">
      <img :data-src="item.image_url" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  </swiper>
  <button @click="handle">点击跳转</button>
</div>
 
</template>

<script> 
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import {getClassify} from "@/api/user"
export default {
  name: "swiper-example-lazy-loading-image",
  title: "Lazy loading images",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banner: [],
      swiperOption: {
         autoplay:true,
        // Enable lazy loading
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {
    this.getClassify()
    console.log(window)
  },
  methods: {
    getClassify() {
      let params = {
        city_id: 4,
        abbreviation: "SH",
        version: "1.0.0",
        referer: 1,
      };
      getClassify(params).then((data) => {
        console.log(data.data);
        this.banner=data.data.slide_list
      });
    },
    handle(){
      this.$router.push({path: '/show', query: {name: "zhangzhenan"}})
    }
  },
};
</script>

<style lang="scss" scoped>
.swiper{
  width: 100vw;
  height: 4rem;
  background-color: #FFFFFF;
}
.swiper-slide {
  text-align: center;
  // background: #444 !important;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}

 .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #FFFFFF;
      }
      
    }
    /deep/ .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom: 0.6rem
      }
</style>