<template>
    <PageLayout>
        <template v-slot:header>
            <div class="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1
                    class="text-3xl font-bold leading-tight text-gray-900 animate__animated animate__fast animate__fadeInLeft">
                    Reviews</h1>
                <router-link :to="{ name: 'ReviewCreate' }"
                    class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-4 h-4 -mt-1 inline-block animate__animated animate__flash">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    Add New Review
                </router-link>
            </div>
        </template>
    </PageLayout>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 animate__animated animate__backInUp">
        <div v-for="review in reviews" :key="review.id"
            class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img :src="review.image" alt="" class="w-full h-48 object-cover">
            <h4 class="mt-4 text-lg font-bold">{{ review.title }}</h4>
            <div v-html="review.description" class="overflow-hidden flex-1"></div>

            <div class="flex justify-between items-center mt-3">
                <router-link :to="{ name: 'ReviewView', params: { id: review.id } }"
                    class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit
                </router-link>
                <button v-if="review.id" type="button" @click="deleteReview(review)"
                    class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-5 h-5 -mt-1 inline-block">
                        <path fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clip-rule="evenodd" />
                    </svg>

                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import PageLayout from '../components/PageLayout.vue';

const reviews = computed(() => store.state.reviews);

function deleteReview (review) {
    if (confirm(`Are you sure you really want to delete this review? This Operations cannot be undone.`)){
        // DELETE SURVEY
        
    }
}
</script>

<style scoped>

</style>