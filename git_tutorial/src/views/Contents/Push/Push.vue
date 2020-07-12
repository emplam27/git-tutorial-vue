<template>
  <div class="push">
    <h2 class="push__command">난 푸시야</h2>

    <div class="push__animation">난 애니메이션이야!!</div>

    <div class="push__explanation">
      <div class="push__explanation__description">
        <h3 class="push__explanation__description__title">Description</h3>
        <p class="push__explanation__description__content"></p>
      </div>
      <div class="push__explanation__options">
        <h3 class="push__explanation__options__title">Options</h3>
        <ul class="push__explanation__options__items">
          <li class="push__explanation__options__item">
            <h4 class="push__explanation__options__item__title"></h4>
            <div class="push__explanation__options__item__terminal"></div>
            <p class="push__explanation__options__item__description"></p>
            <div class="push__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'push',
}
</script>

<style>
.push__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .push__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .push__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .push__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .push__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
</style>