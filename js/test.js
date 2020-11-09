// jsを記述する際はここに記載していく
console.log("はじめてのジャバスクリプト");
console.log(23 +5);
console.log(2000 -1800);
console.log("18+5");

var name = "Yuya Fukuda";
console.log(name);

var point = 90;
if(point >= 80){
    console.log("素晴らしい！おめでとう！");
}else{
    console.log("もっと頑張りましょう");
}

$(function () {
    // この中に書いていく
    $(".button").on("click", function(){

        var random = Math.floor(Math.random() * 5);
        if(random == 0){
            console.log("凶" + random);
            $(".kekka").html("凶");
        }else if(random == 1){
            console.log("吉"+ random);
            $(".kekka").html("吉");
        }else if(random == 2){
            console.log("小吉"+ random);
            $(".kekka").html("小吉");
        }else if(random == 3){
            console.log("中吉"+ random);
            $(".kekka").html("中吉");
        }else{
            console.log("大吉"+ random);
            $(".kekka").html("大吉");
        }
    });

    // この中に書いていく
  });