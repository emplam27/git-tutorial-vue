<template>
  <div class="commit">
    <h2 class="commit__command">난 커밋야</h2>

    <div class="commit__animation">난 애니메이션이야!!</div>

    <div class="commit__explanation">
      <div class="commit__explanation__description">
        <h3 class="commit__explanation__description__title">Description</h3>
        <p class="commit__explanation__description__content"></p>
      </div>
      <div class="commit__explanation__options">
        <h3 class="commit__explanation__options__title">Options</h3>
        <ul class="commit__explanation__options__items">
          <li class="commit__explanation__options__item">
            <h4 class="commit__explanation__options__item__title"></h4>
            <div class="commit__explanation__options__item__terminal"></div>
            <p class="commit__explanation__options__item__description"></p>
            <div class="commit__explanation__options__item__animation"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'commit',
}
</script>

<style>
.commit__command {
   border: black 1px solid;
   padding: 10vh;
 }
 .commit__animation {
   border: black 1px solid;
   padding: 10vh;
 }
 
 /* .commit__explanation {
   border: black 1px solid;
   padding: 10vh;
 } */
  .commit__explanation__description {
   border: black 1px solid;
   padding: 10vh;
 }
  .commit__explanation__options {
   border: black 1px solid;
   padding: 10vh;
 }
</style>