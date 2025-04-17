<template>
  <Analytics />
  <Navbar />
  <HeroSection />
  <Services />
  <About />
  <Project />
  <Technology />
  <Team />
  <Testimonial />
  <Contact />
  <Footer />
</template>
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
useHead({
  title: 'Planet Code Software Solution',
  meta: [
    { name: 'description', content: 'Planet Code Software Solution offers custom software development, web and mobile app development, and innovative IT solutions for businesses worldwide.' },
    { name: 'keywords', content: 'software development, web development, mobile app development, custom software, IT solutions, software solutions, digital transformation, technology consulting, business automation' }
  ]
});
</script>
