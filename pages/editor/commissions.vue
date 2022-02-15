<template>
  <div>
    <ui-modal v-show="isModalVisible" @close="closeModal">
    </ui-modal>
    <div class="bg-gray-100 h-screen w-full">
      <div class="grid grid-cols-1 md:grid-cols-4 w-full overflow-hidden">
        <overlay-scrollbars>
          <div
            class="header bg-gray-100 h-auto md:h-screen flex flex-col text-gray-800"
          >
            <div class="w-full h-full flex flex-col z-20">
              <!-- back to main page  -->
              <div class="sticky top-0 border-b-2 py-4 px-8 z-20 bg-gray-100">
                <button
                  class="focus:ring-4 focus:outline-none inline-flex items-center justify-center"
                >
                  <span
                    class="inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400 mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    >
                      <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                  </span>
                  Back to main page
                </button>
              </div>

              <div class="pt-8 pb-8 md:py-4 px-8 md:pt-8 md:pb-32 grow">
                <!-- https://www.storyblok.com/tp/vue-dynamic-component-from-json -->
                <template v-for="block in commissions">
                  <component
                    :is="block.component"
                    :block="block"
                    :key="block._uid"
                  ></component>
                </template>

                <!-- <editor v-model="content" @isEdited="change" /> -->
              </div>

              <div
                class="sticky bottom-0 z-50 flex justify-center items-center pb-6 bg-gradient-to-b from-transparent to-black"
              >
                <ui-button @click="showModal">Generate HTML</ui-button>
              </div>
            </div>
          </div>
        </overlay-scrollbars>
        <div
          class="col-span-3 p-24 flex items-center justify-center h-screen bg-white"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { commissions } from "~/assets/data/commissions.js";
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    commissions() {
      return commissions;
    },
    isHTML() {
      return `
      <!DOCTYPE html>
      <head>
        <title>{Title}</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark" />
        <link rel="shortcut icon" href="{Favicon}">
        <link rel="apple-touch-icon-precomposed" href="{PortraitURL-128}">
      </head>
      <body>
         
      </body>
      </html>`;
    },
  },
  head() {
    return {
      title: "Commission Page",
    };
  },
  methods: {
    change() {
      this.disabled = false;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style>
body {
  font-family: "Be Vietnam Pro", sans-serif;
}

pre {
  @apply rounded-md my-2;
}

code[class*="language-"] {
  @apply whitespace-pre-line;
}

</style>
