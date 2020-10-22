<template>
  <app-container class="app-main-layout">
    <app-header/>
    <div class="app-main-layout__content">
      <app-side-bar class="app-main-layout__side-bar"/>
      <main class="app-main-layout__main">
        <slot/>
      </main>
    </div>
  </app-container>
</template>

<style lang="scss" scoped>
.app-main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    flex-grow: 1;
    margin: 40px 0;
    padding: 70px 0;
    border: 1px solid $border-default-color;
  }

  &__side-bar {
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__main {
    flex-grow: 1;
  }
}
</style>