<template>
  <div id="app">
    <!-- version 1 -->
    <!-- <transition  name='slide-side-bar'>
      <div v-if='showSideBar' class='nav'>
          <ul class='side-bar-list'>
            <div @click='closeSideBar' class="side-bar-close">X</div>
            <li class="side-bar-menu">Home</li>
            <li class="side-bar-menu">Index</li>
            <li class="side-bar-menu">About</li>
            <li class="side-bar-menu">Contact</li>
          </ul>
      </div>
    </transition>
    <h1 class='open-text' @click='openSideBar'>Open Side Bar</h1> -->

    <!-- version 2 -->
    <transition name='expand-side-bar'>
      <div v-if='showSideBar' class='nav'>
          <ul class='side-bar-list'>
            <div @click='closeSideBar' class="side-bar-close">X</div>
            <li class="side-bar-menu">Home</li>
            <li class="side-bar-menu">Index</li>
            <li class="side-bar-menu">About</li>
            <li class="side-bar-menu">Contact</li>
          </ul>
      </div>
    </transition>
    <div class='open-btn' @click='openSideBar'></div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showSideBar : false,
      slideVersion : true,
    }
  },
  methods: {
    openSideBar() {
      this.showSideBar = true
    },
    closeSideBar() {
      this.showSideBar = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 10000px;
}

.nav {
  height: 100%;
  width: 150px;
  background-color: cadetblue;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.side-bar-list {
  list-style: none;
  padding-left: 30px;
  text-align: left;
}

.side-bar-menu {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.side-bar-close {
  text-align: right;
  margin-right: 15px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
}

.open-text {
  cursor: pointer;
}

.open-btn {
  position: fixed;
  top: 50%;
  left: 3%;
  transform: translate(0, -50%);
  height: 30px;
  width: 30px;
  background-color: cadetblue;
}

.slide-side-bar-enter-active, .slide-side-bar-leave-active {
  transition: all .5s ease-in-out;
}
.slide-side-bar-enter, .slide-side-bar-leave-to {
  width: 0;
}

.expand-side-bar-enter-active, .expand-side-bar-leave-active {
  transition: all .5s ease-in-out;
}
.expand-side-bar-enter, .expand-side-bar-leave-to {
  transform: scale(0);
}

</style>
