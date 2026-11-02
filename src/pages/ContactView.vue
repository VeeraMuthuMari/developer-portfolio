<template>
  <section class="page-hero"><div class="container"><span class="eyebrow"><span></span> GET IN TOUCH</span><h1>Have a good idea?<br><em>Let's talk.</em></h1><p>Have a project, opportunity or just want to connect? Send me a message.</p></div></section>
  <section class="section container contact-layout">
    <div class="contact-info"><SectionHeading eyebrow="CONTACT" title="Let's start a" accent="conversation." /><p>I'm always happy to connect with people who are building useful things, solving interesting problems or exploring opportunities.</p><a class="contact-method" :href="`mailto:${profile.email}`"><span class="contact-icon"><i class="mdi mdi-email-outline"></i></span><span><small>EMAIL ME</small><strong>{{ profile.email }}</strong></span><i class="mdi mdi-arrow-top-right"></i></a><div class="contact-method"><span class="contact-icon"><i class="mdi mdi-map-marker-outline"></i></span><span><small>LOCATION</small><strong>{{ profile.location }}</strong></span></div><div class="contact-social"><a :href="profile.github" target="_blank" rel="noreferrer"><i class="mdi mdi-github"></i> GitHub</a><a :href="profile.linkedin" target="_blank" rel="noreferrer"><i class="mdi mdi-linkedin"></i> LinkedIn</a></div></div>
    <form class="contact-form" @submit.prevent="submitForm"><span class="eyebrow">SEND A MESSAGE</span><label>Your name<input v-model.trim="form.name" required placeholder="Enter your name"></label><label>Email address<input v-model.trim="form.email" type="email" required placeholder="you@example.com"></label><label>Subject<input v-model.trim="form.subject" required placeholder="What would you like to discuss?"></label><label>Message<textarea v-model.trim="form.message" rows="5" required placeholder="Tell me a little about it..."></textarea></label><button class="btn btn-primary" type="submit">Open email app <i class="mdi mdi-send"></i></button><p class="form-hint">This frontend-only form opens your email application; it does not store or send data to a server.</p></form>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading.vue'
const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitForm = () => {
  const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
}
</script>