<template>
  <div class="clone">
    <h2 class="clone__command">난 클론이야</h2>

    <div class="clone__animation">난 애니메이션이야!!</div>

    <div class="clone__explanation">
      <div class="clone__explanation__description">
        <h3 class="clone__explanation__description__title">Description</h3>
        <p class="clone__explanation__description__content"></p>
      </div>
      <div class="clone__explanation__options">
        <h3 class="clone__explanation__options__title">Options</h3>
        <ul class="clone__explanation__options__items">
          <li class="clone__explanation__options__item">
            <h4 class="clone__explanation__options__item__title"></h4>
            <div class="clone__explanation__options__item__terminal"></div>
            <p class="clone__explanation__options__item__description"></p>
            <div class="clone__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'clone',
}
</script>

<style>
.clone__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .clone__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .clone__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .clone__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .clone__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
</style>