<template>
  <section class="page-hero"><div class="container"><span class="eyebrow"><span></span> EXPERIENCE</span><h1>Learning, building<br><em>and growing.</em></h1><p>My professional journey and the work that continues to shape me.</p></div></section>
  <section class="section container experience-layout"><div class="experience-intro"><SectionHeading eyebrow="CAREER JOURNEY" title="Where I've" accent="contributed." /><p>My experience is centered on developing business software, implementing application features and connecting frontend experiences with reliable backend systems.</p></div><div class="timeline"><article v-for="(item, index) in experience" :key="item.role" class="timeline-item"><div class="timeline-marker"></div><div class="timeline-card"><div class="timeline-top"><span>{{ item.period }}</span><span class="timeline-number">0{{ index + 1 }}</span></div><h3>{{ item.role }}</h3><h4>{{ item.company }}</h4><p>{{ item.description }}</p><ul><li v-for="point in item.points" :key="point">{{ point }}</li></ul></div></article></div></section>
</template>
<script setup>
import { experience } from '../data/experience'
import SectionHeading from '../components/SectionHeading.vue'
</script>