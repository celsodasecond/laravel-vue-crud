<template>
    <div class="py-10">
        <header>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1
                    class="text-3xl font-bold leading-tight text-gray-900 animate__animated animate__fast animate__fadeInLeft">
                    {{ title }}</h1>
                <slot name="header"></slot>
            </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-8 sm:px-0">
                    <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" /> -->
                    <slot></slot>
                </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
});
</script>

<style>

</style>