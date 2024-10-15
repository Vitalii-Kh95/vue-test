<template>
    <div>
        <Header title="Спасибо за обращение" />
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav aria-label="breadcrumb" class="mt-4">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Контакты</li>
                        </ol>
                    </nav>
                    <p class="lead">Ваше письмо отправлено! Спасибо.</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    definePageMeta({ layout: 'post-detail' });
</script>
  
<style scoped></style>