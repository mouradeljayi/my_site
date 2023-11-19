<script setup>
const items = ref([
  { image: "angular.svg" },
  { image: "docker.svg" },
  { image: "laravel.svg" },
  { image: "symfony.svg" },
  { image: "vuejs.svg" },
]);
</script>


<template>
    <Swiper
      :height="500"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :slides-per-view="4"
      :space-between="10"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      :breakpoints="{
         
         768: {
            slidesPerView: 5,
            //spaceBetween: 5,
          },
      }"
    >
      <SwiperSlide v-for="item in items" :key="item.image">
        <img :src="item.image" style="width: 50px;" />
      </SwiperSlide>
      <SwiperControls />
    </Swiper>

</template>

  <style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

</style>
  