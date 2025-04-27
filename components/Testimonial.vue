<template>
  <div id="testimonials" class="relative py-28 bg-black">
    <Gradient />
    <div data-aos="fade-down">
      <div class="flex items-center justify-center font-carterOne">
        <SparklesText
          :text="$t('testimonials.title')"
          :colors="{ first: '#fff', second: '#FE8BBB' }"
          :sparkles-count="5"
          class="md:text-5xl text-3xl font-bold text-[#755dcd]"
        />
      </div>
      <ClientOnly>
        <AnimatedTestimonials :testimonials="testimonials" />
      </ClientOnly>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { t } = useI18n();
const testimonials = computed(() => [
  {
    quote: t("testimonials.paragraphOne"),
    name: "Johann Evrard",
    designation: "Chief Executive Officer & Co-Founder",
    image: "/images/people/johann.png",
    on: "Aung Kaung Myat",
  },
  {
    quote: t("testimonials.paragraphTwo"),
    name: "Ei Mon",
    designation: "Digital Banking Software Engineer at KBZ Bank",
    image: "/images/people/eimon.png",
    on: "Aung Kaung Myat",
  },
]);
</script>
