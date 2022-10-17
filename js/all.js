document.getElementById("header").innerHTML =`
<!-- Header start -->
      
<div class="nav-header row p-2 justify-content-around align-items-center w-100 p-0">

    <div class="col-2 logo-header">
          <a href="./index.html">
          <img src="./img/logo-website.jpg" alt="" width="100%" >
          </a>
    </div>

    <ul  class="menu col-8 d-flex text-center mt-4 p-0 m-0">
          
      <li>
        <a class="fs-4 text-dark mx-4 " href="./index.html">Home <span></span></a></li>
        
        <li class="position-relative menu-boss">
        <a class="fs-4 text-dark mx-4  active position-relative" aria-current="page" href="./product.html">Product<span></span></a>
         
           <ul class="px-0 py-4  menu-element1 position-absolute ">
           
            <li class="px-4 py-2 fs-5  text-start menu-element2 position-relative">
              <a class="text-dark" href="./classic.html">Classic</a>
                
            </li>

            <li class="px-4 py-2 fs-5  text-start menu-element2 position-relative">
              <a class="text-dark" href="./luxurious.html">Luxurious</a>
                
            </li>

            <li class="px-4 py-2 fs-5  text-start menu-element2 position-relative">
              <a class="text-dark" href="./royal.html">Royal</a>
            </li>


            </ul> 
      
          
          </li>
          <li class="position-relative menu-boss">
          <a class="fs-4 text-dark mx-4 " href="./news.html">News <span></span></a>
          </li>
          <li>
          <a class="fs-4 text-dark mx-4 " href="./aboutUs.html">About Us <span></span></a>
          </li>
    </ul>
    
      <div class="col-2 icon-header d-flex align-items-center justify-content-end mt-3 ">
        <div class="row p-3 d-flex w-100">
            
          <!-- Icon user  -->
            <div class="col-10 ">
              <button class="btn-login bg-white position-relative w-100 h-100">
                
                <a href="./signin.html"><i class="fas fa-user text-dark fs-1 my-1"></i></a>
              </button>
              
            </div>
          <!-- Icon shopping -->
            <div class="col-2 p-0">
              <a href="./paymentPage.html"><i class="fas fa-shopping-bag fs-1 my-1 text-dark"></i></a>
            </div>

        </div>
      </div>
    </div>

<!-- Header end -->
`
