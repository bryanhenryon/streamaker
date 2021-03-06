<template>
  <div class="not-found">
    <app-navbar></app-navbar>
    <div class="not-found__content">
      <div class="error-number">Erreur 404</div>
      <div class="error-message">Cette page n'existe pas</div>
      <router-link to="/" class="btn go-back"
        >Retourner à l'accueil</router-link
      >
    </div>
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
.not-found {
  color: $color-white;
  background: linear-gradient(rgba(rgb(0, 0, 0), 0.7), rgba($color-black, 1)),
    url("../assets/img/profile-background.jpg") center center fixed;
  background-size: cover;
  padding: 3rem 6rem;
  min-height: 100vh;

  &__content {
    margin: 10rem 0;
    text-align: center;

    .error-number {
      font-size: 4rem;
      font-weight: 400;
      margin-bottom: 1rem;

      @media (max-width: 480px) {
        font-size: 3.2rem;
      }
    }

    .error-message {
      font-size: 1.6rem;

      @media (max-width: 480px) {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 320px) {
    padding: 3rem 1rem;
  }
}

.go-back {
  border: 1px solid $color-white;
  padding: 1.5rem 8rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  transition: 0.2s;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: $color-white;
    color: $color-black;
    font-weight: 500;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 4rem;
  }
}
</style>
