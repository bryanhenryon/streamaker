<template>
  <div class="tracks-list">
    <h1 class="title">Tracks</h1>
    <div class="utils-container">
      <form class="searchbar">
        <button type="submit">
          <svg class="icon icon-search">
            <use xlink:href="sprite.svg#icon-search"></use>
          </svg>
        </button>
        <input
          type="text"
          name=""
          spellcheck="false"
          class="searchbar-input"
          placeholder="Rechercher un artiste, un titre ou un genre"
        />
      </form>
      <div class="sort-by">
        <button class="btn btn--sort-by" @click="showDropdownMenu">
          Trier par
          <svg class="icon icon-chevron-down">
            <use xlink:href="sprite.svg#icon-chevron-down"></use>
          </svg>
        </button>
        <div class="sort-by-content ">
          <ul>
            <li>Les plus récents</li>
            <li>Les plus anciens</li>
          </ul>
        </div>
      </div>
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
  </div>
</template>

<script>
export default {
  methods: {
    showDropdownMenu() {
      const btnSortBy = document.querySelector(".btn--sort-by");
      const dropdownMenu = document.querySelector(".sort-by-content");
      const iconChevronDown = document.querySelector(".icon-chevron-down");

      btnSortBy.classList.toggle("active");

      if (btnSortBy.classList.contains("active")) {
        iconChevronDown.style.transform = "rotate(180deg)";
        dropdownMenu.style.display = "block";

        window.addEventListener("click", e => {
          e.target !== btnSortBy
            ? this.hideDropdownMenu()
            : false;
        });
      } else {
        iconChevronDown.style.transform = "rotate(0)";
        dropdownMenu.style.display = "none";
      }
    },
    hideDropdownMenu() {
      const btnSortBy = document.querySelector(".btn--sort-by");
      const dropdownMenu = document.querySelector(".sort-by-content");
      const iconChevronDown = document.querySelector(".icon-chevron-down");

      btnSortBy.classList.remove("active");
      iconChevronDown.style.transform = "rotate(0)";
      dropdownMenu.style.display = "none";
    },
    play() {
      document.querySelector(".player").classList.add("playing");
    }
  }
};
</script>

<style lang="scss" scoped>
.tracks-list {
  max-width: 1600px;
  margin: 10rem auto;

  .title {
    font-size: 4.2rem;
    margin-bottom: 3rem;
  }
}

.utils-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.searchbar {
  background: $color-white;
  border-radius: 2px;
  display: flex;
  align-items: center;
  width: 500px;

  input[type="text"] {
    border: none;
    outline: none;
    font-size: 1.6rem;
    margin: 0 0.5rem;
    letter-spacing: 0.5px;
    width: 100%;

    &::placeholder {
      color: #a9a9a9;
      font-family: "Roboto", sans-serif;
      font-weight: 300;

      @media (max-width: 480px) {
        font-size: 1.4rem;
      }
    }
  }

  button[type="submit"] {
    display: flex;
    background: none;
    border: none;
    outline: none;
    padding: 1rem;
    cursor: pointer;

    .icon-search {
      height: 1.6rem;
      width: 1.6rem;
    }
  }
}

.sort-by {
  position: relative;

  .btn--sort-by {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-white;
    color: $color-black;
    padding: 1rem 2rem;
    letter-spacing: 1px;
    font-size: 1.4rem;
    border-radius: 2px;
    width: 300px;
    font-weight: 500;
    background: #262626;
    color: $color-white;

    .icon-chevron-down {
      height: 2rem;
      width: 2rem;
      fill: $color-white;
      transition: transform 0.2s ease-in-out;
    }
  }

  &-content {
    display: none;
    position: absolute;
    z-index: 100;
    left: 0;
    right: 0;
    background: #262626;
    border-radius: 0 0 2px 2px;

    ul {
      list-style: none;

      margin: 1rem 0;

      li {
        width: 100%;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            font-weight:500;
        }

      }
    }
  }
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
</style>
