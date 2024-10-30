<script setup>
import TagBadge from '@/components/TagBadge.vue';
</script>

<template>
  <div class=""></div>
  <!-- <div class="flex w-full flex-col items-center">
    <div class="container mx-auto flex flex-col items-center">
      <p class="my-3 flex gap-1 self-start overflow-clip">
        Other tags:
        <TagBadge v-for="tag in tags" :tag-name="tag.name" />
      </p>

      <transition
        mode="out-in"
        enter-active-class="transition-all ease-in-out duration-200"
        leave-active-class="transition-all ease-in-out duration-200"
        :enter-from-class="enterFromClass"
        :leave-to-class="leaveToClass"
      >
        <Cards :key="posts" :posts="posts.results" />
      </transition>
      <Pagination :total="pagesCount" @curent-page="(n) => (curentPage = n)" class="" />
    </div>
  </div> -->
</template>
