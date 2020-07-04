<template>
  <div class="container">
    <!-- <img class="github2" src="https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png" alt=""> -->
    <div class="factory" :class="{move:isMove}" @click="Move">
      <div class="box"></div>
    </div>
   

  </div>
</template>



<script>


export default {
  name:'Add',
  data() {
    return {
      isMove: false
    }
  },
  components: {

  },
  method: {


    Move() {
      this.isMove = true
    }

  }
}
</script>

<style>


  *{
    margin: 0; 
    padding: 0;
  }
  .container {
    display: flex;
    
  }

  .workplace {

    width: 500px;
    height: 500px;
    /* background-color: red; */
    border: 1;
    border-color: black;
  }


  .factory {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 1200px;
    height: 700px;
    background-color: white;
    border: 1;
    border-color: black;
    transition: ease-in-out;
    transform: translate(0,0);

  }

  .box {
    width: 5vh;
    height: 5vh;
    background-color: red;
  }
  .move {
    transition: ease-in-out;
    transform: translate(100%,0);
  }


</style>
