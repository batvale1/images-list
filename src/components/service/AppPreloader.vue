<template>
  <div class="circle-preloader">
    <i class="circle-preloader__spinner"></i>
  </div>
</template>

<style lang="scss" scoped>
.circle-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-preloader__spinner {
  display: block;
  width: 100px;
  height: 100px;
  border: 4px solid $preloader-main-color;
  border-bottom-color: $preloader-secondary-color;
  border-radius: 50%;
  animation: spin .75s infinite linear;
  z-index: 25;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
