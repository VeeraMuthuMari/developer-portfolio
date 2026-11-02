import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import SkillsView from '../pages/SkillsView.vue'
import ExperienceView from '../pages/ExperienceView.vue'
import ProjectsView from '../pages/ProjectsView.vue'
import ServicesView from '../pages/ServicesView.vue'
import ContactView from '../pages/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [{
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'about', name: 'about', component: AboutView },
      { path: 'skills', name: 'skills', component: SkillsView },
      { path: 'experience', name: 'experience', component: ExperienceView },
      { path: 'projects', name: 'projects', component: ProjectsView },
      { path: 'services', name: 'services', component: ServicesView },
      { path: 'contact', name: 'contact', component: ContactView }
    ]
  }]
})
export default router