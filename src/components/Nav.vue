<template>
  <nav>
    <div class="container-ix8 bg-gray-800 py-5 md:py-8 px-5 md:px-8 lg:px-10">
      <div class="flex items-center justify-between">
        <div>
          <router-link :to="{ name: 'home' }" class="font-medium text-16px md:text-18px text-gray-200">Home</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'login' }" class="font-medium text-16px md:text-18px text-gray-200">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped></style>
