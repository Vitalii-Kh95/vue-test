<template>
    <div class="relative w-full h-[16vw] overflow-hidden">
        <div class="w-full h-full opacity-30 bg-accent">
            <!-- <img :src="imgSrc" class="block w-full" alt="..." /> -->
        </div>
        <div class=" absolute top-1/2 w-full text-center">
                <h1 class="text-5xl font-bold">
                    {{ title }}
                </h1>
        </div>
        <!-- <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"></rect>
                </svg>
                <div class="container">
                    <div class="carousel-caption">
                        <h1>
                            {{ title }}
                        </h1>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>


<script setup>
const props = defineProps({
    title: String
});
</script>
<style scoped></style>