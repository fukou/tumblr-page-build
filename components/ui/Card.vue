<template>
    <article class="bg-white shadow-md rounded-lg overflow-hidden">
        <figure class="relative bg-gray-300 h-0 pb-72">
            <img :src="image" :alt="title" class="absolute inset-0 w-full h-full object-cover object-center">
        </figure>
        <div class="p-8">
            <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
            <p class="text-gray-600">{{ description }}</p>
            <slot></slot>
        </div>
    </article>
</template>

<script>
    export default {
        props: [
            'title',
            'image',
            'description'
        ]
    }
</script>
