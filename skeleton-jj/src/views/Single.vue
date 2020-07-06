<template>
  <div class='container d-flex justify-content-between'>
    <div class='index-figure d-flex flex-column align-items-center'>
      <p class='index'>{{ indexText }}</p>
    </div>

    <div class='box-figure d-flex flex-column align-items-center'>
      <div class='blank-box'></div>
      <div class='head office bg-danger' :class="{headfixed:head.isScroll}">본사</div>
      <div v-if="isArrow" class="arrow"></div>
      <div v-scrollanimation class='lab office bg-success' :class="{labfixed:lab.isScroll}">연구소</div>
      <div v-scrollanimation class='lab working bg-primary' :class="{labfixed:lab.isScroll}">작업공간
        <div class="d-flex flex-column">
          <div class="hair-box d-flex">
            <div class="hair"></div>
            <div v-scrollanimation v-show="lego.isHair" class="hair-lego"></div>
            <div class="hair"></div>
          </div>
          <div class="body-box d-flex">
            <div class="body"></div>
            <div v-scrollanimation v-show="lego.isArm" class="arm-lego"></div>
            <div class="body-lego"></div>
            <div v-scrollanimation v-show="lego.isArm" class="arm-lego"></div>
            <div class="body"></div>
          </div>
          <div class="leg-box d-flex">
            <div class="leg"></div>
            <div v-scrollanimation v-show="lego.isLeg" class="leg-lego"></div>
            <div v-scrollanimation v-show="lego.isLeg" class="leg-lego"></div>
            <div class="leg"></div>
          </div>
        </div>
      </div>
    </div>

    <div class='box-figure d-flex flex-column align-items-center'>
      <div class='blank-box'></div>
      <div class='d-flex justify-content-around' :class="{headfixed:head.isScroll}"> 
        <div class='head repas d-flex align-items-center justify-content-center bg-primary mx-5'>재품설계도</div>
        <div class='head repas d-flex align-items-center justify-content-center bg-danger mx-5'>본사<br>기록보관소</div>
      </div>
      <div v-scrollanimation class='lab repas bg-success d-flex align-items-center justify-content-center' :class="{labfixed:lab.isScroll}">연구소<br>기록보관소</div>
      <div v-scrollanimation class='lab working bg-primary' :class="{labfixed:lab.isScroll}">설계도 변경 기록소
        <h3 v-if="lego.text.isHair" class='m-3 text-danger'>추가</h3>
        <p v-if="lego.text.isHair" class='mx-3 text-warning'>머리</p>
        <p v-if="lego.text.isArm" class='mx-3 text-warning'>팔</p>
        <p v-if="lego.text.isLeg" class='mx-3 text-warning'>다리</p>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "Single",
  data() {
    return {
      scrollY: 0,
      indexText: '0. Base',
      isArrow: false,
      head: {
        isScroll: false,
      },
      lab: {
        isScroll: false,
        isScroll2: false,
      },
      lego: {
        isHair: false,
        isArm: false,
        isLeg: false,
        text: {
          isHair: false,
          isArm: false,
          isLeg: false,
        }
      },
    }
  },
  created: function() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleIndex)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      if (this.scrollY >= 200 && this.scrollY < 700) {
        this.head.isScroll = true
        this.lab.isScroll = false
      } else if (this.scrollY >= 700 && this.scrollY < 800) {
        this.lab.isScroll = true
      } else if (this.scrollY >= 800 && this.scrollY < 1000) {
        this.lab.isScroll = true
      } else if (this.scrollY >= 1000 && this.scrollY < 1200) {
        this.lego.isHair = true
        this.lego.text.isHair = true
      } else if (this.scrollY >= 1200 && this.scrollY < 1400) {
        this.lego.isArm = true
        this.lego.text.isArm = true
      } else if (this.scrollY >= 1400 && this.scrollY < 1600) {
        this.lego.isLeg = true
        this.lego.text.isLeg = true
      } else {
        this.head.isScroll = false
        this.lab.isScroll = false
      }
      console.log(this.scrollY)
    },
    handleIndex() {
      if (this.scrollY >= 0 && this.scrollY < 300) {
        this.indexText = '0. Base'
      } else if (this.scrollY >= 300 && this.scrollY <= 700) {
        this.indexText = '1. Init'
      } else if (this.scrollY > 700 && this.scrollY < 1000) {
        this.indexText = '2. Remote'
        this.isArrow = true
      } else if (this.scrollY >= 1000) {
        this.indexText = '3. Add'
      }

    }
  }
}
</script>

<style>
.hair-box {
  width: 100%;
  height: 40px;
  margin: 0;
}
.body-box {
  width: 100%;
  height: 80px;
  margin: 0;
}
.leg-box {
  width: 100%;
  height: 70px;
  margin: 0;
}

.hair {
  width: 40%;
  margin: 0;
}
.hair-lego {
  background-color: white;
  border: 1px solid black;
  width: 20%;
  margin: 0;
}
.body {
  width: 12%;
  margin: 0;
}
.body-lego {
  background-color: white;
  border: 1px solid black;
  width: 52%;
  margin: 0;
}
.arm-lego {
  background-color: white;
  border: 1px solid black;
  width: 12%;
  margin: 0;
}
.leg {
  width: 33%;
  margin: 0;
}
.leg-lego {
  background-color: white;
  border: 1px solid black;
  width: 17%;
  margin: 0;
}



.blank-box {
  height: 300px;
}
.head {
  position: relative;
  top: 0
}
.office {
  width: 150px;
  height: 100px;
  font-size: 30px;
  border-radius: 15px;
  line-height: 100px;
  text-align: center;
  color: white;
}
.repas {
  width: 100px;
  height: 100px;
  text-align: center;
  color: white;
}
.lab {
  position: relative;
  top: 700px;
}
.working {
  width: 200px;
  height: 250px;
  color: white;
  margin-top: 200px;
}

.headfixed {
  position: fixed;
  top: 10%;
}
.labfixed {
  position: fixed;
  top: 300px;
}


.before-enter {
  opacity:0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}


.box-figure {
  width: 500px;
}
.index-figure {
  width: 100px;
}
.index {
  position: fixed;
  top: 35%;
  font-size: 30px;
  font-weight: 700;
}
.arrow {
  background-color: black;
  height: 120px;
  width: 10px;
  position: fixed;
  top: 20%;
  z-index: -1;
}
</style>