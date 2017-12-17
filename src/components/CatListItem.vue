<template>
  <li>
    {{ cat.text }}
    <span v-if="cat.show">
      {{ cat.details }}
    </span>
    <button @click="$emit('toggle', cat.id)">
      <span v-if="cat.show"><</span>
      <span v-else>></span>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true
    }
  }
}
</script>
