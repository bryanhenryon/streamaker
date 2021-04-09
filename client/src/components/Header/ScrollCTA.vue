<template>
  <div class="scroll-cta">
    <a href="#previews" id="slideToProds">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
#slideToProds {
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.scroll-cta {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: $color-white;
  }

  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
}
</style>
