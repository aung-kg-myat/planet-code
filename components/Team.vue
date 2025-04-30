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
        <div class="flex flex-col items-center justify-center group">
          <GlareCard
            class="flex flex-col items-center justify-center relative bg-gradient-to-r from-blue-700/40 to-orange-900/40"
          >
            <nuxt-img
              :src="member.image"
              format="webp"
              :srcset="`${member.image} 480w, ${member.image} 800w`"
              sizes="(max-width: 600px) 480px, 800px"
              alt="team-member"
              class="w-[93%] h-[93%] rounded-t-2xl z-10 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div class="z-20 absolute bottom-0 bg-black/70 w-full">
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
            class="flex items-center justify-center gap-5 bg-gradient-to-r from-blue-700/60 to-orange-900/60 rounded-b-3xl pt-2 w-[300px]"
          >
            <nuxt-link
              :to="member.social.linkedin"
              target="_blank"
              class="group"
            >
              <UIcon
                name="i-mdi:linkedin"
                class="w-6 h-6 text-white hover:scale-110 hover:text-white/80 transition-transform duration-300"
              />
            </nuxt-link>
            <nuxt-link
              :to="member.social.facebook"
              target="_blank"
              class="group"
            >
              <UIcon
                name="i-mdi:facebook-box"
                class="w-6 h-6 text-white hover:scale-110 hover:text-white/80 transition-transform duration-300"
              />
            </nuxt-link>
            <nuxt-link
              :to="member.social.telegram"
              target="_blank"
              class="group"
              v-if="member.social.telegram !== '#'"
            >
              <UIcon
                name="i-mdi:telegram"
                class="w-6 h-6 text-white hover:scale-110 hover:text-white/80 transition-transform duration-300"
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
    image: "/team/akm.jpeg",
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
  {
    name: "Thae Thinzar Wai",
    position: "Project Manager",
    description:
      "8 years of experience in software development and management, specializing in agile methodologies.",
    image: "/team/ma_thae.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/thae-thae-7162a1a2",
      facebook: "https://www.facebook.com/thae.wai.9",
      telegram: "#",
    },
  },
]);
</script>
