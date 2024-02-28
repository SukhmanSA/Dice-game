document.querySelector(".btn").addEventListener("click",function(){
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    
    let url1 = "images/" + "dice" + randomNum1 + ".png";
    let url2 = "images/" + "dice" + randomNum2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", url1);
    document.querySelector(".img2").setAttribute("src", url2);
    
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "It's a tie";
    }
    
})

// var randomNum1 = Math.floor(Math.random()*6)+1;
// var randomNum2 = Math.floor(Math.random()*6)+1;
// var url1 = "images/"+"dice"+randomNum1+".png";
// var url2 = "images/"+"dice"+randomNum2+".png";
// document.querySelector(".img1").setAttribute("src", url1);
// document.querySelector(".img2").setAttribute("src", url2);  

// if(randomNum1>randomNum2){
//     document.querySelector("h1").innerHTML="Player 1 wins"
// }else if(randomNum2>randomNum1){
//     document.querySelector("h1").innerHTML="Player 2 wins"       
// }else if(randomNum1 === randomNum2){
//     document.querySelector("h1").innerHTML="Its a tie"          
// }else{
//     alert("An Error Occured!")