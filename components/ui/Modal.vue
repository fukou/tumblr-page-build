<template>
  <transition name="modal-fade">
    <div
      class="fixed inset-0 flex justify-center items-center bg-gray-800/70 z-50"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div
        class="flex flex-col p-8 bg-white border border-blue-100 shadow-lg rounded-2xl max-w-4xl h-80"
        role="alert"
      >
        <div class="items-center sm:flex">
          <h2 class="text-2xl font-bold mb-2" id="modalTitle">{{ label }}</h2>
        </div>

        <p class="flex-grow mt-4 text-gray-500">
          {{ description }}
        </p>

        <div class="mt-6 sm:flex">
          <ui-button @click="close" aria-label="Close modal">Close</ui-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label",
    },
    description: {
      type: String,
      default: "This is a default description text for modal components",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
