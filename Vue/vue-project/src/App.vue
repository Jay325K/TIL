
import router from './router';

<template>
  <div id="app">
    <h1>Hello~~ Vue js!! 재히히히 </h1>
    <!-- 라우터 컴포넌트에 연결된 컴포넌트 렌더링 -->
    <!-- 라우터를 통해 어떤 컴포넌트들을 불러오게 되면 보여지는 쪽! -->
    <router-view />
    <hr>
    <p>라우터 링크 사용:
      <router-link to="/main">메인 페이지</router-link> <br>
      <router-link to="/sub">서브 페이지</router-link>
    </p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
