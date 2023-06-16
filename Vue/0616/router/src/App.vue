<template>
  <div id="app">
    <v-app>
      <!-- 앱바 테마를 primary(파란색) 로 설정 -->
      <v-app-bar app color="primary" dark>
        <!-- 좌측에 메뉴 아이콘 생성 -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>멀티 페이지</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- 내용 영역에 라우터 페이지 렌더링 -->
      <v-main>
        <!-- 페이지 장면전환 효과 -->
        <v-slide-x-transition mod="out-in">
          <router-view></router-view>
        </v-slide-x-transition>
      </v-main>

      <!-- Footer 영역 테마를 secondary로 설정 -->
      <v-footer color="secondary" fixed dark>
        <div class="mx-auto">Create By VueJS</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
</script>

<style></style>
