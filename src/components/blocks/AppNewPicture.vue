<template>
  <div class="picture">
    <app-preloader v-if="!isLoaded"/>
    <img
        v-show="isLoaded"
        @load="showImage"
        :src="imageUrl"
        :alt="alt"
        class="picture__image"
    >
    <app-button v-if="isLoaded" @click="addNewImage" class="picture__btn">Загрузить</app-button>
    <app-notification/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  async created() {
    this.$wait.start('new image to load');
    try {
      await this.getNewImage();
    }
    catch (e) {
      this.$notify({
        group: 'ui-notification',
        title: 'Что-то пошло не так...',
        duration: 5000,
        type: 'error',
      });
    }
    finally {
      this.$wait.end('new image to load');
    }
  },
  methods: {
    async getNewImage() {
      await this.$store.dispatch('images/getNewImage');
    },
    async addNewImage() {
      this.isLoaded = false;
      await this.$store.dispatch('images/addNewImage');
      this.$notify({
        group: 'ui-notification',
        title: 'Данные успешно сохранены',
        duration: 5000,
        type: 'success',
      });
      await this.getNewImage();
    },
    showImage() {
      this.isLoaded = true;
    }
  },
  computed: {
    imageUrl() {
      const { image_url } = this.$store.getters['images/getNewImage'];
      return image_url ? image_url : '';
    },
    alt() {
      const { caption } = this.$store.getters['images/getNewImage'];
      return caption ? caption: '';
    },
  }
}
</script>

<style lang="scss" scoped>
  .picture {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
      width: 453px;
      height: 252px;
      object-fit: cover;
      object-position: center;
    }

    &__btn {
      margin-top: 30px;
    }
  }
</style>