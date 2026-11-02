<template>
  <div class="section-heading">
    <span class="eyebrow"><span></span>{{ eyebrow }}</span>
    <h2>{{ title }} <em v-if="accent">{{ accent }}</em></h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>
<script setup>
defineProps({ eyebrow: { type: String, default: 'A LITTLE ABOUT ME' }, title: String, accent: String, description: String })
</script>