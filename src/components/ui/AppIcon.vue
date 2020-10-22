<template>
  <img :src="src" :alt="alt" :class="['icon', `icon_size_${size}`]" @click="$emit('click')">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'm'
    }
  }
}
</script>

<style lang="scss" scoped>
 .icon {

   &_size {

     &_m {
       width: 16px;
       height: 16px;
       object-position: center;
       object-fit: contain;
     }
   }
 }
</style>