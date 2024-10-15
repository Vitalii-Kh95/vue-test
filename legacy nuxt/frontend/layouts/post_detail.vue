<template>
    <div class="flex flex-col items-center min-h-screen">
        <Navbar />
        <NuxtLoadingIndicator />
        <!-- Output the page content -->
        <main class="w-full flex flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template>
