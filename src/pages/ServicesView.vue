<template>
  <section class="page-hero"><div class="container"><span class="eyebrow"><span></span> WHAT I CAN DO</span><h1>Engineering services<br><em>with purpose.</em></h1><p>From a strong backend foundation to a polished frontend experience.</p></div></section>
  <section class="section container"><SectionHeading eyebrow="MY CAPABILITIES" title="How I can" accent="help." description="A selection of development areas I work with. Scope and availability can be discussed for each project." /><div class="services-grid"><article v-for="(service, index) in services" :key="service.title" class="service-card"><span class="service-number">0{{ index + 1 }}</span><div class="service-icon"><i :class="`mdi ${service.icon}`"></i></div><h3>{{ service.title }}</h3><p>{{ service.description }}</p><div class="service-line"></div></article></div></section>
  <section class="cta-band"><div class="container cta-inner"><div><span class="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's create something <em>useful.</em></h2></div><RouterLink to="/contact" class="btn btn-primary">Start a conversation <i class="mdi mdi-arrow-top-right"></i></RouterLink></div></section>
</template>
<script setup>
import SectionHeading from '../components/SectionHeading.vue'
const services = [
  { icon: 'mdi-api', title: 'API development', description: 'Designing and building REST APIs with clear contracts, validation and maintainable service layers.' },
  { icon: 'mdi-database-cog-outline', title: 'Database solutions', description: 'Working with relational data models, PostgreSQL queries, migrations and efficient data access.' },
  { icon: 'mdi-web', title: 'Frontend development', description: 'Creating responsive Vue.js interfaces with reusable components and thoughtful interactions.' },
  { icon: 'mdi-application-brackets-outline', title: 'Business applications', description: 'Turning operational requirements into structured workflows and practical software features.' }
]
</script>