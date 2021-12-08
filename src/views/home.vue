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
import getInfor from "@/utils/httpRequest"
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
      slide_list:[
            {
                "title": "聚橙制作｜音乐剧《福尔摩斯：安德森家的秘密》中文版",
                "url": "https://s.juooo.com/Rwq2wMV",
                "image_url": "https://image.juooo.com/group1/M00/00/51/rBAAI2EcsSWAfSUKAAFqClP2grk672.jpg"
            },
            {
                "title": "刘晓庆大型史诗话剧《武则天》-南阳站",
                "url": "https://s.juooo.com/Q8IGBwV",
                "image_url": "https://image.juooo.com/group1/M00/00/5E/rBAAI2F6f8GAXAF7AAFnimMCgJA562.jpg"
            },
            {
                "title": "【万有音乐系】《中国歌剧舞剧院新年音乐会》",
                "url": "https://m.juooo.com/tour/tourShowInfo?sid=77",
                "image_url": "https://image.juooo.com/group1/M00/00/61/rBAAI2GUWg-AR-6aAAFbvchzyWY919.jpg"
            },
            {
                "title": "刘晓庆领衔主演 田沁鑫导演 传奇话剧《风华绝代》十周年纪念版",
                "url": "https://s.juooo.com/TrBsEIR",
                "image_url": "https://image.juooo.com/group1/M00/00/65/rBAAFGGteeiABG28AAEyUI4nUaI066.jpg"
            },
            {
                "title": "杨丽萍舞蹈剧场《十面埋伏》",
                "url": "https://m.juooo.com/tour/tourShowInfo?sid=51",
                "image_url": "https://image.juooo.com/group1/M00/00/35/rBAAFGCLqQaAFTeJAAD68ia8Dyc003.jpg"
            },
            {
                "title": "聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版",
                "url": "https://m.juooo.com/tour/tourshowinfo?sid=53",
                "image_url": "https://image.juooo.com/group1/M00/00/40/rBAAI2DRom-ACCizAAEzu_aPQVk149.jpg"
            },
            {
                "title": "外百老汇“怦然心动”恋爱音乐剧《长腿叔叔》中文版",
                "url": "https://s.juooo.com/WwMfqK6",
                "image_url": "https://image.juooo.com/group1/M00/00/41/rBAAI2DejLeASPF_AAFFNyqbmIU615.jpg"
            },
            {
                "title": "宫崎骏经典·暖心家庭音乐剧《魔女宅急便》",
                "url": "https://s.juooo.com/APs8QPy",
                "image_url": "https://image.juooo.com/group1/M00/00/3B/rBAAI2CwVp2AWmGsAAFWGXMcky4482.jpg"
            },
            {
                "title": "聚橙网联合亚洲万里通，推出——买票送3倍”里橙”活动！",
                "url": "https://m.juooo.com/news/show/26945",
                "image_url": "https://image.juooo.com/group1/M00/00/5B/rBAAFGFnp7CAT_zdAAEP8jml_4w578.jpg"
            }
        ],
    };
  },
  created() {
    this.getClassify()
    console.log(window)
  },
  methods: {
     getClassify() {
      // let params = {
      //  city_id : 0,
      //  version : '6.1.54',
      //  referer : 2
      // };
      // getClassify(params).then((data) => {
      //   console.log(data.data);
      //   this.banner=data.data.slide_list
      // });
      // getInfor.then((response=>{
      //   console.log(response)
      // }))
      this.banner=this.slide_list
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