<template>
  <nav class="navbar">
    <div class="logo">LOGO / NOM DU SITE</div>
    <div class="navbar_buttons">
      <button class="btn btn-buy">Achète des prods</button>
      <button class="btn btn-sell">Vends des prods</button>
    </div>
    <button class="btn-menu">
      <svg class="icon icon-menu">
        <use xlink:href="sprite.svg#icon-menu"></use>
      </svg>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  &_buttons {
    @media (max-width: 680px) {
      display: none;
    }
  }

  .btn-menu {
    display: none;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    @media (max-width: 680px) {
      display: block;
    }

    .icon-menu {
      fill: $color-white;
      height: 4rem;
      width: 4rem;
    }
  }

  .btn {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    transition: 0.2s ease-out;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
  }

  .btn:hover {
    letter-spacing: 2px;
  }

  .btn-buy {
    margin-right: 5rem;
    background: $color-white;
    color: $color-black;
  }

  .btn-sell {
    background: none;
    color: $color-white;
    border: 1px solid $color-white;
  }
}
</style>
