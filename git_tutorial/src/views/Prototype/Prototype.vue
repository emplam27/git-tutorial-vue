<template>
  <section id="Prototype">
    <h2 class="section__title">git init</h2>
    <div>
      <p>git init: 본사에서 로봇 설계도를 저장하기 시작하는 것</p>
      <GitInitAnimation />
    </div>
    <h2 class="section__title">git add</h2>
    <div>
      <p>git add: 만들던 로봇이 달라진점을 적는 것</p>
      <p>오늘은 다리부분을 수정하고 몸통을 새로 만들었다.</p>
      <p>
        add: 어제와 달라진점은 다리부분이 수정되고, 몸통부분이 새로 추가된
        것이다.
      </p>
      <p>나의 설계도 저장소: 로봇 다리</p>
      <GitAddAnimation />
    </div>
    <h2 class="section__title">git commit</h2>
    <div>
      <p>git commit: 지금까지 만든 로봇의 설계도를 메세지와 함께 저장하는 것.</p>
      <p>commit message: "2020년 07월 01일에 로봇 몸통을 만듦"</p>
      <p>나의 설계도 저장소: 로봇 다리, 로봇 몸통</p>
    </div>
    <h2 class="section__title">git push</h2>
    <div>
      <p>git push: 만든 로봇과 설계도를 모두 볼 수 있게 하는 것</p>
    </div>
    <h2 class="section__title">git branch</h2>
    <div>
      <p>git branch 로봇을 만들기 시작하는 것</p>
    </div>
  </section>
</template>

<script>
import GitInitAnimation from "@/views/Prototype/GitInitAnimation";
import GitAddAnimation from "@/views/Prototype/GitAddAnimation";

export default {
  // name: Prototype,
  components: {
    GitInitAnimation,
    GitAddAnimation
  }
};
</script>

<style>
section {
  background: white;
}

.section__title {
  text-align: left;
  margin-top: 10rem;
}
</style>
