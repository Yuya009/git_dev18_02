// jsを記述する際はここに記載してい
var rps_kekka;

$(function () {
    // この中に書いていく
    $(".rock").on("click", function(){
        var btn_rps = $(".rock").val();
        var random = Math.floor(Math.random() * 3);
        rps_kekka = btn_rps - random;
        $(".hand_img").html('<img src="img/my_rock.png" width="300px" height="300px">');
        if(rps_kekka == 0){
            console.log("引き分け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_rock.png" width="300px" height="300px">');
            $(".kekka").html("引き分けです。");
        }else if(rps_kekka == -1){
            console.log("勝ち"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_scissors.png" width="300px" height="300px">');
            $(".kekka").html("あなたの勝ちです。");
        }else if(rps_kekka == -2){
            console.log("負け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_paper.png" width="300px" height="300px">');
            $(".kekka").html("あなたの負けです。");
        }
    });
    $(".scissors").on("click", function(){
        var btn_rps = $(".scissors").val();
        var random = Math.floor(Math.random() * 3);
        rps_kekka = btn_rps - random;
        $(".hand_img").html('<img src="img/my_scissors.png" width="300px" height="300px">');
        if(rps_kekka == 0){
            console.log("引き分け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_scissors.png" width="300px" height="300px">');
            $(".kekka").html("引き分けです。");
        }else if(rps_kekka == 1){
            console.log("負け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_rock.png" width="300px" height="300px">');
            $(".kekka").html("あなたの負けです。");
        }else if(rps_kekka == -1){
            console.log("勝ち"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_paper.png" width="300px" height="300px">');
            $(".kekka").html("あなたの勝ちです。");
        }
    });
    $(".paper").on("click", function(){
        var btn_rps = $(".paper").val();
        var random = Math.floor(Math.random() * 3);
        rps_kekka = btn_rps - random;
        $(".hand_img").html('<img src="img/my_paper.png" width="300px" height="300px">');
        if(rps_kekka == 0){
            console.log("引き分け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_paper.png" width="300px" height="300px">');
            $(".kekka").html("引き分けです。");
        }else if(rps_kekka == 1){
            console.log("負け"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_scissors.png" width="300px" height="300px">');
            $(".kekka").html("あなたの負けです。");
        }else if(rps_kekka == 2){
            console.log("勝ち"+ rps_kekka);
            $(".cpu_kekka").html('<img src="img/cpu_rock.png" width="300px" height="300px">');
            $(".kekka").html("あなたの勝ちです。");
        }
    });

    // この中に書いていく
  });