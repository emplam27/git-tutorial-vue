<template>
  <div class="container">
     <section>
      <nav id="box" @click="move"></nav>
    </section>
  </div>
</template>

<script>
export default {
  name:'Test2',
  data() {
    return {
      posY : 0,
      posX : 0,
      itv : null,
      count : 0,
    }
  },
  method: {


    move() {

    }

  }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  *{
    margin: 0; 
    padding: 0;
  }
  section{
    width: 900px; height: 350px;
    background-color: red; position: relative;
  }
  #box{
    width: 60px; height: 60px; position: absolute;
    top: 0; left: 0; background-color: yellow;
  }

</style>
