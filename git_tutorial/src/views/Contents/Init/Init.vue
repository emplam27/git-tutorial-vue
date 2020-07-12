<template>
  <div class="init">
    <h2 class="init__command">난 이닛이야</h2>

    <div class="init__animation">난 애니메이션이야!!</div>

    <div class="init__explanation">
      <div class="init__explanation__description">
        <h3 class="init__explanation__description__title">Description</h3>
        <p class="init__explanation__description__content"></p>
      </div>
      <div class="init__explanation__options">
        <h3 class="init__explanation__options__title">Options</h3>
        <ul class="init__explanation__options__items">
          <li class="init__explanation__options__item">
            <h4 class="init__explanation__options__item__title"></h4>
            <div class="init__explanation__options__item__terminal"></div>
            <p class="init__explanation__options__item__description"></p>
            <div class="init__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Init',
}
</script>

<style>
.init__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .init__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .init__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .init__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .init__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
</style>