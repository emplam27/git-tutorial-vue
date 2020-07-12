<template>
  <div class="pull">
    <h2 class="pull__command">난 풀이야</h2>

    <div class="pull__animation">난 애니메이션이야!!</div>

    <div class="pull__explanation">
      <div class="pull__explanation__description">
        <h3 class="pull__explanation__description__title">Description</h3>
        <p class="pull__explanation__description__content"></p>
      </div>
      <div class="pull__explanation__options">
        <h3 class="pull__explanation__options__title">Options</h3>
        <ul class="pull__explanation__options__items">
          <li class="pull__explanation__options__item">
            <h4 class="pull__explanation__options__item__title"></h4>
            <div class="pull__explanation__options__item__terminal"></div>
            <p class="pull__explanation__options__item__description"></p>
            <div class="pull__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'pull',
}
</script>

<style>.pull__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .pull__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .pull__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .pull__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .pull__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
</style>