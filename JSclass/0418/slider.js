$(function(){
    // $(".pager a").click(function(event){
    //     event.preventDefault(); // 링크 기본 동작 막기
    //     $("ul li img").hide(); // 모든 이미지 숨기기
    //     var index = $(this).index(); // 클릭된 a 태그의 인덱스 값 구하기
    //     $("ul li img").eq(index).show(); // 해당 인덱스에 해당하는 이미지 보여주기
    // });

   
    $(".pager a").click(function(){
        var img_width = $(".mask img").width();
        var index = $(this).index();
        $(".mask ul").animate({left:-img_width * index});

        // $(".mask").css({width:img_width})
        $(".mask").width(img_width);
    })

    });