<template>
    <div class="flex flex-col items-center min-h-screen">
        <Navbar />
        <Carousel />
        <NuxtLoadingIndicator />
        <!-- Output the page content -->
        <main id="main" class="flex flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template>