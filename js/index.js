function restart(){
    console.log("restart");
}

function move(a,b){			//move from island a to island b
	console.log("move from "+a+" to "+b);

	if(a==1){
		var rect = document.getElementById("island1")
	}
	else{
		var rect = document.getElementById("island2")
	}
	console.log(rect.offsetLeft, rect.offsetTop)

	x1=document.getElementById("island1")
	x2=document.getElementById("island2")
	xx1=x1.offsetLeft
	y1=x1.offsetTop
	xx2=x2.offsetLeft
	y2=x2.offsetTop




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


    setTimeout(function() {
        document.getElementById("is"+a+"A").style.display="none"
        document.getElementById("is"+a+"B").style.display="none"
        document.getElementById("is"+b+"A").style.display="inherit"
        document.getElementById("is"+b+"B").style.display="inherit"
        $("#arrow1-2a").css("visibility","visible");
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

$(document).ready(function(){
	console.log("start");
	//document.getElementById("description").click(); //modal description

});

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

    img.onclick = function(){
        if(this.id=="is1A"){
            move(1,2)
        }else if(this.id=="is2A"){
            move(2,3)
        }else if(this.id=="is3A"){
            move(3,4)
        }else if(this.id=="is4A"){
            move(4,5)
        }else{
            move(5,3)
        }
    };

    var src = document.getElementById("map");
    src.appendChild(img);
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

    img.onclick = function(){
        if(this.id=="is1B"){
            move(1,3)
        }else if(this.id=="is2B"){
            move(2,1)
        }else if(this.id=="is3B"){
            move(3,2)
        }else if(this.id=="is4B"){
            move(4,1)
        }else{
            move(5,2)
        }
    };

    var src = document.getElementById("map");
    src.appendChild(img);
}

document.getElementById("is1A").style.display="inherit"
document.getElementById("is1B").style.display="inherit"