<template>
  <header class="topbar">
    <div class="container nav-wrap">
      <RouterLink class="brand" to="/" @click="closeMenu"><span class="brand-mark">V</span><span>VEERA<span class="brand-dot">.</span></span></RouterLink>
      <button class="menu-toggle" aria-label="Toggle navigation" @click="open = !open"><i :class="open ? 'mdi mdi-close' : 'mdi mdi-menu'"></i></button>
      <nav :class="{ 'nav-open': open }">
        <RouterLink v-for="item in items" :key="item.to" :to="item.to" @click="closeMenu">{{ item.label }}</RouterLink>
        <RouterLink class="nav-cta" to="/contact" @click="closeMenu">Let's talk <i class="mdi mdi-arrow-top-right"></i></RouterLink>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const open = ref(false)
const items = [
  { label: 'Home', to: '/' }, { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' }, { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' }, { label: 'Services', to: '/services' }
]
const closeMenu = () => { open.value = false }
</script>