function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}
var x=0;
const firstBox=document.getElementById("drop").innerHTML
function toolbox(){
  const box = document.getElementById("drop");
  const number= document.getElementById("number")
  if(box.innerHTML!=firstBox && number.innerHTML!=x)
    x+=1;
    number.innerHTML=x;
    box.innerHTML=firstBox
}
setInterval(toolbox,1000)

var isOpen = false;

//here are going to make the pop up
function openPopup() {
  isOpen=!isOpen;
  document.getElementById("myForm").style.display = "block";
}

function closePopup() {
  isOpen=!isOpen;
  document.getElementById("myForm").style.display = "none";
}
function openSecondPopup(){
  document.getElementById("myForm1").style.display = "block";
}
function closeSecondPopup(){
  document.getElementById("myForm1").style.display = "none";
}
var toCompare=[]
$(".post").click(function(){
  if(isOpen){
    const second = $(this).html();
    toCompare.push(second)
    $(this).css("background-color", "green");
    document.getElementById("myForm1").innerHTML="<div class='container'><h1>"+second+"</h1><button onclick='closeSecondPopup()'>close</button></div>";
    openSecondPopup()
    //get the elements of the first and second one and compare them
    const first = $("#myForm").attr("innerHTML")
    const content=document.getElementById("div")
    return;
  }
    openPopup()
    const first = $(this).html();
    toCompare.push(first)
    $(this).css("background-color", "green");
    document.getElementById("myForm").innerHTML="<div class='container'><h1>"+first+"</h1><button onclick='closePopup()'>close</button></div>";
});
$("#compare").click(function(){
  document.getElementById("myForm").innerHTML=toCompare[0]
  document.getElementById("myForm1").innerHTML=toCompare[1]
  document.getElementById("comparaison").style.display="inline-block"
});
