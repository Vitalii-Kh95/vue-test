<template>
    <div>
        <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Главная</a></li>
                <li class="breadcrumb-item active" aria-current="page">Контакты</li>
            </ol>
        </nav>
        <div class="container shadow-sm">
            <div class="row">
                <div class="col-lg-12">
                    <p class="lead mt-3">Contact me!</p>
                    <VeeForm @submit="submitForm" name="contact-form">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Your name:
                                    <VeeField name="name" :rules="{ min: 2, required: true }" v-model="name" type="text"
                                        class="form-control" />
                                </label>
                                <VeeErrorMessage as="p" name="name" class="text-danger" />
                            </div>
                            <div class="col-md-6">
                                <label>Your email:
                                    <VeeField name="email" :rules="{ required: true, email }" v-model="email"
                                        class="form-control" autocomplete="email" />
                                </label>
                                <VeeErrorMessage as="p" name="email" class="text-danger" />
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-md-12">
                                <label>Subject:
                                    <VeeField name="subject" :rules="{ required: true }" v-model="subject"
                                        class="form-control" />
                                </label>
                                <VeeErrorMessage as="p" name="subject" class="text-danger" />
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-md-12">
                                <label>Your message:
                                    <VeeField as="textarea" name="message" :rules="{ required: true }" v-model="message"
                                        rows="2" class="form-control" />
                                </label>
                                <VeeErrorMessage as="p" name="message" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-12">
                               <input type="text">
                            </div>
                        </div>
                        <div class="text-center mt-5 mb-3">
                            <button class="btn btn-primary" type="submit">Send</button>
                        </div>
                    </VeeForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'post-detail' });
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

async function submitForm() {
    try {
        const response = await $fetch('http://127.0.0.1:8000/api/feedback/', {
            method: 'POST',
            body: {
                'name': name.value,
                'email': email.value,
                'subject': subject.value,
                'message': message.value,
            }
        });
        return navigateTo('/success');
    } catch (e) {
        console.error(response);
    }
}
</script>