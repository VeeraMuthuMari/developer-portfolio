<template>
  <footer class="footer">
    <div class="container footer-main">
      <div><RouterLink to="/" class="brand"><span class="brand-mark">V</span><span>VEERA<span class="brand-dot">.</span></span></RouterLink><p>Building useful software with care, clarity and curiosity.</p></div>
      <div class="footer-links"><RouterLink to="/projects">Projects</RouterLink><RouterLink to="/skills">Skills</RouterLink><RouterLink to="/contact">Contact</RouterLink></div>
      <div class="socials"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><i class="mdi mdi-github"></i></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i class="mdi mdi-linkedin"></i></a></div>
    </div>
    <div class="container footer-bottom"><span>© {{ year }} Veeramuthumari S. All rights reserved.</span><span>Designed & built with Vue.js</span></div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>