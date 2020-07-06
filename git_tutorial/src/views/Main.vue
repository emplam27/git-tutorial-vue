<template>
  <section>
    <aside>
      <router-link to="/intro">GIT Intro</router-link> |
      <router-link to="/init">INIT</router-link> |
      <router-link to="/">ADD</router-link> |
      <router-link to="/">COMMIT</router-link> |
      <router-link to="/">PUSH</router-link> |
      <router-link to="/">BRANCH</router-link> |
      <router-link to="/">PULL</router-link> |
    </aside>

    <article>
      <router-view/>
    </article>
  </section>
</template>

<script>
export default {
    name:'Main',
}
</script>

<style>

</style>