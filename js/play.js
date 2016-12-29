$(function(){

function multiplier(elem){
  //var elem = document.getElementByID("mult");
  if (elem.value==="x2")
    elem.value="x3";
  else
    elem.value="x2";
}
function sendEmail(){
    return prompt("To recieve more updates please enter your email","Enter your email address here");
}
function myfunction2(){
    var f = $("#thiscard").data("flip-model");
    if (f.isFlipped){
    alert("is flipped");
    }
    else{
    alert("is not flipped");
}

}
$("#home").on('touchstart', function(){
  window.location.href="http://ics.uci.edu/~jlyuen/index.html";
});
$("#home").on('click', function(){
  window.location.href="http://ics.uci.edu/~jlyuen/index.html";
});
$("#contact").on('click', function(){
  sendEmail();
});
  $("#tools").on('touchstart', function(){
    window.location.href="http://ics.uci.edu/~jlyuen/class_examiner.html";
  });
  $("#tools").on('click', function(){
    window.location.href="http://ics.uci.edu/~jlyuen/class_examiner.html";
  });
  $("#research").on('touchstart', function(){
    window.location.href="http://ics.uci.edu/~jlyuen/research_findings.html";
  });
  $("#research").on('click', function(){
    window.location.href="http://ics.uci.edu/~jlyuen/research_findings.html";
  });
function scard(){
  console.log("ok");
  alert("ok");
  if (document.getElementById("#frontcard").style.display=="none"){
    $("#backcard").hide();
    $("#frontcard").show();
  }
  else if (document.getElementById("#backcard").style.display=="none"){
    $("#frontcard").hide();
    $("#backcard").show();
  }
}
function myfunction(ide){
  alert(ide+" clicked!!");
  $("full").hide();
  if (ide=="partsButton"){
    showParts();
  }
  else if (ide=="prebuiltButton"){
    showPreBuilt();
  }

}

function hide_this(hidingthis){
      for ( i =0;i<hidingthis.length;i++){
          $("#"+hidingthis[i]).addClass('hidethis');
      }
}
function show_this(hidingthis){
      for (i =0;i<hidingthis.length;i++){
          $("#"+hidingthis[i]).removeClass('hidethis');
      }
}
function returnToOG(current){
  $("#"+current).css("left",0);
  $("#"+current).css("top",0);
}

function opentab(e){
  console.log(e.value);
  var part = document.getElementById("subButton");
  // var build = document.getElementById("jprebuilt");
  var mobo = document.getElementById("jpart");

  var rView = document.getElementById("ramView");
  var pView = document.getElementById("preView");
  var procView = document.getElementById("processorView");
  var mobView = document.getElementById("moboView");
  switch (e.value){
    case "Prebuilt":
      returnToOG("preView");
      hide_this(["moboView","processorView", "subButton","ramView"]);
      // rView.style.display='none';
      show_this(["preView"]);
      // pView.style.display='block';
      // build.style.display = 'inline';
      // mobo.style.display = 'none';
      // part.style.display = 'none';
      break;
    case "Parts":
        if ($("#subButton").hasClass('hidethis')){
          show_this(["subButton"]);
        }
        else{
          hide_this(["subButton"]);

        }
        break;
      case "Processors":
        show_this(["processorView"]);
        hide_this(["preView","moboView","ramView"]);
        break;
    case "Motherboards":
      show_this(["moboView"]);
      hide_this(["preView","processorView","ramView"]);
      break;
    case "Memory":
      show_this(["ramView"]);
      hide_this(["preView","processorView","moboView"]);

      break;

    default:
      console.log("no value found");
      break;
  }
}
    });
