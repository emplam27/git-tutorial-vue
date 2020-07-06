<template>
  <div class="add">
    <h2 class="add__command">난 애드야</h2>

    <div class="add__animation">난 애니메이션이야!!</div>

    <div class="add__explanation">
      <div class="add__explanation__description">
        <h3 class="add__explanation__description__title">Description</h3>
        <p class="add__explanation__description__content"></p>
      </div>
      <div class="add__explanation__options">
        <h3 class="add__explanation__options__title">Options</h3>
        <ul class="add__explanation__options__items">
          <li class="add__explanation__options__item">
            <h4 class="add__explanation__options__item__title"></h4>
            <div class="add__explanation__options__item__terminal"></div>
            <p class="add__explanation__options__item__description"></p>
            <div class="add__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'add',
}
</script>

<style>

 .add__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .add__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .add__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .add__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .add__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
 

</style>