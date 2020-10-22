<template>
  <notifications
    group="ui-notification"
    class="ui-notification"
    :position="position"
  >
    <template slot="body" slot-scope="props">
      <div
        class="ui-notification__content"
        :class="[`ui-notification__content_type_${props.item.type}`]"
      >
        <div class="ui-notification__header">
          <img
            v-if="props.item.type === 'error'"
            :src="require('@/assets/icons/fail-http-icon.svg')"
            class="ui-notification__action-icon">
          <img v-else :src="require('@/assets/icons/success-http-icon.svg')" alt="" class="ui-notification__action-icon">
          <span class="ui-notification__title-text">{{ props.item.title }}</span>
        </div>
        <a class="close" @click="props.close">
          <i class="fa fa-fw fa-close"></i>
        </a>
        <div v-html="props.item.text">
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom right',
    },
  },
};
</script>

<style lang="scss" scoped>
  .ui-notification {
    margin: 20px;
    background-color: $default-layout-bcg;

    &__content {
      padding: 18px;
      box-sizing: border-box;
      border-radius: 4px;
      margin-top: 10px;

      &_type {

        &_error {
          border: 2px solid $error-notification-color;
        }

        &_success {
          border: 1px solid $success-notification-color;
        }
      }
    }

    &__header {
      display: flex;
    }

    &__action-icon {
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }
</style>
