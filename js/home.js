
import myJSON from './data.json' assert {type: 'json'};
var data  =myJSON.furniture;
var list_name = [];
//Get List_name_item
console.log("Hello world")
data.forEach(item =>{
    list_name.push(item.name);
})
// Animation Reveal
function reveal(){
    var reaveals = document.querySelectorAll('.reveal');
    
    for( var i = 0; i < reaveals.length; i++ ){
        var winHeight = window.innerHeight;
        var elementTop = reaveals[i].getBoundingClientRect().top;
        var elementVisible = 120;
        console.log(elementTop);
        if(elementTop < winHeight - elementVisible){
            reaveals[i].classList.add("active");
    
        }else{
            reaveals[i].classList.remove("active");
    
        }
    }
} 
window.addEventListener("scroll",reveal);

// Icon show Login
var btn_login = document.querySelector(".btn-login");
var popup_login = document.querySelector(".popup-login");
btn_login.addEventListener('click', ()=>{
    popup_login.style.display = 'block';
})
btn_login.addEventListener('blur', ()=>{
    if( popup_login.style.display ==='block')
    popup_login.style.display = 'none';
})
// Search Item
var btn_Search = document.getElementById("search-event");
var data_Search =  document.getElementById("get-value-search");
console.log(btn_Search)
console.log(data_Search)
btn_Search.addEventListener('click',()=>{
    console.log(list_name)
    var value = data_Search.value;
    list_name.forEach(name =>{

                data.map(item =>{
                        if(item.name === value)
                        {
                            console.log("yess");
                            window.location=`./cart.html?id=${item.id}`;
                        }
                })
            
    })
})