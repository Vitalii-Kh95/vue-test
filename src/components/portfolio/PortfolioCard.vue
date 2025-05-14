<script setup>
// import TagBadge from '@/components/blog/TagBadge.vue';
defineProps(['project']);
</script>

<template>
  <div
    class="card mx-3 flex flex-col rounded-lg shadow-2xl duration-150 hover:scale-105 sm:shrink-0 sm:grow sm:basis-0"
  >
    <a href="#!">
      <img class="h-auto w-full rounded-t-lg object-cover" :src="project.image" alt="" />
    </a>
    <div class="card-body justify-between px-6 pb-1 pt-6 text-base-content">
      <h5 class="card-title">{{ project.title }}</h5>
      <div class="flex-grow">
        <div class="h-[100px] text-ellipsis">
          <p class="line-clamp-4 font-sans leading-relaxed">{{ project.description }}</p>
        </div>
      </div>
      <!-- <span
        class="mt-5 flex flex-wrap-reverse items-end justify-end gap-x-1 gap-y-2.5 overflow-hidden"
      >
        <TagBadge v-for="tag in project.tags" :key="tag" :tag="tag" />
      </span> -->
    </div>
    <div class="divider my-0"></div>
    <div class="flex items-center justify-between overflow-hidden px-6 py-3 text-center">
      <router-link
        :to="{
          name: project.routeByName
        }"
        class="btn btn-primary"
        >{{ project.routeByName }}
      </router-link>
    </div>
  </div>
</template>
