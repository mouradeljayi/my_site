<script setup>
const menuOpen = ref(false);
</script>

<template>
  <nav class="bg-indigo-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold font-sacramento">
        Mourad Eljayi
      </NuxtLink>
      <div class="hidden sm:flex">
        <NuxtLink to="/about" class="hover:text-gray-900 px-3 py-2 rounded">
          About
        </NuxtLink>
        <router-link to="/contact" class="hover:text-gray-900 px-3 py-2 rounded">
          Contact
        </router-link>
        <router-link to="#" class="hover:text-gray-900 px-3 py-2 rounded">
          Blog   <span
            class="inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700"
          >
            Soon
          </span>
        </router-link>
        <NuxtLink to="#" class="hover:text-gray-900 px-3 py-2 rounded">
          Portfolio   <span
            class="inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700"
          >
            Soon
          </span>
        </NuxtLink>
      </div>
      <div class="sm:hidden">
        <button
          @click="menuOpen = !menuOpen"
          class="block text-3xl text-white hover:text-gray-400 focus:outline-none"
        >
          ☰
        </button>
      </div>
    </div>
    <div v-show="menuOpen" class="block sm:hidden space-y-2 py-2">
        <NuxtLink to="/about" class="hover:text-gray-900 px-3 py-2 rounded">
          About
        </NuxtLink>
        <router-link to="/contact" class="hover:text-gray-900 px-3 py-2 rounded">
          Contact
        </router-link>
        <router-link to="/blog" class="hover:text-gray-900 px-3 py-2 rounded">
          Blog   <span
            class="inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700"
          >
            Soon
          </span>
        </router-link>
        <NuxtLink to="/portfolio" class="hover:text-gray-900 px-3 py-2 rounded">
          Portfolio   <span
            class="inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700"
          >
            Soon
          </span>
        </NuxtLink>
    </div>
  </nav>
</template>
  

  

 