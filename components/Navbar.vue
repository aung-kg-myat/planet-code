<script setup lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";

const { t, locales, setLocale } = useI18n();
const cookieLocale = useCookieLocale();

const getCookieLocaleCode = computed(() => {
  let icon = "";
  switch (cookieLocale.value) {
    case "en":
      icon = "fi fi-gb fis";
      break;
    case "mm":
      icon = "fi fi-mm fis";
      break;
    case "th":
      icon = "fi fi-th fis";
      break;
    default:
      break;
  }

  return icon;
});

const selectedLocale = ref({
  code: cookieLocale.value.toLocaleUpperCase(),
  icon: getCookieLocaleCode,
});
const localesWithIcons = locales.value.map((locale) => {
  let icon;
  switch (locale.code.toLocaleLowerCase()) {
    case "en":
      icon = "fi fi-gb fis";
      break;
    case "mm":
      icon = "fi fi-mm fis";
      break;
    case "th":
      icon = "fi fi-th fis";
      break;
    default:
      icon = "fi fi-gb fis"; // Default icon
  }

  return {
    ...locale,
    icon,
  };
});

const isMenuOpen = ref(false);
const isMounted = ref(false);

const links = computed(() => [
  { label: t("navbar.home"), to: "#home" },
  { label: t("navbar.services"), to: "#services" },
  { label: t("navbar.about"), to: "#about" },
  { label: t("navbar.projects"), to: "#projects" },
  { label: t("navbar.testimonials"), to: "#testimonials" },
  { label: t("navbar.contact"), to: "#contact" },
]);

const route = useRoute();
const isActive = (path: string) => route.hash === path;

const changeLocale = (newLocale: any) => {
  setLocale(newLocale.value);
  selectedLocale.value = {
    code: newLocale.value.toLocaleUpperCase(),
    icon: newLocale.icon,
  };
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <header
    v-if="isMounted"
    class="bg-slate-600/80 shadow-sm sticky top-0 backdrop-blur-md z-50 font-mono py-1"
  >
    <UContainer class="">
      <!-- Logo -->
      <div class="flex items-center justify-between">
        <Transition name="fade-down" appear :style="{ '--delay': `${0.6}s` }">
          <NuxtLink to="/" v-if="isMounted">
            <nuxt-img
              src="/logo/planet_code.png"
              format="webp"
              :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
              sizes="(max-width: 600px) 480px, 800px"
              alt="logo"
              class="w-16 h-16"
            />
          </NuxtLink>
        </Transition>

        <!-- Desktop Navigation -->
        <ClientOnly>
          <nav
            class="hidden md:flex space-x-6 items-center justify-center gap-4"
          >
            <Transition
              name="fade-down"
              v-for="(link, index) in links"
              :key="link.to"
              appear
              :css="isMounted"
              :style="{ '--delay': `${index * 0.4}s` }"
            >
              <NuxtLink
                :to="link.to"
                class="text-white text-sm"
                :class="{ '!text-[#755dcd]': isActive(link.to) }"
              >
                <template v-if="link.label === $t('navbar.contact')">
                  <RainbowButton class="font-carterOne">
                    {{ link.label }}
                  </RainbowButton>
                </template>
                <template v-else>
                  {{ link.label }}
                </template>
              </NuxtLink>
            </Transition>
            <USelectMenu
              :icon="selectedLocale.icon"
              v-model="selectedLocale.code"
              @change="changeLocale"
              :content="{
                align: 'center',
                side: 'bottom',
                sideOffset: 8,
              }"
              :options="
                localesWithIcons.map((locale) => ({
                  label: locale.code.toUpperCase(),
                  value: locale.code,
                  icon: locale.icon,
                }))
              "
              :ui="{
                trailingIcon:
                  'group-data-[state=open]:rotate-180 transition-transform duration-200',
              }"
              color="secondary"
              highlight
              variant="outline"
              class="!text-white"
            />
          </nav>
        </ClientOnly>
        <!-- Mobile Menu Button -->
        <div class="flex items-center justify-center gap-3 md:hidden">
          <Transition name="fade-down" appear :style="{ '--delay': '1s' }">
            <div>
              <USelectMenu
                :icon="selectedLocale.icon"
                v-model="selectedLocale.code"
                @change="changeLocale"
                :content="{
                  align: 'center',
                  side: 'bottom',
                  sideOffset: 8,
                }"
                :options="
                  localesWithIcons.map((locale) => ({
                    label: locale.code.toUpperCase(),
                    value: locale.code,
                    icon: locale.icon,
                  }))
                "
                :ui="{
                  trailingIcon:
                    'group-data-[state=open]:rotate-180 transition-transform duration-200',
                }"
                color="secondary"
                highlight
                variant="outline"
              />
            </div>
          </Transition>
          <Transition name="fade-down" appear :style="{ '--delay': '1s' }">
            <button class="text-gray-300" @click="isMenuOpen = true">
              <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
            </button>
          </Transition>
        </div>
      </div>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <div class="md:hidden flex items-end justify-end w-full">
      <USlideover v-model="isMenuOpen" class="w-[100%] h-full">
        <!-- header -->
        <div
          class="flex justify-between items-center px-6 py-1 lg:px-8 bg-slate-600/80"
        >
          <Transition
            name="fade-down"
            appear
            :style="{ '--delay': `${2 * 0.15}s` }"
          >
            <NuxtLink to="/" v-if="isMounted">
              <nuxt-img
                src="/logo/planet_code.png"
                format="webp"
                :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
                sizes="(max-width: 600px) 480px, 800px"
                alt="logo"
                class="w-16 h-16"
              />
            </NuxtLink>
          </Transition>
          <Transition
            name="fade-down"
            appear
            :style="{ '--delay': `${2 * 0.15}s` }"
          >
            <button @click="isMenuOpen = false">
              <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-gray-300" />
            </button>
          </Transition>
        </div>

        <UCard class="p-4 flex items-center justify-center h-full !bg-gray-900">
          <nav
            class="mt-4 space-y-4 flex flex-col items-center justify-center gap-4"
          >
            <Transition
              name="fade-down"
              v-for="(link, index) in links"
              :key="link.to"
              appear
              :css="isMounted"
              :style="{ '--delay': `${index * 0.15}s` }"
            >
              <NuxtLink
                :to="link.to"
                class="block text-gray-300"
                :class="{
                  '!text-[#755dcd]':
                    isActive(link.to) && link.to !== '#contact',
                }"
                @click="isMenuOpen = false"
              >
                <template v-if="link.label === $t('navbar.contact')">
                  <RainbowButton class="font-carterOne">
                    {{ link.label }}
                  </RainbowButton>
                </template>
                <template v-else>
                  {{ link.label }}
                </template>
              </NuxtLink>
            </Transition>
          </nav>
        </UCard>
      </USlideover>
    </div>
  </header>
</template>

<style>
.fade-down-enter-active {
  transition: all 1s ease;
  transition-delay: var(--delay, 0);
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

#headlessui-listbox-button-v-1,
#headlessui-listbox-button-v-0 {
  button {
    span {
      color: white;
    }
  }
}
</style>
