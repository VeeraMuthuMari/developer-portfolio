<template>
  <section class="hero-section">
    <div class="hero-grid container">
      <div class="hero-copy">
        <div class="availability"><span class="pulse"></span> SOFTWARE DEVELOPER <span class="availability-line"></span> INDIA</div>
        <p class="hero-kicker">HELLO, I'M VEERAMUTHUMARI S</p>
        <h1>Turning ideas into <span>reliable</span> digital experiences.</h1>
        <p class="hero-description">I design and develop business applications, robust backend services and clean user interfaces. My focus is on building software that solves real problems.</p>
        <div class="hero-actions">
          <RouterLink to="/projects" class="btn btn-primary">Explore my work <i class="mdi mdi-arrow-right"></i></RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">Get in touch <i class="mdi mdi-arrow-top-right"></i></RouterLink>
        </div>
        <div class="hero-meta"><div><strong>01</strong><span>Backend & API</span></div><div><strong>02</strong><span>Frontend UI</span></div><div><strong>03</strong><span>Database design</span></div></div>
      </div>
      <div class="hero-art">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="profile-panel">
          <div class="panel-top"><span class="window-dots"><b></b><b></b><b></b></span><span>developer.profile</span><i class="mdi mdi-dots-horizontal"></i></div>
          <div class="avatar-placeholder"><i class="mdi mdi-account-circle-outline"></i><span class="avatar-status"></span></div>
          <p class="panel-label">SOFTWARE DEVELOPER</p><h2>Build. Improve.<br><span>Deliver.</span></h2>
          <div class="code-snippet"><span class="code-purple">const</span> developer = {<br>&nbsp; stack: <span class="code-green">' .NET + Vue '</span>,<br>&nbsp; mindset: <span class="code-green">'Problem solver'</span>,<br>&nbsp; focus: <span class="code-green">'Quality software'</span><br>}</div>
          <div class="panel-bottom"><span><i class="mdi mdi-circle"></i> Available to connect</span><i class="mdi mdi-arrow-up-right"></i></div>
        </div>
        <div class="float-chip chip-top"><i class="mdi mdi-code-braces"></i> Clean code</div>
        <div class="float-chip chip-bottom"><i class="mdi mdi-database-outline"></i> Data-driven</div>
      </div>
    </div>
    <div class="hero-bottom container"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>01 / 07</span></div>
  </section>
  <section class="intro-strip"><div class="container intro-inner"><span class="eyebrow">WHAT I DO</span><p>Thoughtful engineering across <strong>backend systems</strong>, <strong>modern interfaces</strong> and <strong>data-driven applications.</strong></p><RouterLink to="/about" class="text-link">More about me <i class="mdi mdi-arrow-right"></i></RouterLink></div></section>
  <section class="section container home-projects">
    <SectionHeading eyebrow="SELECTED WORK" title="A few things I've" accent="worked on." description="A selection of business applications and product concepts that reflect my approach to software development." />
    <div class="project-grid"><ProjectCard v-for="project in projects.slice(0, 3)" :key="project.number" :project="project" /></div>
    <div class="center-action"><RouterLink to="/projects" class="btn btn-secondary">View all projects <i class="mdi mdi-arrow-right"></i></RouterLink></div>
  </section>
</template>
<script setup>
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
</script>