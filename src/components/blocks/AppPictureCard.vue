<template>
  <li class="picture-card">
    <div class="picture-card__image-wrapper">
      <img
          :src="card.image_url"
          :alt="card.caption" class="picture-card__image"
      >
      <app-icon
          :src="require('@/assets/icons/delete.svg')"
          @click="removeImage(card.id)"
          class="picture-card__delete"
      />
    </div>
    <div class="picture-card__description">
      <p class="picture-card__title">{{ card.caption || 'Без названия (пустой caption)' }}</p>
      <p class="picture-card__uploaded-at"> {{ $moment(card.appUploadedAt).format('YYYY-MM-DD HH:mm:ss') }}</p>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isDeletionShown: false,
    }
  },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async removeImage(id) {
      await this.$store.dispatch('images/removeImage', { id })
        .then(() => {
          this.$notify({
            group: 'ui-notification',
            title: 'Данные успешно удалены',
            duration: 5000,
            type: 'success',
          });
        });
    },
  }
}
</script>

<style lang="scss" scoped>
  .picture-card {

    display: flex;

    &__image {
      width: 169px;
      height: 88px;
      object-position: center;
      object-fit: cover;
    }

    &__description {
      margin-left: 27px;
    }

    &__title {
      font: normal normal bold 22px/25px $default-font-family;
      letter-spacing: 0;
      color: $text-color-secondary;
      opacity: 1;
      margin: 0;
      text-align: left;
    }

    &__uploaded-at {
      font: normal normal normal 22px/25px $default-font-family;
      letter-spacing: 0;
      color: $text-color-secondary;
      margin: 5px 0 0;
      text-align: left;
    }

    &__delete {
      position: absolute;
      padding: 10px;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    &__image-wrapper {
      position: relative;
    }
  }
</style>