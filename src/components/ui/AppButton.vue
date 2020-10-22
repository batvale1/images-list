<template>
  <button class="button" @click="$emit('click')" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background: $default-button-bcg 0 0 no-repeat padding-box;
    box-shadow: 0 2px 2px #0000003D;
    border-radius: 2px;
    opacity: 1;
    padding: 8px 8px;
    min-width: 168px;
    color: $default-button-color;
    border: 1px solid $default-button-border-color;
    cursor: pointer;
    font: normal normal normal 16px/19px $default-font-family;
  }

  .button:focus {
    outline: none;
  }

  .button:disabled {
    cursor: not-allowed;
  }
</style>