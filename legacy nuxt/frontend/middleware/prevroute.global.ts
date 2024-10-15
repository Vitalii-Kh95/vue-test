export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.name === 'signin' || to.name === 'signup') {
        if (from.name !== 'signup') {
            const { referer, setReferer } = useReferer();
            setReferer(from.fullPath as string);
        }
    }
}
);