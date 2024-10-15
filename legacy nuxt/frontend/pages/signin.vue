<template>
    <div>
        <div class="container">
            <VeeForm class="form-signin" @submit="userLogin">
                <h1 class="h3 mb-3 mt-3 font-weight-normal">Please sign in</h1>
                <div class="row">
                    <div class="col">
                        <label>Username
                            <VeeField name="username" :rules="{ min: 2, max: 24, required: true }"
                                autocomplete="username" class="form-control" v-model="login.username" />
                        </label>
                        <VeeErrorMessage as="p" name="username" class="text-danger" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>Password
                            <VeeField name="password" :rules="{ required: true }" type="password"
                                autocomplete="current-password" class="form-control mt-2" v-model="login.password" />
                        </label>
                        <VeeErrorMessage as="p" name="password" class="text-danger" />
                    </div>
                </div>
                <button class="btn mt-2 btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </VeeForm>
        </div>
    </div>
</template>

<script setup>
const { signIn } = useAuth();
definePageMeta({
    title: 'Signin',
    layout: 'post-detail',
    public: true,
    auth: {
        unauthenticatedOnly: true,
    },
})
const login = reactive({
    username: '',
    password: ''
});
const { referer } = useReferer();
async function userLogin(e) {
    try {
        e.preventDefault();
        let res = await signIn(
            { ...login },
            { callbackUrl: referer.value } // Where the user will be redirected after a successiful login
        );
    } catch (error) {
        console.log("error", error);
    }
}
</script>