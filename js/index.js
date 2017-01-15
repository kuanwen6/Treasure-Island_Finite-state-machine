function restart(){
    console.log("restart");
    $("#arrow1-2a").css("visibility","hidden");
    document.getElementById("is1A").style.display="inherit"
    document.getElementById("is1B").style.display="inherit"
    path_click(document.getElementById("is1A"),"is1A","A")  //flag restart
    path_click(document.getElementById("is1B"),"is1B","B")
    document.getElementById("boat").style.left=180   //boat restart
    document.getElementById("boat").style.top=310
    for(var i=2;i<6;i++){
        document.getElementById("is"+i+"A").style.display="none"
        document.getElementById("is"+i+"B").style.display="none"
    }
    document.getElementById("description").click(); //modal description

    initial_tag=0
    move_count=0
    intro()
    $("#arr1-2").css("visibility","hidden");
    $("#arr1-3").css("visibility","hidden");
    $("#arr2-1").css("visibility","hidden");
    $("#arr2-3").css("visibility","hidden");
    $("#arr3-2").css("visibility","hidden");
    $("#arr3-4").css("visibility","hidden");
    $("#arr4-5").css("visibility","hidden");
    $("#arr4-1").css("visibility","hidden");
    $("#arr5-3").css("visibility","hidden");
    $("#arr5-2").css("visibility","hidden");

    $(".map").css("display","inherit")
    boat_invert("boat",0)
    if($(".FSM_p").length){
        boat_invert("adv_ship",0)
        adv_dis()
    }
}

var move_count=0;
function move(a,b){			//move from island a to island b
	console.log("move from "+a+" to "+b);
    move_count++
    if(initial_tag==1){
        initial_tag++
        console.log("sencond step intro")
        $(".intro_text").css("display","none");
        $("#red-a").css("display","none");
        $("#yellow-a").css("display","none");
        $(".intro_text_s").css("display","inherit");
    }else{ //cancel
        intro_no(b);
    }

    var startX,startY,endX,endY,angle_start,angle_end,length,delay=2000

    switch(a.toString()+b.toString()) {
        case "12":
            startX = 180
            startY = 310
            endX = 450
            endY = 470
            angle_start = 50
            angle_end = -50
            length = 0.5
            delay = 2000
            break;
        case "13":
            startX = 180
            startY = 310
            endX = 415
            endY = 130
            angle_start = 30
            angle_end = -30
            length = 1
            delay = 2000
            break;
        case "21":
            startX = 450
            startY = 470
            endX = 180
            endY = 310
            angle_start = -50
            angle_end = 50
            length = 0.5
            delay = 2000
            break;
        case "23":
            startX = 450
            startY = 470
            endX = 415
            endY = 130
            angle_start = 100
            angle_end = -50
            length = 2.5
            delay = 3000
            break;
        case "32":
            startX = 415
            startY = 130
            endX = 450
            endY = 470
            angle_start = 30
            angle_end = -80
            length = 0.8
            delay = 2700
            break;
        case "34":
            startX = 415
            startY = 130
            endX = 850
            endY = 400
            angle_start = 30
            angle_end = -30
            length = 0.25
            delay = 2700
            break;
        case "41":
            startX = 850
            startY = 400
            endX = 180
            endY = 310
            angle_start = -70
            angle_end = 120
            length = 0.3
            delay = 3400
            break;
        case "45":
            startX = 850
            startY = 400
            endX = 770
            endY = 115
            angle_start = -90
            angle_end = 70
            length = 1
            delay = 1800
            break;
        case "53":
            startX = 770
            startY = 115
            endX = 415
            endY = 130
            angle_start = -30
            angle_end = 50
            length = 0.3
            delay = 1800
            break;
        case "52":
            startX = 770
            startY = 115
            endX = 450
            endY = 470
            angle_start = 90
            angle_end = 70
            length = 1
            delay = 2000
            break;

        default:
            console.log("error path")
    }
    document.getElementById("is"+a+"A").onclick=null  //lock the onclick event
    document.getElementById("is"+a+"B").onclick=null
    setTimeout(function() {
        document.getElementById("is"+a+"A").style.display="none"
        document.getElementById("is"+a+"B").style.display="none"
        document.getElementById("is"+b+"A").style.display="inherit"
        document.getElementById("is"+b+"B").style.display="inherit"
        path_click(document.getElementById("is"+b+"A"),"is"+b+"A","A")  //unlock the destinction onclick event
        path_click(document.getElementById("is"+b+"B"),"is"+b+"B","B")
        $("#arr"+a+"-"+b).css("visibility","visible");

        if(b==5){
            $("#myRecord").html(move_count+'<span style="font-size:30px; color:black;">次</span');
            $('#endModal').modal('show');
        }
    }, delay);


     var bezier_params = {
        start: {
          x: startX,
          y: startY,
          angle: angle_start
        },
        end: {
          x:endX,
          y:endY,
          angle: angle_end,
          length: length
        }
      }

    $("#boat").animate({path : new $.path.bezier(bezier_params)},delay)
}

function hover(a){
	$(".text").html(island_name[a-1]);
    if(a==1){
        $(".text").css("left",document.getElementById("island"+a).offsetLeft+58);  // width + 10
        $(".text").css("top",document.getElementById("island"+a).offsetTop+5);  // height -120
    }else{
        $(".text").css("left",document.getElementById("island"+a).offsetLeft+58);  // width + 10
        $(".text").css("top",document.getElementById("island"+a).offsetTop-12);  // height -120
    }

	$(".text").css("visibility","visible");
}

function unhover(a){
	$(".text").css("visibility","hidden");
}

function flag_hover(a,id){
    if(initial_tag > 1){
        if(a=="A"){
            $(".flag_text").html("A");
            $(".flag_text").css("color","red")
            console.log("aaa")
        }else{
            $(".flag_text").html("B");
            $(".flag_text").css("color","yellow")
        }
    }else{
        $(".flag_text").html("");
    }
    console.log("a")

    $(".flag_text").css("visibility","visible");
    $(".flag_text").css("left",document.getElementById(id).offsetLeft+30);  // width + 10
    $(".flag_text").css("top",document.getElementById(id).offsetTop-42);  // height -120

}
function flag_unhover(){
    $(".flag_text").css("visibility","hidden");
}

$(document).ready(function(){
	console.log("start");
    intro()
	document.getElementById("description").click(); //modal description
    document.getElementById("music").play();
    //advance()
});

var initial_tag=0

function intro(){
    initial_tag=1
    $(".intro_text").css("display","inherit");
    $("#red-a").css("display","inherit");
    $("#yellow-a").css("display","inherit");
    $("#pirate_head").css("display","inherit");
    $("#curve").css("display","inherit");
    $(".intro_text_s").css("display","none");
    $("#t1").html("哈哈!就是這樣");
    $("#t2").html("加油吧!別迷路了!");
}

function intro_no(island){
    $("#red-a").css("display","none");
    $("#yellow-a").css("display","none");
    $(".intro_text").css("display","none");
    switch(island){
        case 1:
            $("#t1").html(".....................");
            $("#t2").html("怎麼又回到原點了!?");
            break;
        case 2:
            $("#t1").html("啊啊啊~好多沙啊");
            $("#t2").html("好燙好燙~~~~");
            break;
        case 3:
            $("#t1").html("&nbsp&nbsp&nbsp&nbsp台灣中國!");
            $("#t2").html("&nbsp&nbsp&nbsp&nbsp一邊一國!");
            break;
        case 4:
            $("#t1").html("......龍.....龍.....??");
            $("#t2").html("我要成為訓龍高手!");
            break;
        case 5:
            $("#t1").html("太神啦!感謝凱瑞");
            $("#t2").html("寶藏都是我的了哈哈");
            break;
    }
}

function path_click(img,id,a){
    img.onclick = function(){
        if(id=="is1A"){
            move(1,2)
            boat_invert("boat",0)
        }else if(id=="is2A"){
            move(2,3)
            boat_invert("boat",0)
        }else if(id=="is3A"){
            move(3,4)
            boat_invert("boat",0)
        }else if(id=="is4A"){
            move(4,5)
            boat_invert("boat",1)
        }else if(id=="is5A"){
            move(5,3)
            boat_invert("boat",1)
        }else if(id=="is1B"){
            move(1,3)
            boat_invert("boat",0)
        }else if(id=="is2B"){
            move(2,1)
            boat_invert("boat",1)
        }else if(id=="is3B"){
            move(3,2)
            boat_invert("boat",0)
        }else if(id=="is4B"){
            move(4,1)
            boat_invert("boat",1)
        }else{
            move(5,2)
            boat_invert("boat",1)
        }
    };
    img.onmouseover=function(){
        flag_hover(a,id)
    }
    img.onmouseout=function(){
        flag_unhover();
    }
}

function boat_invert(id,a){
    if(a==1)
    {
        document.getElementById(id).src="img/ship_invert.png";
    }else{
        document.getElementById(id).src="img/ship.png";
    }

}

var music_now=0;
function music_stop(){
    if(music_now==0){
        document.getElementById("music").pause();
        $("#music_btn").attr('class','glyphicon glyphicon-volume-up');
        music_now=1
    }else{
        document.getElementById("music").play();
        $("#music_btn").attr('class','glyphicon glyphicon-volume-off');
        music_now=0
    }
}

function advance(){
    //$('#endModal').modal('toggle');
    move_count=0
    $(".map").css("display","none");
    if($(".FSM_p").length)
    {
         $(".advance").css("display","inherit");
         console.log("exit")
     }else{

        $(".advance").css("display","inherit");
        $(".advance").append('<p style="position:absolute;font-size:30px;font-family:Microsoft JhengHei;font-weight:bold;left:-70px;top:112px;">起點</p>\
                                <p style="position:absolute;font-size:30px;font-family:Microsoft JhengHei;font-weight:bold;left:500px;top:330px;">終點</p>\
                                <img src="img/ship.png" id="adv_ship" style="position:absolute;height:85px;width:85px;top:30px;left:70px;">\
                                <img src="img/path.png" id="1-2" class="FSM_p" style="top:65px;left:150px;" onclick="adv_move(1,2)">\
                                <img src="img/path.png" id="2-1" class="FSM_p" style="top:155px;left:150px;display:none;" onclick="adv_move(2,1)">\
                                <img src="img/path.png" id="2-2" class="FSM_p" style="top:20px;left:290px; height:60px;width:80px;display:none;" onclick="adv_move(2,2)">\
                                <img src="img/path.png" id="3-4" class="FSM_p" style="top:270px;left:255px;display:none;" onclick="adv_move(3,4)">\
                                <img src="img/path.png" id="4-3" class="FSM_p" style="top:335px;left:255px;display:none;" onclick="adv_move(4,3)">\
                                <img src="img/path.png" id="3-1" class="FSM_p" style="top:225px;left:50px;display:none;-ms-transform: rotate(55deg);-webkit-transform: rotate(55deg);transform: rotate(55deg);" onclick="adv_move(3,1)">\
                                <img src="img/path.png" id="2-4" class="FSM_p" style="width:145px;top:185px;left:355px;display:none;-ms-transform: rotate(55deg);-webkit-transform: rotate(55deg);transform: rotate(55deg);" onclick="adv_move(2,4)">\
                                <p style="position:absolute;font-size:25px;font-family:Microsoft JhengHei;font-weight:bold;left:80px;top:450px;">※進階題：</p>\
                                <p style="position:absolute;font-size:25px;font-family:Microsoft JhengHei;font-weight:bold;left:80px;top:480px;">這是一個有限狀態機的常規表示法</p>\
                                <p style="position:absolute;font-size:25px;font-family:Microsoft JhengHei;font-weight:bold;left:80px;top:510px;">起點開始，點擊可行路線(a、b、c)</p>\
                                <p style="position:absolute;font-size:25px;font-family:Microsoft JhengHei;font-weight:bold;left:80px;top:540px;">然後試著規劃路線到達終點吧!!</p>')
        }
}


function adv_dis(){
    $(".FSM_p").css("display","none")
    $("#1-2").css("display","inherit")
    $("#adv_ship").css("top","30px")
    $("#adv_ship").css("left","70px")
    $(".advance").css("display","none")
}

function adv_move(a,b){
    console.log("move from "+a+" to "+b)
    move_count++
    switch(a.toString()+b.toString()) {
        case "12":
            boat_invert("adv_ship",0)
            startX = 70
            startY = 30
            endX = 280
            endY = 30
            angle_start = 0
            angle_end = 0
            length = 0.5
            break;
        case "31":
            boat_invert("adv_ship",1)
            startX = 165
            startY = 225
            endX = 70
            endY = 30
            angle_start = -50
            angle_end = 50
            length = 1
            break;
        case "21":
            startX = 280
            startY = 30
            endX = 70
            endY = 30
            angle_start = -50
            angle_end = 50
            length = 1.1
            boat_invert("adv_ship",1)
            break;
        case "22":
            startX = 280
            startY = 30
            endX = 280
            endY = 30
            angle_start = 100
            angle_end = -100
            length = 2
            boat_invert("adv_ship",0)
            break;
        case "24":
            startX = 280
            startY = 30
            endX = 390
            endY = 215
            angle_start = -30
            angle_end = 50
            length = 0.8
            boat_invert("adv_ship",0)
            break;
        case "43":
            startX = 390
            startY = 215
            endX = 165
            endY = 225
            angle_start = -50
            angle_end = 50
            length = 1
            boat_invert("adv_ship",1)
            break;
        case "34":
            startX = 165
            startY = 225
            endX = 390
            endY = 225
            angle_start = -50
            angle_end = 50
            length = 0.2
            boat_invert("adv_ship",0)
            break;
        default:
            console.log("error path")
    }

    switch(a){
        case 1:
            document.getElementById("1-2").style.display="none"
            break;
        case 2:
            document.getElementById("2-2").style.display="none"
            document.getElementById("2-1").style.display="none"
            document.getElementById("2-4").style.display="none"
            break;
        case 3:
            document.getElementById("3-4").style.display="none"
            document.getElementById("3-1").style.display="none"
            break;
        case 4:
            document.getElementById("4-3").style.display="none"
            break;
    }

    setTimeout(function() {
        switch(b){
            case 1:
                document.getElementById("1-2").style.display="inherit"
                break;
            case 2:
                document.getElementById("2-2").style.display="inherit"
                document.getElementById("2-1").style.display="inherit"
                document.getElementById("2-4").style.display="inherit"
                break;
            case 3:
                document.getElementById("3-4").style.display="inherit"
                document.getElementById("3-1").style.display="inherit"
                break;
            case 4:
                document.getElementById("4-3").style.display="inherit"
                break;
        }

        if(b==4){
            $("#myRecord2").html(move_count+'<span style="font-size:30px; color:black;">次</span');
            $('#sec_endModal').modal('show');
        }

    }, 1800);

    var arc_params = {
        center: [280,-12.5],
        radius: 42.5,
        start: 0,
        end: 9,
        dir: -1
    }

     var bezier_params = {
        start: {
          x: startX,
          y: startY,
          angle: angle_start
        },
        end: {
          x:endX,
          y:endY,
          angle: angle_end,
          length: length
        }
      }

      if(a==b){
          $("#adv_ship").animate({path : new $.path.arc(arc_params)},1800)
      }else{
          $("#adv_ship").animate({path : new $.path.bezier(bezier_params)},1800)
      }

}

var island_name =["新手島","神燈島","中華島","龍之島","金銀島"]

for(var i=1;i<6;i++)  // A flag initial
{
    island = document.getElementById("island"+i)
    x = island.offsetLeft
    y = island.offsetTop

    var img = document.createElement("img");
    img.id = "is"+i+"A"
    img.style.height=90;
    img.style.width=90;
    img.style.position="absolute";
    img.src = "img/jolly-roger.png";

    img.style.display="none";
    img.style.top = y+70
    img.style.left= x-10

    var src = document.getElementById("map");
    src.appendChild(img);

    path_click(img,img.id,"A")
}

for(var i=1;i<6;i++)  // B flag initial
{
    island = document.getElementById("island"+i)
    x = island.offsetLeft
    y = island.offsetTop

    var img = document.createElement("img");
    img.id = "is"+i+"B"
    img.style.height=90;
    img.style.width=90;
    img.style.position="absolute";
    img.src = "img/jolly-roger.png";

    img.style.display="none";
    img.style.top = y+70
    img.style.left= x+170

    var src = document.getElementById("map");
    src.appendChild(img);

    path_click(img,img.id,"B")
}

document.getElementById("is1A").style.display="inherit"
document.getElementById("is1B").style.display="inherit"
intro()