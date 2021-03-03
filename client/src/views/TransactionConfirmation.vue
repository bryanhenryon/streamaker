<template>
  <div class="transaction-confirmation">
    <app-navbar></app-navbar>
    <div class="container">
      <div class="transaction-confirmation__main-message">
        <h1>
          Merci de votre achat !
        </h1>
        <div>Le téléchargement de la prod devrait bientôt se lancer</div>
      </div>

      <div class="transaction-confirmation__secondary-message">
        <div>
          Si le téléchargement ne se lance pas, cliquez sur le bouton ci-dessous
          :
        </div>
        <a
          class="transaction-confirmation__download-song"
          :href="apiRoot + 'prods/song/' + purchasedSong.songName"
          :download="purchasedSong.originalSongName"
        >
          <span>Télécharger</span>
          <svg class="icon icon-file_download">
            <use xlink:href="sprite.svg#icon-file_download"></use>
          </svg>
        </a>
      </div>

      <div>À bientôt !</div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  computed: {
    ...mapGetters({
      successfulTransaction: "getSuccessfulTransaction",
      purchasedSong: "getPurchasedSong"
    }),
    ...mapGetters("global", {
      apiRoot: "getApiRoot"
    })
  },
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer
  },
  mounted() {
    document.querySelector(".transaction-confirmation__download-song").click();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.successfulTransaction) {
        vm.$router.push("/");
        return;
      }

      vm.$store.dispatch("setSuccessfulTransaction", false);
    });
  }
};
</script>

<style lang="scss" scoped>
.transaction-confirmation {
  color: $color-white;
  background: linear-gradient(rgba(rgb(0, 0, 0), 0.7), rgba($color-black, 1)),
    url("../assets/img/profile-background.jpg") center center fixed;
  background-size: cover;
  padding: 3rem 6rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 320px) {
    padding: 3rem 1rem;
  }

  &__main-message {
    margin-bottom: 5rem;
    h1 {
      margin-bottom: 1rem;
    }
  }

  &__secondary-message {
    margin-bottom: 2rem;

    a {
      display: inline-flex;
      align-items: center;
      padding: 1rem 3rem;
      font-weight: 500;
      border-radius: 5px;
      margin: 2rem 0;
      text-decoration: none;
      color: $color-black;
      background: $color-white;

      .icon-file_download {
        height: 2.4rem;
        width: 2.4rem;
        margin-left: 0.5rem;
      }
    }
  }
}

.container {
  max-width: 900px;
  margin: 10rem auto;
  text-align: center;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }
}
</style>
