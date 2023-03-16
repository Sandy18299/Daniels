


let aboutOffset = $("#about").offset().top


$(window).scroll(()=>{
   
let widowScrolTop =  $(window).scrollTop() 
if(widowScrolTop > aboutOffset - 40  ){
    $("#navMain").css("backgroundColor" , "rgb(0,0,0,0.7)")
    $("#btnUp").fadeIn(2000);
}
else{
    $("#navMain").css("backgroundColor" , "transparent")
    $("#btnUp").fadeOut(2000);
}
})
 


$("a[href^='#']").click((e)=>{

    let linkHref = $(e.target).attr('href')
    
    let sectionOffset = $(linkHref).offset().top
    console.log(sectionOffset)
    $("html , body").animate({ scrollTop : sectionOffset } , 200)

})

$("#btnUp").click( () =>{
    $("html , body").animate({ scrollTop : 0 } , 200)
})

$(document).ready(()=>{
    $("#loading").fadeOut(1000 , () =>{
        $("#loading").remove();
        $("body") .css("overflow" , "auto")
    })
})


$("#colorIcon").click (()=>{
   let widthBox = - $(".changeColor").outerWidth();
   console.log(widthBox)
    if($(".changeColor").css("left") === '0px' ){
      $(".changeColor").animate({left : `${widthBox}`} , 1000)
    }
    else{
        $(".changeColor").animate({left : "0px" } , 1000) 
    }

})




let spans = $(".changeColor span")


  for(let i = 0 ; i < spans.length ; i++){
        let red = Math.round(  Math.random() *255 )
        let blue = Math.round(  Math.random() *255 )
        let green = Math.round(  Math.random() *255 )
    
        spans.eq(i).css("backgroundColor" , `rgb(${red} , ${blue} , ${green})`)
  }

     
  

 