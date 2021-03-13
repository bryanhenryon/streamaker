<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <app-sign-up-modal></app-sign-up-modal>
    <app-sign-in-modal></app-sign-in-modal>
  </div>
</template>

<script>
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
export default {
  components: {
    "app-sign-up-modal": SignUpModal,
    "app-sign-in-modal": SignInModal
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
