<template>
  <div id="home-div">
    <img class='main-img' src="../images/lego.jpg" alt="">
    <div class='main-title'>
      <h1 class='main-title-text'>1살도 이해하는 Git Tutorial</h1>
    </div>
    <div class='btn'>
      <p @click="clickSingleBtn" class='single-btn'>혼자만들기</p>
      <p @click="clickMultiBtn" class='multi-btn'>같이만들기</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions([
      'clickSingleBtn',
      'clickMultiBtn',
    ]),
  }
}
</script>

<style scoped>
#home-div {
  text-align: center;
  margin-top: 200px;
  position: relative;
}
.main-title {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: yellowgreen;
}
.main-title-text {
  margin: 0;
}
.btn {
  position: absolute;
  bottom: 10%;
  left: 43%;
}

.btn .single-btn {
  display: inline-block;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 0;
  background-color: grey;
  color: white;
}

.btn .multi-btn {
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 0;
  background-color: grey;
  color: white;
}
</style>