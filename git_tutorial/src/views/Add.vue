<template>
  <div class="container">
    <!-- <img class="github2" src="https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png" alt=""> -->
    <div class="factory">
 
    </div>
   

  </div>
</template>



<script>


export default {
  name:'Add',
  data() {
    return {

    }
  },
  components: {

  },
  method: {


    move() {

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
  }
  .github2 {
    width: 10vh;
    height: 10vh;
    position: absolute;
    
  }
</style>
