<template>
  <div id="team" class="py-28 bg-black relative">
    <Gradient />
    <div
      class="flex items-center justify-center font-carterOne"
      data-aos="fade-down"
    >
      <SparklesText
        :text="$t('team.title')"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-[#755dcd]"
      />
    </div>
    <div
      class="flex items-center justify-center flex-wrap my-10 max-w-7xl mx-auto w-full gap-10"
    >
      <div v-for="member in members" :key="member.name" data-aos="fade-down">
        <div class="flex flex-col items-center justify-center">
          <GlareCard
            class="flex flex-col items-center justify-center relative bg-white/10"
          >
            <nuxt-img
              :src="member.image"
              format="webp"
              :srcset="`${member.image} 480w, ${member.image} 800w`"
              sizes="(max-width: 600px) 480px, 800px"
              alt="team-member"
              class="aspect-[1/1] rounded-t-3xl h-full z-10"
            />
            <div class="z-20 absolute bottom-0 bg-black/80 w-full">
              <h1
                class="text-lg font-bold text-white text-center font-carterOne"
              >
                {{ member.name }}
              </h1>
              <p
                class="mb-1 font-bold font-carterOne text-[0.8rem] text-center text-[#755dcd]"
              >
                {{ member.position }}
              </p>
              <p
                class="text-[0.65rem] text-center font-mono font-light text-slate-300 mb-1"
              >
                {{ member.description }}
              </p>
            </div>
          </GlareCard>
          <div
            class="flex items-center justify-center gap-5 bg-gradient-to-r from-blue-700 to-orange-900 rounded-b-3xl pt-2 w-[300px]"
          >
            <nuxt-link
              to="https://www.linkedin.com/in/aung-kaung-myat-a82700222/"
              target="_blank"
              class="group"
            >
              <UIcon
                name="i-mdi:linkedin"
                class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              />
            </nuxt-link>
            <nuxt-link
              to="https://www.facebook.com/aung.akm2000"
              target="_blank"
              class="group"
            >
              <UIcon
                name="i-mdi:facebook-box"
                class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              />
            </nuxt-link>
            <nuxt-link
              to="https://t.me/aung_kg_myat"
              target="_blank"
              class="group"
            >
              <UIcon
                name="i-mdi:telegram"
                class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const members = ref([
  {
    name: "Aung Kaung Myat",
    position: "Founder & Software Engineer",
    description:
      "4 years of experience in software development, specializing in web applications development.",
    image: "/team/akm.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aung-kaung-myat-a82700222/",
      facebook: "https://www.facebook.com/aung.akm2000",
      telegram: "https://t.me/aung_kg_myat",
    },
  },
  {
    name: "Eaint Myat Thwae",
    position: "System Analyst",
    description:
      "5 years of experience in system analysis, specializing in improving business processes.",
    image: "/team/emt.png",
    social: {
      linkedin: "https://www.linkedin.com/in/eaint-myat-thwe-76898a24a/",
      facebook: "https://www.facebook.com/eaitmyat.thawe",
      telegram: "https://t.me/EMT1249",
    },
  },
]);
</script>
