<template>
  <div class='container d-flex flex-column align-items-center'>
    <div class='blank-box'></div>
    <div class='head-office bg-danger'>본사</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const fixedBox = document.querySelector('.head-office')
console.log(fixedBox)

window.addEventListener('scroll', () => {
  const scrollY = document.querySelector('html').scrollTop;
  console.log(scrollY)
  if (scrollY === 300) {
    fixedBox.classList.add(".fixed")
  }
})

export default {
  name: "Single",
  // data() {
  //   return {
  //     scrollY: ''
  //   }
  // },
  // methods: {
  //   scrollControl() {
  //     console.log(scrollY)
  //   }
  // },
  computed: {
    ...mapState([
    ])
  },
  // mounted() {
  //   this.scrollControl()
  // }
}
</script>

<style>
.blank-box {
  height: 300px;
}
.head-office {
  width: 300px;
  height: 150px;
  font-size: 50px;
  border-radius: 15px;
  line-height: 150px;
  text-align: center;
}
.container {
  height: 10000px;
}
.fixed {
  position: fixed;
  top: 0;
}
</style>