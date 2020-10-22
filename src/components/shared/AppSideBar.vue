<template>
  <div class="sidebar">
    <router-link v-if="currentRoute" :to="`/${currentRoute.routeTo}`" class="sidebar__link">
      <app-icon v-if="currentRoute.icon" class="sidebar__icon" :src="require(`@/assets/icons/${currentRoute.icon}.svg`)"/>
      <span class="sidebar__link">{{ currentRoute.description }}</span>
    </router-link>
  </div>
</template>

<script>
import menuItems from '@/helpers/menuItems';
export default {
  data() {
    return {
      currentRoute: null
    };
  },
  watch: {
    $route(to) {
      this.currentRoute = menuItems.find(item => item.route === to.name);
    }
  },
  created() {
    this.currentRoute = menuItems.find(item => item.route === this.$router.currentRoute.name);
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 150px;

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $text-color-secondary;
    font: normal normal normal 22px/25px $default-font-family;
  }

  &__icon {
    margin-right: 20px;
  }
}
</style>