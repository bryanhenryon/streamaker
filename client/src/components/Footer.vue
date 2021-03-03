<template>
  <footer class="footer">
    &copy; {{ copyrightYear }} Setbon Akim &mdash;
    <a href="#" class="legal-notices-link">Mentions légales</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  margin: 5rem auto 3rem auto;
  font-size: 1.4rem;

  .legal-notices-link {
    color: $color-white;
  }
}
</style>
