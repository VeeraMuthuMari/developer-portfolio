<template>
  <article class="project-card">
    <div class="project-visual" :class="project.accent">
      <span class="project-number">{{ project.number }}</span>
      <i :class="`mdi ${project.icon}`"></i>
      <span class="visual-caption">{{ project.category }}</span>
    </div>
    <div class="project-body">
      <div class="project-title"><h3>{{ project.name }}</h3><span class="project-arrow"><i class="mdi mdi-arrow-top-right"></i></span></div>
      <p>{{ project.description }}</p>
      <div class="tag-list"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div>
      <ul class="project-highlights"><li v-for="point in project.highlights" :key="point">{{ point }}</li></ul>
    </div>
  </article>
</template>
<script setup>
defineProps({ project: { type: Object, required: true } })
</script>