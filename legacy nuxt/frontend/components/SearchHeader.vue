<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"></rect>
                </svg>
                <div class="container">
                    <div class="carousel-caption">
                        <form @submit.prevent="setq" class="my-2 my-lg-0">
                            <input name="q" type="text" class="form-control" placeholder="Поиск" aria-label="Поиск"
                                v-model="search">
                            <button  class="btn btn-outline-success mt-3">Поиск</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const search = ref(route.query.q);
watch(() => route.query.q, () => {
    search.value = route.query.q
});
async function setq() {
    return router.push({
        path: '/search',
        query: { q: search.value },
    });
}

</script>