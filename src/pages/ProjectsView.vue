<template>
  <section class="page-hero"><div class="container"><span class="eyebrow"><span></span> PORTFOLIO</span><h1>Selected work &<br><em>experiments.</em></h1><p>Business-focused applications, product ideas and engineering work.</p></div></section>
  <section class="section container"><div class="projects-intro"><SectionHeading eyebrow="FEATURED PROJECTS" title="Built around" accent="real problems." description="A closer look at selected projects and the technologies behind them." /><span class="project-count">03 <small>PROJECTS</small></span></div><div class="project-grid project-grid-large"><ProjectCard v-for="project in projects" :key="project.number" :project="project" /></div><div class="note-box"><i class="mdi mdi-information-outline"></i><p>Some entries describe project work or concepts at a high level. Replace descriptions, screenshots and repository links with approved public project details before publishing.</p></div></section>
</template>
<script setup>
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
</script>