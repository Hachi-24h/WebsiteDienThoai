import myJSON from './data.json' assert {type: 'json'};
var data  =myJSON.furniture;

var list_item = [];
var add_Cart = document.querySelector("#add-cart");
var name_item = [];
var dem = 0;
function addListCart(data,length){
data.forEach(item =>{
    name_item.push(item.name);
    if(dem  < length)
    add_Cart.innerHTML += `
    <!-- Cart item -->
                        <div id="${item.id}" class="Cart col-md-2 my-5  text-white mt-3" style="background:white" >
                            <div class="data-cart border-2 border-warning  d-flex align-content-between flex-column" >
                                <div class="img-data-cart w-80  h-80 " style="height: 250px;">
                                    <img class="w-100 h-100" src="${item.image}" alt="">
                                </div>
                                <div class="title-data-cart py-1 text-dark fw-bold">${item.name}</div>
                                <div class="category-data-cart text-success fw-bold">${item.money}</div>
                                <div class="btn-click-search btn btn-dark w-90">Learn More<div>
                            </div>
                            
                        </div>
    `
    dem ++;
})
}
addListCart(data,18);

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

