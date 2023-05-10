document.addEventListener('DOMContentLoaded', function() {
    let message =document.getElementById('text').innerText;
    let array =message.split(' ');
    for(let i=0;i<array.length;i++){
    if(array[i].length>8){
    array[i] = `<span style="background: yellow">${array[i]}</span>`}
    }
    document.getElementById('text').innerHTML=array.join(' ');  
});
let count=0
let message =document.getElementById('text').innerText;
let array=message.split(' ')
for (let i = 0; i < array.length; i++){
    if(array[i]){
    count++
    }
}
let counter=document.getElementById("count");
counter.innerText=count


//create source link.
let edit =document.getElementById('edit')
let source=document.createElement('a');
source.innerHTML=`<a href=https://www.google.com/>Source</a>`
source.id='link';
source.setAttribute('href','')
edit.appendChild(source);



// Split each new sentence on to a separate line
let newText = document.createElement('div');
document.body.appendChild(newText);
let newDivided = document.getElementById('text').innerText;
let sentences = newDivided.split(".");
sentences = sentences.filter(Boolean); // remove empty elements
newText.innerHTML = sentences.join('.<br>') + '.'; // add period at the end
;
