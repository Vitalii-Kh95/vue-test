<template>
    <div>

    </div>
</template>

<script setup>
const { signOut } = useAuth();

try {
    let res = await signOut(
        { callbackUrl: '/' } // Where the user will be redirected after a successiful login
    );
    console.log(res);
} catch (error) {
    console.log("error", error);
}
</script>