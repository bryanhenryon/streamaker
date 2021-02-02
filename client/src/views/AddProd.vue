<template>
  <div class="add-prod">
    <app-navbar></app-navbar>
    <h1>Formulaire d'ajout de prod</h1>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
.add-prod {
  color: $color-white;
  padding: 3rem 6rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 320px) {
    padding: 3rem 1rem;
  }
}
</style>
