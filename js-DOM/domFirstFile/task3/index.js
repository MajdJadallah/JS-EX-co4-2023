let addItem=document.getElementById('addItem');
let input=document.getElementById('input');
let listContainer=document.getElementById('listContainer');
let shoppingArray =[];
addItem.addEventListener("click",function(){
    if(input.value!==""){
        shoppingArray.push(input.value);
        input.value="";
        let shoppingList=document.createElement('div');
        shoppingList.className='item';
        shoppingList.innerHTML = shoppingArray[shoppingArray.length - 1]+'<button class="delete-btn">Delete</button>' ;
        listContainer.appendChild(shoppingList);
        let deleteButtons = document.querySelectorAll('.delete-btn');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click",function(event){
            event.target.parentNode.remove();
            });
        }
    }
});
