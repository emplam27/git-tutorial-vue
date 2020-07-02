<template>
  <div class="">
      <button @click="CreateRepo">Init 하기</button>
      <br>
      <input v-model="name" type="text">
      <div class="container" > 
        <br> 
        <div class="wrap">
          <div  class="wrap-image"><img class="github" src="https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png" alt=""></div>  
        </div>   
      </div>

  </div>
</template>



<script>


export default {
  name:'Init',
  data() {
    return {
        name:'',
        ImgDir:"@/assets/github.png",
        list: [],
        count:1,
    }
  },
  components: {

  },
  methods: {


    CreateRepo() {
        console.log('오긴오냐')
        const Div =  document.createElement('div')
        const Name =  document.createTextNode(this.name)   
        const wrapTag = document.querySelector('.wrap')
        const NewRepo = document.createElement('img')
        const BranchName = document.createElement('h1')
        BranchName.appendChild(Name)

        NewRepo.setAttribute("class","github")
        NewRepo.setAttribute("src","https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png")
        

        Div.appendChild(NewRepo)
        Div.appendChild(BranchName)
        wrapTag.appendChild(Div)

    },

    
   

  },
  created() {
    this.count = 1
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
      justify-content: center;
      align-items: center;
      height: 1000px;
      position: relative;
      background-color: gray;
  }
  .github {
      width: 20vh;
      height: 20vh;
      animation: fadein 2s;
      
      
      /* position: absolute; */
        -webkit-transition-duration: 2s;
        -moz-transition-duration: 2s;
        -ms-transition-duration: 2s;
        -o-transition-duration: 2s;
        transition-duration: 2s;
        
        -webkit-transform: scale(1.0);
        -moz-transform: scale(1.0);
        -ms-transform: scale(1.0);
        -o-transform: scale(1.0);
        transform: scale(1.0);  
        

  }


.github:hover {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
}






.wrap {
  display: flex;
  justify-content: center;
}

.wrap-img  {
  
}
.wrap-text {
 
}

</style>
