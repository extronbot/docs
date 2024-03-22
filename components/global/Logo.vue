<template>
  <nuxt-img src="/icon-light.png" alt="Logo of extron" width="115px" height="30px" class="img-dark"/>
  <nuxt-img src="/icon-dark.png" alt="Logo of extron" width="115px" height="30px" class="img-light"/>
</template>

<style scoped>
img {
  height: 30px;
}
.light .img-dark {
  display: none;
}
.dark .img-light {
  display: none;
}
</style>