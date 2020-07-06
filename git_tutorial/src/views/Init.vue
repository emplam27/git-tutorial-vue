<template>
  <div class="">
      <button @click="Coding">뚝딱뚝딱 코딩하기</button>
      <br>
      <br>
      <input v-model="CodeText" type="text">
      <br>
      <br>
      <button @click="GIT">실행하기</button>
      <br>
      <br>
      <h1>대충 설명하자면 키워드마다 끊어서 입력하게 해서 케이스 분류를 해주면 될꺼같습니다</h1>
      <br>
      <br>
      <label for="">git</label>
      <input v-model="orders.order1" type="text">
      <input v-model="orders.order2" type="text">
      <input v-model="orders.order3" type="text">
      <input v-model="orders.order4" type="text">
      <input v-model="orders.order5" type="text">
      <div class="container" > 
        <div class="wrap">

        </div>   
      </div>

  </div>
</template>



<script>


export default {
  name:'Init',
  data() {
    return {
        IsInit:false,
        CodeText:'',
        orders:{
          order1:'',
          order2:'',
          order3:'',
          order4:'',
          order5:'',

        },
        
        Repo: {
          master:{commit: [], data:[]},

        },
        Middle: [

        ],
        Local: [

        ],

        BranchCnt:0,

    }
  },
  components: {

  },
  methods: {
    Coding() {
      const CodeText = this.CodeText
      const Local = this.Local
      
      const Div =  document.createElement('div')
      const DivBox = document.createElement('div')
      const ContainerTag = document.querySelector('.container')
      const CodeName =  document.createTextNode(this.CodeText)  

      Div.setAttribute('class','coding-boxs')
      DivBox.setAttribute('class','coding-box')

     
      Local.push(CodeText)

      DivBox.appendChild(CodeName)
      Div.appendChild(DivBox)
      ContainerTag.appendChild(Div)



    },
    GIT() {
      const orders = this.orders
      console.log(this.order1)
      if (orders.order1 === 'init' & orders.order2 === '' & orders.order3 === '' & orders.order4 === '' & orders.order5 === '' & this.IsInit === false) {
        //git init
        // this.IsInit으로 init 시점이후는 이 함수가 true일 때 만 실행하도록
        this.IsInit = true
        const Div =  document.createElement('div')
        const Name =  document.createTextNode(`지역저장소`)   
        const wrapTag = document.querySelector('.wrap')
        const LocalRepoImg = document.createElement('img')
        const BranchName = document.createElement('h1')
        BranchName.appendChild(Name)

        LocalRepoImg.setAttribute("class","github")
        LocalRepoImg.setAttribute("src","https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png")
        

        Div.appendChild(LocalRepoImg)
        Div.appendChild(BranchName)
        wrapTag.appendChild(Div)

        } else if (orders.order1 === 'add' & orders.order2 === '.' & orders.order3 === '' & orders.order4 === '' & orders.order5 === '' & this.IsInit ) {
          // git add .
          const Local = this.Local
 
          if (Local.length > 0) {
            // push 전 중간 저장지점
            this.Middle = Local
            console.log(this.Middle)
          } else {
            console.log('아무런 변화가 없어')
          }
          
        } else if (orders.order1 === 'commit' & orders.order2 === '-m' & orders.order3.length > 0 & orders.order4 === '' & orders.order5 === ''  & this.IsInit & this.Middle.length > 0) {
          // git commit -m
          // add 이후 Middle 지점에 담은게 없으면 Commit 부터 실행안되도록 해야함
          const Repo = this.Repo
          console.log(orders.order3)
          Repo.master.commit.push(orders.order3)
          console.log(Repo.master.commit)
        } else if (orders.order1 === 'push' & orders.order2 === 'origin' & orders.order3.length > 0 & orders.order4 === '' & orders.order5 === ''  & this.IsInit & this.Middle.length > 0) {
            const Repo = this.Repo
            
            /// git push origin master
            // 이 지점에서 branch 상황에서 어떻게 처리할지 고민해야함
            Repo[`${orders.order3}`].data.push(this.Middle)
            // push를 했으니 Middle를 싹 비워주고 시작해야함
            this.Middle = []
            console.log(Repo[`${orders.order3}`])
            

        } else {
          console.log('test')
          console.log(this.Init)
          console.log(this.Middle.length)
        }
          

    },

    
   

  },
  created() {
    
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

.coding-box {
    width: 5vh;
    height: 5vh;
    background-color: red;
  }


</style>
