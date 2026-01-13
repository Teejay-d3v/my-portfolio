<template>
  <button @click="handleClick" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>
