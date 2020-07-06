<template>
  <div id="app">
    <div id="nav" v-if="isNavBar">
      <ul class='nav-bar'>
        <li>
          <div class="nav-list">init</div>
        </li>
        <li>
          <div class="nav-list">remote</div>
        </li>
        <li>
          <div class="nav-list">add</div>
        </li>
        <li>
          <div class="nav-list">commit</div>
        </li>
        <li>
          <div class="nav-list">push</div>
        </li>
      </ul>      
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState([
      'isNavBar'
    ])
  }
}
</script>

<style>
#nav {
  position: fixed;
  float: left;
  top: 20%;
  bottom: 0;
  right: 5%;
}
.nav-bar {
  display: flex;
  flex-direction: column;
  list-style:none;
  padding-left:0px;
  text-align: center;
}
.nav-list {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: cornflowerblue;
  border: 1px solid grey
}
#app {
  height: 10000px;
}
</style>
