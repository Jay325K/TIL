<template>
    <!-- 템플릿안에 꼭 최상위 (div) 만들고 아래에 제작하기! -->
    <div>
        <h2>메인페이지 입니다</h2>
        <button @click="fnSubPage" type="button">서브 페이지로 이동(라우터 함수 사용)</button>
        <!-- v:on 대신 @!    : 이것만 쓰면 v-bind (하나만 쓸때 가능!) -->
    </div>
</template>
<script>
// 이 컴포넌트는 다른곳에서도 사용할거야! = default!
export default {
    methods: {
        // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 입력
        fnSubPage() {
            // 기본적으로 컴포넌트 내에서 사용된 함수는 원래 그 컴포넌트 내에서만 사용 가능!
            // 다른곳에서도 사용하려면 상태관리 필요! -> 그게 vue (라이브러리기능 아니고 자체 기능)
            this.$router.push('/sub')
        }
    },
}
</script>
<!-- 스타일은 스타일 탭 만들기 -->
<style>
</style>
    