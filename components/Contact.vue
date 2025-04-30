<template>
  <div id="contact" class="py-28 bg-black relative">
    <NuxtNotifications class="me-2" position="top right" :speed="500" />
    <Gradient />
    <div
      class="flex items-center justify-center font-carterOne relative"
      data-aos="fade-down"
    >
      <SparklesText
        :text="$t('contact.title')"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-[#755dcd]"
      />
    </div>
    <div
      class="px-5 flex w-full md:w-[40%] m-auto flex-col items-center justify-center gap-2 bg-black my-10"
    >
      <form @submit.prevent="handleSubmit()" class="w-full">
        <div class="flex flex-col items-center justify-center gap-1 w-full">
          <label
            for="name"
            class="ml-2 font-carterOne w-full text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {{ $t("contact.name") }}
          </label>
          <NeonBorder :class="'h-[40px]'">
            <input
              required
              v-model="contact.name"
              type="text"
              id="name"
              class="size-full rounded-lg px-4 text-sm bg-[#131212]"
              :placeholder="$t('contact.namePlaceholder')"
            />
          </NeonBorder>
        </div>

        <div class="flex flex-col items-center justify-center gap-1 w-full">
          <label
            for="email"
            class="ml-2 font-carterOne w-full text-sm font-medium text-gray-700 dark:text-gray-200 mt-2"
          >
            {{ $t("contact.email") }}
          </label>
          <NeonBorder :class="'h-[40px]'">
            <input
              required
              v-model="contact.email"
              type="email"
              id="email"
              class="size-full rounded-lg px-4 text-sm bg-[#131212]"
              :placeholder="$t('contact.emailPlaceholder')"
            />
          </NeonBorder>
        </div>
        <div class="flex flex-col items-center justify-center gap-1 w-full">
          <label
            for="message"
            class="ml-2 font-carterOne w-full text-sm font-medium text-gray-700 dark:text-gray-200 mt-2"
          >
            {{ $t("contact.message") }}
          </label>
          <NeonBorder :class="'h-[100px]'">
            <textarea
              required
              id="message"
              v-model="contact.message"
              class="size-full w-full rounded-lg px-4 pt-2 text-sm bg-[#131212]"
              :placeholder="$t('contact.messagePlaceholder')"
            />
          </NeonBorder>
        </div>
        <div class="flex items-center justify-center w-full mt-4">
          <RainbowButton
            type="submit"
            :disabled="loading"
            class="font-carterOne"
          >
            {{ loading ? "Loading..." : `${$t("contact.send")}` }}
          </RainbowButton>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
const { notify } = useNotification();
const contact = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: contact.value,
    });
    notify({
      title: "Awesome!",
      type: "success",
      text: "Message sent successfully",
    });
    contact.value = { name: "", email: "", message: "" };
  } catch (error) {
    notify({
      title: "Error!",
      type: "error",
      text: "Failed to send the message",
    });
  }
  loading.value = false;
};
</script>
