var str;
$(".cal_num").click(function(){
    var oldresult = $(".cal_show").text().toString();
    var val=$(this).text();
    var newresult;
    if(oldresult ==="0" && val != "."){
        newresult = val;
    }else{
        newresult = oldresult + val
    }
    $(".cal_show").text(newresult);
})
$(".cal_back").click(function(){
    var oldresult = $(".cal_show").text().toString();
    var newresult;
    newresult = oldresult.substring(0,oldresult.length-1)
    if(newresult === ""){
        newresult = "0"
    }
    $(".cal_show").text(newresult);
})

function sum(str_num){
    var num = str_num.split
}