<template>
  <div class="max-w-4xl mx-auto py-16 md:px-0 px-6">
    <div
      class="mt-4 mb-16 flex flex-col justify-center items-center text-center text-white"
    >
      <svg
        class="text-center mb-4"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 0L24.7139 14.3836L31.8017 1.75077L27.8808 15.6954L39.2635 6.73654L30.3046 18.1192L44.2492 14.1983L31.6164 21.2861L46 23L31.6164 24.7139L44.2492 31.8017L30.3046 27.8808L39.2635 39.2635L27.8808 30.3046L31.8017 44.2492L24.7139 31.6164L23 46L21.2861 31.6164L14.1983 44.2492L18.1192 30.3046L6.73654 39.2635L15.6954 27.8808L1.75077 31.8017L14.3836 24.7139L0 23L14.3836 21.2861L1.75077 14.1983L15.6954 18.1192L6.73654 6.73654L18.1192 15.6954L14.1983 1.75077L21.2861 14.3836L23 0Z"
          fill="currentColor"
        />
      </svg>

      <h1 class="text-3xl font-bold mb-4 relative">Tumblr page builder <span class="absolute -top-2 -right-14 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">Beta</span></h1>
      <p>A page builder, specifically used for Tumblr</p>
      <div class="flex items-center justify-center flex-wrap md:space-x-4 mt-4">
        <ui-button href="#layout" class="w-full md:w-auto">Choose page layout</ui-button>
        <ui-button
          isType="outlined"
          href="https://ko-fi.com/fukuo"
          class="w-full md:w-auto"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            class="mr-2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4.083 5h10.834a1.08 1.08 0 0 1 1.083 1.077v8.615c0 2.38 -1.94 4.308 -4.333 4.308h-4.334c-2.393 0 -4.333 -1.929 -4.333 -4.308v-8.615a1.08 1.08 0 0 1 1.083 -1.077"
            />
            <path
              d="M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.288 -1.12 2.333 -2.5 2.333h-2.5"
            />
          </svg>
          Buy me a coffee?</ui-button
        >
      </div>
    </div>
    <section id="layout" class="grid md:grid-cols-2 gap-12 pt-8 pb-36">
      <ui-card
        v-for="page in pages"
        :key="page.pageName"
        :title="page.pageName"
        :image="page.pageImageURL"
        :description="page.pageDescription"
      >
        <ui-button :to="page.pageURL">See more</ui-button>
      </ui-card>
    </section>

    <div class="text-black text-center mt-8 pb-24">
      <h1 class="text-3xl font-bold mb-4">Not satisfied?</h1>
      <p>Consider commissioning me a custom page, specifically for yours.</p>
      <ui-button>Read more about the details</ui-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          pageName: "Heading",
          pageImageURL: "#",
          pageDescription:
            "Sed enim volutpat mi viverra id nam id vitae mi. Blandit consequat luctus morbi ultricies. Nullam montes, id dui, ac nulla lectus. Donec eu duis eleifend quam lacus, a. Mollis id fames rhoncus velit orci enim, ultrices. In at sit feugiat molestie.",
          pageURL: "/editor/commissions",
        },
        {
          pageName: "Heading",
          pageImageURL: "#",
          pageDescription:
            "Sed enim volutpat mi viverra id nam id vitae mi. Blandit consequat luctus morbi ultricies. Nullam montes, id dui, ac nulla lectus. Donec eu duis eleifend quam lacus, a. Mollis id fames rhoncus velit orci enim, ultrices. In at sit feugiat molestie.",
          pageURL: "#",
        },
      ],
    };
  },
  head () {
    return {
      title: '',
    }
  },
};
</script>

<style>
body {
  background: linear-gradient(
    334.45deg,
    #fff8b6 -11.23%,
    #65c495 41.97%,
    #4b8cf9 96.38%
  );
  font-family: 'Be Vietnam Pro', sans-serif;
}
</style>
