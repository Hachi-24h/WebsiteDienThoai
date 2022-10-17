import myJSON from '../js/data/data.json' assert {type: 'json'};

    var data  =myJSON.furniture;
    const url = window.location.href.toString()
    
    const strs = url.split('?id=');
    const id = strs.at(-1);
    var idInt = parseInt(id); 
    console.log(idInt);
    data.forEach(item=>{
        if(item.id == idInt)
        {
        document.querySelector("article").innerHTML +=`
        <!-- CART SEARCH  -->
        <div id="cart-search" class="container-fluid  p-3 d-flex justify-content-center w-80 "  >
            <div class="row w-25 d-flex aside-cart  ">
                    <h3 class="fw-bold yellow-text mt-3">
                    Group Products </h3>
                    <div class="">
                    <li class="fs-5 mt-4 text-grey mx-3">
                      <a class="text-dark col-12" href="./classic.html">Classic</a>
                    </li>  
                    <li class="fs-5 mt-4 text-grey mx-3">
                      <a class="text-dark" href="./luxurious.html">Luxurious</a>
                    </li>   
                    <li class="fs-5 mt-4 text-grey mx-3">
                      <a class="text-dark" href="./royal.html">Royal</a>
                    </li>  

                    <h3 class="fw-bold yellow-text mt-5">
                    Contact Me </h3>
                        <li class="fs-5 mt-4 text-grey mx-3">
                        <a class="text-dark col-12" href="./classic.html">Facebook</a>
                         </li>  
                        <li class="fs-5 mt-4 text-grey mx-3">
                        <a class="text-dark" href="./luxurious.html">Intargram</a>
                        </li>   
                        <li class="fs-5 mt-4 text-grey mx-3">
                        <a class="text-dark" href="./royal.html">Website</a>
                        </li> 

                    </div>
            </div>
            <div class="row  w-75 py-5 bg-yellow-slow ">
                <!-- IMG ITEM -->
                <div class="col-md-6   mt-1">
                    <div class="d-flex flex-column">

                        <div class="row p-0" style="box-shadow: 5px 8px 5px rgb(178, 176, 176);">
                            <img  class="p-0 cart-img-height"src=${item.image} width="100%" alt=""></div>

                        <div class="img-element row d-flex p-0 mt-5">
                        <img class="col-md-3 " src=${item.image} width="25%" alt="">
                        <img  class="col-md-3" src=${item.image} width="25%" alt="">
                        <img class="col-md-3" src=${item.image} width="25%" alt="">
                        <img  class="col-md-3" src=${item.image} width="25%" alt="">
                        </div>
                        <div class="img-element row d-flex p-0 mt-5 text-center">
                            <h3 class="fw-bold">NEWS</h3>
                            <i class="mb-3">
                            Register to receive many attractive gifts from Lalalisa</i>
                            <form class="p-0">
                                <input class="px-4 py-2 rounded-2 border-dark text-dark" type="text" placeholder = "Enter your Email ">
                                <div class="btn btn-dark p-2">Register</div>
                            </form>
                        </div>

                    </div>
                </div>
                <!-- CONTENT CART -->
                <div class="col-md-5 container-fluid ">
                    
                    <div class="content-cart row  ">
                        <h5 class="">NEWS ARRIVALS/ <span class="fw-bold">TOPS</span></h5>
                        <h1 class="fw-bold ">${item.name}</h1>
                        <div>
                        <i class="fas fa-star yellow-text"></i>
                        <i class="fas fa-star yellow-text"></i>
                        <i class="fas fa-star yellow-text"></i>
                        <i class="fas fa-star yellow-text"></i>
                        <i class="fas fa-star yellow-text"></i>
                        <span>1132 Preview</span>
                        </div>
                        <p class="fs-1 text-danger fw-bold mt-3">${item.money}</p>
                        <ul>
                            <li> <span class="fw-bold">Category:</span> ${item.category}</li>
                            <li>
                            Providing customers with the most beautiful and new products is the joy of our Lalalisa shop. The above products are designed by famous designers. Lalalisa always keeps up with market trends, wish customers can choose beautiful products for themselves!</li>
                        </ul>
                        <div class="d-flex w-100 px-3">
                        <button class="btnAddShop btn btn-warning w-50 py-2">Add to sale</button>
                        </div>
                    </div>
                    <div class="comment-cart row  w-100 container-fluid px-3 mt-2">
                        <h5 class="my-2 p-0">
                        Product reviews</h5>
                   
                        <div class="row mt-1">
                            <div class="col-md-2 p-0">
                                <img src="${item.image}" width="100%" height="" alt="">
                            </div>
                            <div class="col-md-10">
                                <h4>${item.name}</h4>
                                <p>Category: ${item.category}</p>
                            </div>
                        </div>
                 
                        <div class="row mt-3">
                            <textarea rows="4" cols="50" class="text-start yellow-text border-warning" form="usrform">Enter text here...</textarea>
                            <button class="btn btn-warning w-100 mt-3">Comment</button>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>

        `}
    })
