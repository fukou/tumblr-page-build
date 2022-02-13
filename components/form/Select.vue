<template>
  <div class="my-3">
    <div class="inline-flex">
      <h3 class="text-xs text-gray-600 uppercase">
        {{ block.label }}
      </h3>
    </div>
    <div
      class="relative bg-white h-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-2 block text-sm w-full border-2 border-gray-300 rounded-md"
      :tabindex="tabindex"
      @blur="open = false"
    >
      <div
        class="py-3 px-5 cursor-pointer select-none"
        :class="{ open: open }"
        @click="open = !open"
      >
        {{ selected }}
      </div>
      <div class="absolute right-3 top-1/2 transform -translate-y-2/4 select-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        class="items absolute top-full left-0 right-0 bg-white border-2 border-gray-300 rounded-md overflow-hidden z-10"
        :class="{ selectHide: !open }"
      >
        <div
          class="item cursor-pointer select-none p-2 hover:bg-gray-500 hover:text-white"
          v-for="(option, i) of block.options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
    label: {
      default: "Label",
      type: String,
    },
    options: {
      type: Array,
      required: false,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.block.default
        ? this.block.default
        : this.block.options.length > 0
        ? this.block.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.selectHide {
  display: none;
}
</style>
