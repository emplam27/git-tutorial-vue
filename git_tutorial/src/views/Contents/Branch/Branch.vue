<template>
  <div class="branch">
    <h2 class="branch__command">난 브랜치야</h2>

    <div class="branch__animation">난 애니메이션이야!!</div>

    <div class="branch__explanation">
      <div class="branch__explanation__description">
        <h3 class="branch__explanation__description__title">Description</h3>
        <p class="branch__explanation__description__content"></p>
      </div>
      <div class="branch__explanation__options">
        <h3 class="branch__explanation__options__title">Options</h3>
        <ul class="branch__explanation__options__items">
          <li class="branch__explanation__options__item">
            <h4 class="branch__explanation__options__item__title"></h4>
            <div class="branch__explanation__options__item__terminal"></div>
            <p class="branch__explanation__options__item__description"></p>
            <div class="branch__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'branch',
}
</script>

<style>
.branch__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .branch__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .branch__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .branch__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .branch__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
 
</style>