$(".changeBtn1").click(function(){
    console.log("click is working btn1");

    $(".firstDiv").addClass("firstDivNew")
})

$(".changeBtn2").click(function(){
    console.log("click is working btn 2");

    $(".secondDiv").css("background","yellow");
    $(".secondDiv").css("border-color","black");

})

$(".changeBtn3").click(function(){
    console.log("click is working btn 3");
    $(".thirdDiv").css("background-color","purple");
    $(".thirdDiv").css("border-color","blue");
})

$(".changeAllBtn").click(function(){
    console.log("click is working btn all")

    $(".firstDiv").addClass("changeAllColors");
    $(".secondDiv").css("background","yellow");
    $(".secondDiv").css("border-color","black");
    $(".thirdDiv").css("background","red");
    $(".thirdDiv").css("border-color","blue");
})

$(".hideBtn1").click(function(){
    $(".firstDiv").hide();
})

$(".hideBtn2").click(function(){
    $(".secondDiv").hide();
})

$(".hideBtn3").click(function(){
    $(".thirdDiv").hide();
})

$(".hideAllBtn").click(function(){
    $(".thirdDiv").hide();
    $(".secondDiv").hide();
    $(".firstDiv").hide();
})

$(".resetColors").click(function(){
    console.log("click is working btn all")
    $(".firstDiv").css("background","red");
    $(".firstDiv").css("border-color","blue");
    $(".secondDiv").css("background","blue");
    $(".secondDiv").css("border-color","yellow");
    $(".thirdDiv").css("background","limegreen");
    $(".thirdDiv").css("border-color","purple");
    
})

$(".showAllBoxes").click(function(){
    $(".firstDiv").show();
    $(".secondDiv").show();
    $(".thirdDiv").show();
})