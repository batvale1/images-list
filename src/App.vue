<template>
  <div id="app">
    <app-main-layout>
      <transition name="fade">
        <router-view/>
      </transition>
    </app-main-layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: $default-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
