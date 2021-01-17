<template>
  <div class="home">
    <app-header></app-header>
    <div class="home__container">
      <app-previews></app-previews>
      <app-footer></app-footer>
      <app-player></app-player>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Previews from "../components/Previews";
import Footer from "../components/Footer";
import Player from "../components/Player";

export default {
  components: {
    "app-header": Header,
    "app-previews": Previews,
    "app-footer": Footer,
    "app-player": Player
  }
};
</script>

<style lang="scss">
.home {
  color: $color-white;

  &__container {
    padding: 3rem 6rem;

    @media (max-width: 768px) {
      padding: 3rem 2rem;
    }

    @media (max-width: 320px) {
      padding: 3rem 1rem;
    }
  }
}
</style>
