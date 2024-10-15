<template>
    <transition
        enter-active-class="transition-opacity ease-in-out duration-700"
        leave-active-class="transition-opacity ease-in-out duration-700"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        >
        <div v-show="active"
            class="relative float-left -mr-[100%] w-full">
            <img :src="imgSrc" class="block w-full" alt="..." />
        </div>
    </transition>
</template>

<script setup>
const props = defineProps(['active', 'imgSrc']);
</script>

<style scoped></style>