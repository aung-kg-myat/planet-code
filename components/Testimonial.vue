<template>
  <div id="testimonials" class="relative py-28 bg-black">
    <Gradient />
    <!-- <nuxt-img
      src="/images/freepic.jpg"
      format="webp"
      :srcset="`/images/freepic.jpg 480w, /images/freepic.jpg 800w`"
      sizes="(max-width: 600px) 480px, 800px"
      alt="hero-background"
      class="w-full h-screen"
    /> -->
    <div data-aos="fade-down">
      <div class="flex items-center justify-center font-carterOne">
        <SparklesText
          text="Testimonials"
          :colors="{ first: '#fff', second: '#FE8BBB' }"
          :sparkles-count="5"
          class="md:text-5xl text-3xl font-bold text-orange-400"
        />
      </div>
      <ClientOnly>
        <AnimatedTestimonials :testimonials="testimonials" />
      </ClientOnly>
    </div>
  </div>
</template>
<script lang="ts" setup>
const testimonials = [
  {
    quote:
      "I had the pleasure of working with Aung on the development of a Telegram mini app. His ability to take on tasks independently, without needing constant support, made a significant difference in our workflow. He approaches every challenge with a positive attitude, consistently looking for solutions and adapting to changes. Aung is reliable and a great team player. He communicates effectively and takes pride in his work. I truly appreciate his contributions and hope to work with him again in the future.",
    name: "Johann Evrard",
    designation: "Chief Executive Officer & Co-Founder",
    image: "/images/people/johann.png",
    on: "Aung Kaung Myat",
  },
  {
    quote:
      "Aung Kaung Myat is the most brilliant and motivated developer for our team. He is also a fast learner and can apply quickly in real projects. He is good at not only coding but also communicating with cross functional teams. I highly recommend him that he will be a great team member for you and he can contribute your business with his high skills.He is a valuable asset to any team, bringing not only technical proficiency but also a dedication to driving effective and efficient system developing.",
    name: "Ei Mon",
    designation: "Digital Banking Software Engineer at KBZ Bank",
    image: "/images/people/eimon.png",
    on: "Aung Kaung Myat",
  },
];
</script>
