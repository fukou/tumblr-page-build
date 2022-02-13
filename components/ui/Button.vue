<template>
    <component
        @click="$emit('click')"
        :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
        :to="to"
        :href="href"
        :class="isType"
         class="cursor-pointer focus:ring-4 focus:outline-non mt-6 font-bold whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border-2 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-400"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        isType: {
            type: String,
            required: false
        },
        to: {
            type: String,
            default: null,
        },
        href: {
            type: String,
            default: null,
        },
    }
}
</script>

<style scoped>
.outlined {
    @apply bg-transparent border-gray-900 text-gray-900;
}
</style>