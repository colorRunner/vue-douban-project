<template>
    <div class="db_swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slider,index) in sliders" :key="index">
          <a :href="slider.url" target="_blank"><img :src="slider.img"></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
      data() {
        return {
          swiperOption: {
            initialSlide:1,
            autoplay: 5000,
            loop: true,
            setWrapperSize :true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            observeParents:true
          }
        }
      },
      mounted() {
        //获取图片列表数据
        this.getSliders();
      },
      computed: {
        //映射数据
        ...mapState(['sliders'])
      },
      methods: {
        ...mapActions(['getSliders'])
      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style scoped>
  .db_swiper{
    margin: 2px 0 5px;

  }
  .db_swiper swiper-slide{

    height: 100px;
    background-color: #e0e0e0;
  }
  .db_swiper swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
