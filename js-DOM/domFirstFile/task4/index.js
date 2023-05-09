let name = ["ahmad", "majd", "mohammad", "yasmmen"];
let scores = [50, 60, 70, 80];
let maxName = name[0];
let maxValue = scores[0];


let Name = document.getElementById("name");
let Score = document.getElementById("score");
let avg ;

let addToArray=document.getElementById("addToArray");
addToArray.addEventListener("click",function(){
    if(Score.value!==""&&parseInt(Score.value)<=100&&Name.value!==""){
        name.push(Name.value)
        Name.value=""
        scores.push(parseInt(Score.value))
        Score.value=""
        }
        else{
            alert("you must enter a name and score")
        }
})
let displayResult = document.getElementById("displayResult");
function displayResult1() {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    }
    avg = sum / scores.length;
    for (let i = 0; i < scores.length; i++) {
    if (maxValue < scores[i]) {
        maxValue = scores[i];
        maxName = name[i];
    }
    console.log("object");
    }
}
displayResult.addEventListener("click", function () {
displayResult1()
let divResult = document.getElementById("average");
divResult.appendChild(document.createTextNode("THE AVERGE=" + avg));
let divScore=document.getElementById("highScore");
divScore.appendChild(document.createTextNode("The high score is "+maxValue));

});
let table =document.createElement('table')
function displayScores1(){
    table.innerHTML=""
for(let i=0;i<name.length;i++){
    table.innerHTML+="<tr><td><h2>"+name[i]+"</h2></td><td><h2>"+scores[i]+"</h2></td></tr>"
}
}

let displayScores=document.getElementById('displayScores')

displayScores.addEventListener('click',function(){
    displayScores1()
    let arraryElement=document.getElementById("arraryElement")
    arraryElement.appendChild(( table))
})