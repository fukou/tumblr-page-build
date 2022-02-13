<template>
  <div class="my-3">
    <div class="inline-flex">
      <h3 class="text-xs text-gray-600 uppercase">
        {{ block.label }}
      </h3>
    </div>
    <bubble-menu :editor="editor" v-if="editor">
      <div class="editor-button">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          aria-label="Bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          </svg>
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          aria-label="Italic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 4h-9M14 20H5M14.7 4.7L9.2 19.4" />
          </svg>
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          aria-label="Strike"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 3.6 3.9h.2m8.2 3.7c.3.4.4.8.4 1.3 0 2.9-2.7 3.6-6.2 3.6-2.3 0-4.4-.3-6.2-.9M4 11.5h16"
            />
          </svg>
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          h1
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          h2
        </button>
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          aria-label="Bullet list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          aria-label="Ordered list"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2h2v3h1v1H0V5h1V3H0V2zm15 2H5V3h10v1zm0 4H5V7h10v1zM0 11.5A1.5 1.5 0 011.5 10h.293a1.207 1.207 0 01.853 2.06l-.939.94H3v1H.5a.5.5 0 01-.354-.854l1.793-1.792A.207.207 0 001.793 11H1.5a.5.5 0 00-.5.5H0zm15 .5H5v-1h10v1z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M2.5 1A1.5 1.5 0 001 2.5V10a4 4 0 004 4v-1a3 3 0 01-3-3V7h3.5A1.5 1.5 0 007 5.5v-3A1.5 1.5 0 005.5 1h-3zm7 0A1.5 1.5 0 008 2.5V10a4 4 0 004 4v-1a3 3 0 01-3-3V7h3.5A1.5 1.5 0 0014 5.5v-3A1.5 1.5 0 0012.5 1h-3z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          @click="editor.chain().focus().setHorizontalRule().run()"
          aria-label="Horizontal rule"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </bubble-menu>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
    BubbleMenu,
  },
  props: {
    block: Object,
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
  },
  data() {
    return {
      editor: null,
      contact: null,
    };
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;
      if (isSame) {
        return;
      }
      this.editor.commands.setContent(this.block.value, false);
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit.configure({
          heading: {
            HTMLAttributes: {
              // class: 'text-lg',
            },
          },
        }),
      ],
      editorProps: {
        attributes: {
          class:
            "prose mx-auto focus:outline-none bg-white py-4 px-5 overflow-y-auto h-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-2 block text-sm w-full border-2 border-gray-300 rounded-md",
        },
      },
      content: this.block.value,
      onUpdate: () => {
        // HTML
        this.$emit("input", this.editor.getHTML());
        if (!this.isEdited) {
          this.$emit("isEdited");
          this.isEdited = true;
        }
        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style scoped>
.editor-button {
  @apply flex items-stretch flex-wrap justify-center shadow-sm bg-white block w-full border-2 border-gray-300 rounded-md;
}

.editor-button > button {
  @apply hover:bg-indigo-100 inline-flex items-center justify-center py-1 px-2 flex-1;
}

.editor-button > button.is-active {
  @apply bg-indigo-300;
}
</style>
