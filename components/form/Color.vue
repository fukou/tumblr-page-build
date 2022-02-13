<template>
  <div class="my-3">
    <div class="inline-flex">
      <h3 class="text-xs text-gray-600 uppercase mb-3">{{ block.label }}</h3>
    </div>
    <div
      class="bg-white rounded-md border-2 border-gray-300 divide-y-2 divide-gray-300"
    >
      <div class="flex items-center justify-between py-3 px-4" v-for="(color, i) of block.palletes" :key="i">
        <div class="text-sm">{{ color.colorLabel }}</div>
        <client-only>
          <color-picker v-model="color.colorPallete" :position="{ left: '0', top: '100%' }">
          </color-picker>
        </client-only>
        <!-- <div
      :style="`background-color:${color}`"
      class="cursor-pointer inline-flex items-center w-7 h-7 rounded-full border-2 border-gray-300"
    ></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
    label: {
      type:String,
      default: "Label"
    },
    name: {
      type: String,
    },
    palletes: {
      type: Object,
    },
  },
};
</script>

<style>
.color-block .color-block-layer {
  @apply rounded-full border-2 border-gray-300;
}
</style>
