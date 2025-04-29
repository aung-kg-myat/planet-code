<template>
  <div id="contact" class="py-12 bg-black relative">
    <Gradient />
    <div
      class="flex items-center justify-center text-center text-white font-medium text-muted-foreground font-carterOne md:text-2xl text-lg"
      data-aos="fade-down"
    >
      <RadiantText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-white/70"
        :duration="4"
      >
        {{ $t("partner.title") }}
      </RadiantText>
    </div>
    <div class="flex items-center justify-center gap-8 flex-wrap my-10 px-3">
      <nuxt-link to="https://orangeideas.co" target="_blank">
        <NeonBorder :class="'rounded-2xl'" :animation-type="'half'">
          <div
            class="relative max-w-[350px] backdrop-blur-[80px] overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 bg-black/80 border-2 border-white/40 m-[0.05rem] ease-in-out hover:shadow-lg hover:shadow-[#755dcd]/50 hover:bg-black group"
          >
            <div class="relative">
              <div
                class="relative flex items-center justify-center py-3 overflow-hidden"
              >
                <nuxt-img
                  :src="orangeIdeaIcon"
                  format="webp"
                  :srcset="`${orangeIdeaIcon} 480w, ${orangeIdeaIcon} 800w`"
                  sizes="(max-width: 600px) 480px, 800px"
                  alt="team-member"
                  class="w-[40%] h-[40%] rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <!-- Content with hover-triggered highlight effect -->
              <div class="relative z-20 p-4 transition-all duration-300">
                <h2 class="text-left text-lg font-bold font-carterOne">
                  Orange Ideas Marketing Agency
                </h2>
                <div class="space-y-2 mt-6">
                  <nuxt-link
                    to="https://orangeideas.co"
                    target="_blank"
                    class="inline-block font-carterOne text-[#755dcd] hover:text-white hover:underline transition-all group-hover:translate-x-1"
                  >
                    {{ $t("partner.learnMore") }} →
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </NeonBorder>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const orangeIdeaIcon =
  "https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/419693397_440473611825323_8791841467537096182_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGxmh4BDlMcnbd-1Ao1PPTr1Xo5cfRc08XVejlx9FzTxWPXPGJruJqbJ-1xW1z-UANuThR7dpSE0HKi2zpZZUhT&_nc_ohc=tsd_tWeSWiMQ7kNvwFD0_lg&_nc_oc=Adk9cGujlU3o7Wg3wh39Ujvs6PR26f7U2M-zgfeik5m6ogxcngXEuszmzjIg7kVuQ-5ZPgNksXfBd780mz84O9bI&_nc_zt=23&_nc_ht=scontent.fbkk2-8.fna&_nc_gid=4fVCTSfYLtOOtCBsWxHjeA&oh=00_AfHXBY9yYypnV9DUcTU_P47kOnkHB84m7dutN_mopjNgBw&oe=6816D253";
</script>
