<template>
 <section class="conatainer">
  <h4 class="ms-5">Tech Stack</h4>
  <div class="logos">
      <div class="logos-slide">
        <img src="logos/vuejs.svg"   title="VueJS"/>
        <img src="logos/angular.svg" title="Angular"/>
        <img src="logos/laravel.svg" title="Laravel"/>
        <img src="logos/symfony.svg" title="Syfmony"/>
        <img src="logos/docker.svg"  title="Docker"/>
      </div>
    </div>
 </section>
</template>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10%);
  }
}
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.logos-slide {
  display: inline-block;
  animation: 5s slide infinite linear;
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}
.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
