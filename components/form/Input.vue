<template>
   <div class="my-3">
        <label class="text-xs text-gray-600 uppercase">
        {{ block.label }}
        </label>
        <input type="text" class="bg-white py-3 px-5 overflow-y-auto h-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-2 block text-sm w-full border-2 border-gray-300 rounded-md" :value="block.value" :placeholder="block.placeholder">
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
        value: {
             type: String,
             default: ""
        },
        placeholder: {
            type: String,
            default:""
        }
    }
}
</script>