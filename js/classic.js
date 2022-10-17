import myJSON from './data.json' assert {type: 'json'};
var data  =myJSON.furniture;

var list_item = [];
var add_Cart = document.querySelector("#add-cart");
var name_item = [];

function addListCart(data){
data.forEach(item =>{

    name_item.push(item.name);
    if(item.category  === "classic")
    add_Cart.innerHTML += `
    <!-- Cart item -->
                        <div id="${item.id}" class="Cart col-md-2  text-white mt-3" >
                            <div class="data-cart bg-dark  d-flex align-content-between flex-column" >
                                <div class="img-data-cart w-80  h-80 " style="height: 250px;">
                                    <img class="w-100 h-100" src="${item.image}" alt="">
                                </div>
                                <div class="title-data-cart py-1 ">${item.name}</div>
                                <div class="category-data-cart text-warning fw-bold">${item.money}</div>
                                <div class="btn-click-search btn btn-outline-warning w-90">Learn More<div>
                            </div>
                            
                        </div>
    `
    
})
}
addListCart(data);
//Cart Item
var btnSearchList = document.querySelectorAll(".btn-click-search");
console.log(btnSearchList);
var idSearchCart ;
btnSearchList.forEach(button=>{
    button.addEventListener('click',e=>{
        var  thisButton = e.target;
        var  parentButton = thisButton.parentElement.parentElement;
        var getIndex = parseInt(parentButton.id);
        console.log(thisButton);
        console.log(parentButton);
        window.location=`./cart.html?id=${getIndex}`;
    })
})
// Search item

console.log(name_item)