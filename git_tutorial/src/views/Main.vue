<template>
  <section class="main">
    <aside class="main__side-bar">
    <div @click="IsView" class="main__side-bar__contents Intro">
      <router-link to="/intro">Intro</router-link> 
      <ul v-if="BoolList.IsIntro" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Init">
      <router-link to="/init">Init</router-link> 
      <ul v-if="BoolList.IsInit" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Add">
      <router-link to="/add">Add</router-link> 
      <ul v-if="BoolList.IsAdd" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Commit">
      <router-link  to="/commit">Commit</router-link> 
      <ul v-if="BoolList.IsCommit" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Push">
      <router-link  to="/push">Push</router-link> 
      <ul v-if="BoolList.IsPush" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Branch">
      <router-link to="/branch">Branch</router-link> 
      <ul v-if="BoolList.IsBranch" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>

    <div @click="IsView" class="main__side-bar__contents Pull">
      <router-link  to="/pull">Pull</router-link> 
      <ul v-if="BoolList.IsPull" class="main__side-bar__items">
        <li class="main_side-bar__item">testesttestetewtwe</li>
      </ul>
    </div>
  </aside>

    <article class="main__article">
      <router-view/>
    </article>
  </section>
</template>

<script>
export default {
    name:'Main',
    data() {
      return {
        BoolList: 
        {
          IsBranch:false,
          IsAdd: false,
          IsClone:false,
          IsCommit:false,
          IsInit:false,
          IsPull:false,
          IsPush:false,
          IsIntro:true,
        }
      }
    },
    methods: {
      IsView() {
        
        const BoolList = this.BoolList
        const BoolValue  = 'Is' + String(event.target.innerText)
        for (let i in BoolList) {
          console.log(i)
          BoolList[i] = false
          }
        
        BoolList[BoolValue] = true

      },
    }
    
}
</script>

<style>
  .main {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
  .main__side-bar {
    display: grid;
    grid-template: repeat(7, 1fr);
    background :#0f4c81;
    color: white;
    height: 100vh;
    font-size: 2.5vh;
    border: black 1px solid;

  }
  .main__article {
    height: 100vh;
    background: yellow;
    border: red 1px solid;
  }





</style>