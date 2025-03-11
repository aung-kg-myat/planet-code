<template>
  <Motion
    v-if="isReady"
    as="div"
    :initial="{ opacity: 0, y: 50, filter: 'blur(15px)' }"
    :while-in-view="{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    }"
    :transition="{
      delay: 0.5,
      duration: 0.8,
      ease: 'easeInOut',
    }"
    class="relative"
  >
    <div
      id="services"
      class="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"
    >
      <!-- <div class="flex items-center justify-center w-full">
      <RadiantText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        :duration="4"
      >
        <span class="md:text-7xl text-4xl font-bold">Our Services</span>
      </RadiantText>
    </div> -->
      <div class="flex items-center justify-center">
        <SparklesText
          text="Our Services"
          :colors="{ first: '#fff', second: '#FE8BBB' }"
          :sparkles-count="8"
          class="md:text-5xl text-3xl font-bold text-orange-400"
        />
      </div>

      <div
        class="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 z-30"
      >
        <FlipCard
          v-for="service in services"
          :key="service.title"
          :description="service.description"
          :image="service.image"
          rotate="y"
          :subtitle="service.title"
          :title="service.title"
          :icon-class="service.iconClass"
        />
      </div>
      <ParticlesBg
        class="absolute inset-0 z-10"
        :quantity="300"
        :ease="100"
        :color="'#FB923C'"
        :staticity="10"
        refresh
      />
    </div>
  </Motion>
</template>
<script setup lang="ts">
import { Motion } from "motion-v";

const isReady = ref(false);

onMounted(() => {
  isReady.value = true;
});
const services = ref([
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to enhance your business operations across all platforms.",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:application-brackets",
  },
  {
    title: "Dynamic Website",
    description:
      "Engaging, responsive websites to elevate your online presence and captivate your audience.",
    image:
      "https://plus.unsplash.com/premium_photo-1720551256879-92e5b13285be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:earth",
  },
  {
    title: "Management System",
    description: "Specialized systems for education, healthcare, and more.",
    image:
      "https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor-dashboard",
  },
  {
    title: "Portfolio",
    description: "Showcase your work with elegant portfolio designs.",
    image:
      "https://plus.unsplash.com/premium_photo-1721080251097-b9accb630494?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:laptop-account",
  },
  {
    title: "Innovative Design",
    description:
      "Creative and modern design solutions that blend aesthetics with functionality.",
    image:
      "https://plus.unsplash.com/premium_photo-1720201054067-adf2837be5e4?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor-dashboard",
  },
  {
    title: "POS Systems",
    description:
      "Customizable POS systems tailored to streamline operations for various industries.",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601246-aff81da43707?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor",
  },
  {
    title: "Data Solutions",
    description: "Data-driven systems for better business decisions.",
    image:
      "https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:database",
  },
  {
    title: "Cloud Solutions",
    description:
      "Optimize infrastructure with scalable cloud solutions and automation, ensuring seamless deployment, security, and high availability.",
    image:
      "https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:cloud-tags",
  },
]);
</script>
