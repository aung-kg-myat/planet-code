<template>
  <div class="relative">
    <Gradient />
    <AnimatedLogoCloud :logos :title="$t('technologies.title')" />
  </div>
</template>

<script lang="ts" setup>
const logos = [
  {
    name: "HTML 5",
    path: "/images/tech/html.png",
  },
  {
    name: "CSS 3",
    path: "/images/tech/css.png",
  },
  {
    name: "Tailwind",
    path: "/images/tech/tailwind.png",
  },
  {
    name: "Inspira UI",
    path: "/images/tech/inspira.png",
  },
  {
    name: "Nuxt UI",
    path: "/images/tech/nuxt.png",
  },
  {
    name: "Javascript",
    path: "/images/tech/javascript.png",
  },
  {
    name: "Typescript",
    path: "/images/tech/typescript.png",
  },
  {
    name: "Vue.js",
    path: "/images/tech/vue.png",
  },
  {
    name: "Nuxt JS",
    path: "/images/tech/nuxt.png",
  },
  {
    name: "Pinia",
    path: "/images/tech/pinia.png",
  },
  {
    name: "React",
    path: "/images/tech/react.png",
  },
  {
    name: "Tanstack Query",
    path: "/images/tech/tanstack.png",
  },
  {
    name: "Redux",
    path: "/images/tech/redux.png",
  },
  {
    name: "PHP",
    path: "/images/tech/php.png",
  },
  {
    name: "Laravel",
    path: "/images/tech/laravel.png",
  },
  {
    name: "MySQL",
    path: "/images/tech/mysql.png",
  },
  {
    name: "Supabase",
    path: "/images/tech/supabase.png",
  },
  {
    name: "MariaDB",
    path: "/images/tech/mariadb.png",
  },
  {
    name: "Apache",
    path: "/images/tech/apache.png",
  },
  {
    name: "NGINX",
    path: "/images/tech/nginx.png",
  },
  {
    name: "Vercel",
    path: "/images/tech/vercel.png",
  },
  {
    name: "Digital Ocean",
    path: "/images/tech/digitalocean.png",
  },
  {
    name: "AWS",
    path: "/images/tech/aws.png",
  },
];
</script>
