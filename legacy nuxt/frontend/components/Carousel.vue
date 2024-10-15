<template>
  <div id="carousel" class="relative w-full">
    <!--Carousel indicators-->
    <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-twe-carousel-indicators>
      <button @click="goToSlide(index)" v-for="(_, index) in imgArray" :key="index"
        :class="index === currentSlide ? 'active' : ''" type="button"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 [&.active]:bg-black"
        aria-current="true" aria-label="Slide 1"></button>
    </div>

    <!--Carousel items-->
    <div class="relative w-full h-[16vw] overflow-hidden after:clear-both after:block after:content-['']">
      <Slide v-for="(imgSrc, index) in imgArray" :key="index" :active="index === currentSlide" :imgSrc="imgSrc" />
    </div>

    <!--Carousel controls - prev item-->
    <button @click="prevSlide"
      class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button" data-twe-target="#carousel" data-twe-slide="prev">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
    </button>
    <!--Carousel controls - next item-->
    <button @click="nextSlide"
      class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button" data-twe-target="#carousel" data-twe-slide="next">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
    </button>
  </div>
</template>

<script setup>
const currentSlide = ref(0);
const imgArray = [
  "/img/campaign.png",
  "/img/TV.png",
  "/img/front.png"
]
const autoPlayEnabled = ref(true);
const autoPlayInterval = ref(5000);

const slidesCountMinusOne = imgArray.length - 1;
const nextSlide = () => {
  if (currentSlide.value < slidesCountMinusOne) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = slidesCountMinusOne;
  }
}

const goToSlide = (index) => {
  if (index !== currentSlide.value) {
    currentSlide.value = index;
  }
}

const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, autoPlayInterval.value);
}
onMounted (() => {
  if (autoPlayEnabled.value) {
  autoPlay();
}

})

</script>

<style scoped></style>