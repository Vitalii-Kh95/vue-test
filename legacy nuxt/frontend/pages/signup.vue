<template>
    <div class="container shadow-sm">
        <Bform class="form-signin" @submit="userRegister">
            <h1 class="h3 mb-3 mt- font-weight-normal">Please sign up</h1>
            <div class="row">
                <BFormControl class="col">
                    <BFormLabel>Username:</BFormLabel>
                    <BFormInput autocomplete="username"
                        v-model="username" v-bind="usernameAttrs" />
                        <p>{{ errors.username }}</p>
                </BFormControl>
            </div>
            <div class="row">
                <BFormControl class="col">
                    <BFormLabel>Password:</BFormLabel>
                    <BFormInput type="password" autocomplete="new-password" class="form-control mt-2"
                        v-model="password" v-bind="passwordAttrs" />
                        <p class="text-danger">{{ errors.password }}</p>
                </BFormControl>
            </div>
            <div class="row">
                <BFormControl class="col">
                    <BFormLabel>Repeat password:</BFormLabel>
                    <BFormInput type="password" autocomplete="new-password" class="form-control mt-2"
                        v-model="confirmation" v-bind="confirmationAttrs" />
                        <p>{{ errors.confirmation }}</p>
                </BFormControl>
            </div>
            <pre>values: {{ values }}</pre>

            <button class="btn mt-2 btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </BForm>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Signup',
    layout: 'post-detail',
    public: true,
    auth: {
        unauthenticatedOnly: true,
    },
});
const schema = {
    username: 'required|min:2|max:24',
    password: 'required',
    confirmation: 'required|confirmed:@password'
};
const { values, errors, defineField } = useForm({
  validationSchema: schema,
});
const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');
const [confirmation, confirmationAttrs] = defineField('confirmation');
const { signUp, signIn } = useAuth();
const { referer } = useReferer();


async function userRegister(e) {
    try {
        e.preventDefault();
        let res = await signUp(
            username, password, confirmation
        );
        console.log(res);
        await signIn(
            { username: username, password: password },
        );
    } catch (error) {
        // Somehow Signin after Signup leads to error, It's a bug. For now I catch that error and redirect user to ref link
        navigateTo(referer.value);
    }
}

</script>