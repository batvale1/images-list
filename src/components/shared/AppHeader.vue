<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__menu">
        <li class="header__menu-item"><router-link to="/" class="header__menu-link" exact-active-class="header__menu-link_active">Главная</router-link></li>
        <li class="header__menu-item"><router-link to="/history" class="header__menu-link" exact-active-class="header__menu-link_active">История</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    border: 1px solid $border-default-color;

    &__menu {
      display: flex;
      align-items: center;
      list-style: none;
    }

    &__menu-item {
      margin-left: 30px;
    }

    &__menu-item:first-of-type {
      margin-left: 0;
    }

    &__menu-link {
      text-decoration: none;
      font: normal normal normal 22px/25px $default-font-family;
      letter-spacing: 0;
      color: $text-color-secondary;

      &_active {
        color: $text-color-default
      }
    }
  }
</style>