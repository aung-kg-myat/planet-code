<template>
  <div
    id="services"
    class="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl py-28 bg-black"
  >
    <Gradient />
    <div
      class="flex items-center justify-center font-carterOne"
      data-aos="fade-down"
    >
      <SparklesText
        :text="$t('services.title')"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-[#755dcd]"
      />
    </div>
    <div
      class="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 z-30 max-w-7xl mx-4"
    >
      <div
        class="relative w-full h-[200px]"
        v-for="service in services"
        :key="service.title"
      >
        <div
          data-aos="fade-down"
          class="absolute inset-0 size-full scale-[0.70] rounded-full bg-gradient-to-r from-blue-700 to-orange-900 blur-xl"
        />
        <div
          class="relative flex h-full flex-col items-start justify-start overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 px-4 py-8 shadow-xl gap-6"
          data-aos="fade-down"
        >
          <div>
            <div class="flex items-start justify-start gap-5 mb-5">
              <UIcon :name="service.iconClass" class="w-6 h-6 text-white" />

              <h1
                class="relative z-50 text-xl font-bold text-[#755dcd] font-carterOne"
              >
                {{ service.title }}
              </h1>
            </div>

            <p
              class="relative z-50 mb-4 font-mono text-sm font-normal text-slate-300"
            >
              {{ service.description }}
            </p>
          </div>
          <Meteors />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const services = computed(() => [
  {
    title: t("services.customSoftware.title"),
    description: t("services.customSoftware.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:application-brackets",
  },
  {
    title: t("services.dynamicWebsite.title"),
    description: t("services.dynamicWebsite.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720551256879-92e5b13285be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:earth",
  },
  {
    title: t("services.managementSystem.title"),
    description: t("services.managementSystem.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor-dashboard",
  },
  {
    title: t("services.portfolio.title"),
    description: t("services.portfolio.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1721080251097-b9accb630494?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:laptop-account",
  },
  {
    title: t("services.innovativeDesign.title"),
    description: t("services.innovativeDesign.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720201054067-adf2837be5e4?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor-dashboard",
  },
  {
    title: t("services.posSystems.title"),
    description: t("services.posSystems.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720287601246-aff81da43707?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:monitor",
  },
  {
    title: t("services.dataSolutions.title"),
    description: t("services.dataSolutions.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:database",
  },
  {
    title: t("services.cloudSolutions.title"),
    description: t("services.cloudSolutions.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconClass: "i-mdi:cloud-tags",
  },
]);
</script>
