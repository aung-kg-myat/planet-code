<template>
  <div class="relative py-28 bg-black" id="projects">
    <Gradient />
    <div
      class="flex items-center justify-center font-carterOne"
      data-aos="fade-down"
    >
      <SparklesText
        :text="$t('projects.title')"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-[#755dcd]"
      />
    </div>
    <div class="flex items-center justify-center gap-8 flex-wrap my-10 px-3">
      <div
        class="relative max-w-[350px] overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700/30 to-orange-900/30 cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-[#755dcd]/50 group"
        data-aos="fade-down"
      >
        <div class="relative z-10">
          <!-- Image container with hover zoom effect -->
          <div
            class="relative flex items-center justify-center py-3 overflow-hidden"
          >
            <iPhone15ProMockup
              src="/images/project/beaver_kombat.PNG"
              class="size-full max-w-[130px] h-[220px] transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <!-- Content with hover-triggered highlight effect -->
          <div class="relative z-20 p-4 transition-all duration-300">
            <h2
              class="text-left text-2xl font-bold text-white font-carterOne group-hover:text-[#755dcd] transition-colors"
            >
              Beaver Kombat
            </h2>
            <p
              class="my-4 text-neutral-200 text-xs font-mono text-justify opacity-90 group-hover:opacity-100 transition-opacity"
            >
              This is a web 3 game powered by telegram mini app where players
              have to handle voting, tapping for their favorite beaver, and
              collecting points. Top players can also get the air drops for
              Beaver Token.
            </p>
            <div class="space-y-2 mt-6">
              <p
                class="font-carterOne transition-all group-hover:translate-x-1 text-white"
              >
                Client -
                <nuxt-link
                  to="https://www.metrohunters.com/"
                  target="_blank"
                  class="text-[#755dcd] hover:text-white transition-colors"
                  >MetroHunters</nuxt-link
                >
              </p>
              <nuxt-link
                to="https://t.me/BeaverKombatBot"
                target="_blank"
                class="inline-block font-carterOne text-[#755dcd] hover:text-white hover:underline transition-all group-hover:translate-x-1"
                >Go to Link →
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative max-w-[350px] overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700/30 to-orange-900/30 cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-[#755dcd]/50 group"
        data-aos="fade-down"
      >
        <div class="relative z-10">
          <div class="relative px-4 py-2">
            <SafariMockup
              url="inspira-ui.com"
              src="/images/project/beaver_kombat_web.png"
              class="size-full h-[220px] transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div class="relative z-20 p-4 transition-all duration-300">
            <h2
              class="text-left text-2xl font-bold text-white font-carterOne group-hover:text-[#755dcd] transition-colors"
            >
              Beaver Kombat Fan
            </h2>
            <p class="my-4 text-neutral-200 text-xs font-mono text-justify">
              This fan page provides details on Beaver Kombat's features,
              gameplay, and community. The site includes links to the game's
              official Telegram and Twitter channels for player connections.
            </p>
            <div class="space-y-2 mt-6">
              <p
                class="font-carterOne transition-all text-white group-hover:translate-x-1"
              >
                Client -
                <nuxt-link
                  to="https://www.metrohunters.com/"
                  target="_blank"
                  class="text-[#755dcd] hover:text-white transition-colors"
                  >MetroHunters</nuxt-link
                >
              </p>
              <nuxt-link
                to="https://beaver-kombat.fans"
                target="_blank"
                class="inline-block font-carterOne text-[#755dcd] hover:text-white hover:underline transition-all group-hover:translate-x-1"
                >Go to Link →</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iPhone15ProMockup from "@/components/ui/iphone-mockup/iPhone15ProMockup.vue";
</script>
