<template>
  <v-wait for="new image to load" class="pictures-list">
    <template slot="waiting">
      <app-preloader/>
    </template>
    <div class="pictures-list__navigation">
      <app-button @click="prev" class="pictures-list__navigation-btn" :disabled="currentPage === 0">Назад</app-button>
      <app-button @click="next" class="pictures-list__navigation-btn" :disabled="!cards.length">Вперед</app-button>
    </div>
    <h1 v-if="!cards.length" class="pictutes-list__empty-title">Nothing to show</h1>
    <transition-group class="pictures-list__list" name="slide" tag="ul" appear>
        <app-picture-card
          class="pictures-list__item"
          v-for="card in cards"
          :key="card.id"
          :card="card"
        />
    </transition-group>
    <app-notification/>
  </v-wait>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      cardsPerPage: 3,
    }
  },
  async created() {
    this.$wait.start('new image to load');
    await this.$store.dispatch('images/getImages');
    this.$wait.end('new image to load');
  },
  computed: {
    cards() {
      return this.$store.getters['images/getImages'].slice(this.currentPage * this.cardsPerPage, this.currentPage * this.cardsPerPage + this.cardsPerPage);
    }
  },
  methods: {
    next() {
      this.currentPage++;
    },
    prev() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pictures-list {

    padding: 0 20px;

    &__list {
      list-style: none;
      margin: 30px 0 0 0;
      position: relative;
    }

    &__item {
      margin-bottom: 30px;
    }

    &__item:last-of-type {
      margin-bottom: 0;
    }

    &__navigation {
      display: flex;
      justify-content: space-between;
    }
  }
</style>