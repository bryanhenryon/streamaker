<template>
  <section class="previews">
    <div class="section-title">
      <h2 class="news">Derniers ajouts</h2>
      <button class="btn btn--see-all">Tout voir</button>
    </div>
    <div class="cards">
      <div class="card">
        <div class="image">
          <img
            src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
            draggable="false"
            alt=""
          />
          <button class="btn btn--play" @click="play">
            <svg class="icon icon-controller-play">
              <use xlink:href="sprite.svg#icon-controller-play"></use>
            </svg>
            <svg class="icon icon-pause">
              <use xlink:href="sprite.svg#icon-pause"></use>
            </svg>
          </button>
          <audio class="audio">
            <source src="@/assets/music/sweaters.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div class="bottom">
          <div class="infos">
            <div class="title">Titre du beat</div>
            <div class="author">Auteur du beat</div>
          </div>
          <button class="btn btn--buy">
            <span>23, 99€</span>
            <svg class="icon icon-shopping-cart">
              <use xlink:href="sprite.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
            draggable="false"
            alt=""
          />
          <button class="btn btn--play" @click="play">
            <svg class="icon icon-controller-play">
              <use xlink:href="sprite.svg#icon-controller-play"></use>
            </svg>
            <svg class="icon icon-pause">
              <use xlink:href="sprite.svg#icon-pause"></use>
            </svg>
          </button>
          <audio class="audio">
            <source
              src="@/assets/music/a-samurais-death.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
        <div class="bottom">
          <div class="infos">
            <div class="title">Titre du beat2</div>
            <div class="author">Auteur du beat2</div>
          </div>
          <button class="btn btn--buy">
            <span>23, 99€</span>
            <svg class="icon icon-shopping-cart">
              <use xlink:href="sprite.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg?ts=1588828036"
            draggable="false"
            alt=""
          />
          <button class="btn btn--play" @click="play">
            <svg class="icon icon-controller-play">
              <use xlink:href="sprite.svg#icon-controller-play"></use>
            </svg>
            <svg class="icon icon-pause">
              <use xlink:href="sprite.svg#icon-pause"></use>
            </svg>
          </button>
          <audio class="audio">
            <source src="@/assets/music/mask-off.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div class="bottom">
          <div class="infos">
            <div class="title">Titre du beat</div>
            <div class="author">Auteur du beat</div>
          </div>
          <button class="btn btn--buy">
            <span>23, 99€</span>
            <svg class="icon icon-shopping-cart">
              <use xlink:href="sprite.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/717VbeZb0bL._AC_SX466_.jpg"
            draggable="false"
            alt=""
          />
          <button class="btn btn--play" @click="play">
            <svg class="icon icon-controller-play">
              <use xlink:href="sprite.svg#icon-controller-play"></use>
            </svg>
            <svg class="icon icon-pause">
              <use xlink:href="sprite.svg#icon-pause"></use>
            </svg>
          </button>
          <audio class="audio">
            <source src="@/assets/music/decouverte.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div class="bottom">
          <div class="infos">
            <div class="title">Titre du beat</div>
            <div class="author">Auteur du beat</div>
          </div>
          <button class="btn btn--buy">
            <span>23, 99€</span>
            <svg class="icon icon-shopping-cart">
              <use xlink:href="sprite.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img
            src="https://zerojackerzz.com/wp-content/uploads/2019/10/album-placeholder.png"
            draggable="false"
            alt=""
          />
          <button class="btn btn--play" @click="play">
            <svg class="icon icon-controller-play">
              <use xlink:href="sprite.svg#icon-controller-play"></use>
            </svg>
            <svg class="icon icon-pause">
              <use xlink:href="sprite.svg#icon-pause"></use>
            </svg>
          </button>
          <audio class="audio">
            <source src="@/assets/music/sweaters.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div class="bottom">
          <div class="infos">
            <div class="title">Titre du beat</div>
            <div class="author">Auteur du beat</div>
          </div>
          <button class="btn btn--buy">
            <span>23, 99€</span>
            <svg class="icon icon-shopping-cart">
              <use xlink:href="sprite.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button class="btn btn--see-all--secondary">Tout voir</button>
  </section>
</template>

<script>
export default {
  methods: {
    play() {
      document.querySelector(".player").classList.add("playing");
    }
  }
};
</script>

<style lang="scss" scoped>
.previews {
  margin-top: 8rem;

  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
      justify-content: center;
      text-align: center;
    }

    .news {
      @media (max-width: 1024px) {
        font-size: 2.8rem;
      }
      @media (max-width: 480px) {
        font-size: 2.4rem;
      }
    }
    .btn--see-all {
      border: 1px solid $color-white;
      padding: 1.2rem 2rem;
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 1px;
      transition: 0.2s ease-out;

      @media (max-width: 480px) {
        display: none;

        .btn--see-all--secondary {
          display: block;
        }
      }

      &:hover {
        letter-spacing: 2px;
      }
    }
  }

  .news {
    font-size: 3.6rem;
    letter-spacing: 0.5px;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .card {
      border-radius: 3px;
      width: 250px;
      margin: 4rem 2rem;

      .image {
        border-radius: 2px;
        transition: 0.1s ease-in-out;
        position: relative;

        &:hover {
          .btn--play {
            display: block;
            background: rgba($color: #000, $alpha: 0.7);

            &.active {
              .icon-controller-play {
                display: none;
              }

              .icon-pause {
                display: inline;
              }
            }
          }
        }

        img {
          width: 100%;
        }

        .btn--play {
          display: none;
          width: 100%;
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          .icon-controller-play,
          .icon-pause {
            fill: $color-white;
            width: 100%;
            height: 10rem;
            width: 10rem;
          }

          .icon-pause {
            display: none;
          }
        }
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        .infos {
          margin-right: 1rem;

          .title {
            font-weight: 500;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;

            &:hover {
              text-decoration: underline;
            }
          }

          .author {
            font-size: 1.4rem;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .btn--buy {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          background: rgb(216, 25, 25);
          font-weight: 600;

          padding: 1rem 2rem;
          border-radius: 5px;
          font-size: 1.3rem;
          transition: 0.2s ease-in-out;
          flex-shrink: 0;
          align-self: start;

          &:hover {
            background: lighten(rgb(216, 25, 25), 5%);
          }

          .icon-shopping-cart {
            height: 1.5rem;
            width: 1.5rem;
            fill: $color-white;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .btn--see-all--secondary {
    display: none;
    border: 1px solid $color-white;
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 1px;
    transition: 0.2s ease-out;
    margin: 0 auto;

    @media (max-width: 480px) {
      display: block;
    }
  }
}
</style>
