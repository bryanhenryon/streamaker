<template>
  <section class="tracks">
    <app-navbar></app-navbar>
    <app-tracks-list></app-tracks-list>
    <app-player></app-player>
    <app-footer></app-footer>
  </section>
</template>

<script>
import Navbar from "../components/Header/Navbar";
import TracksList from "../components/TracksList";
import Player from "../components/Player";
import Footer from "../components/Footer";
export default {
  components: {
    "app-navbar": Navbar,
    "app-tracks-list": TracksList,
    "app-player": Player,
    "app-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
.tracks {
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
