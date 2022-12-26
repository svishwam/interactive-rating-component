function inFunction(ele) {
    ele.style.backgroundColor = "hsl(214, 7%, 80%)";
    ele.style.color = "white";
    let btnValue = ele.innerText;
    console.log(btnValue);
    let res = document.getElementById("rating").innerHTML=ele.innerText;
}

let sub = document.querySelector(".btn");
sub.addEventListener('click',function(){
    document.querySelector(".div1").style.display ="none";
    document.querySelector(".div2").style.display ="block";

})