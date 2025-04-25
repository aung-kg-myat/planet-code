<template>
  <Transition name="fade" appear :style="{ '--delay': `${2 * 0.15}s` }">
    <template v-if="isMounted">
      <div>
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
        <Footer
      /></div>
    </template>
  </Transition>
</template>
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
  title: "Planet Code Software Solution",
  meta: [
    {
      name: "description",
      content:
        "Planet Code Software Solution offers custom software development, web and mobile app development, and innovative IT solutions for businesses worldwide.",
    },
    {
      name: "keywords",
      content:
        "software development, web development, mobile app development, custom software, IT solutions, software solutions, digital transformation, technology consulting, business automation",
    },
  ],
});

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<style scoped>
.fade-enter-active {
  transition: all 1.5s ease;
  transition-delay: var(--delay, 0);
}

.fade-enter-from {
  opacity: 0;
}
</style>
