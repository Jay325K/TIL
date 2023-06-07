self.addEventListener("install",pEvent => {
    console.log("서비스 워커 설치 완료!");
    });


self.addEventListener('fetch',pEvent => {
    console.log("서비스 워커 패치 완료!");
})