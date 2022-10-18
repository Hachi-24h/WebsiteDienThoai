document.getElementById("header").innerHTML =`
<!-- Header start -->
<div id="mobile-header"> 
<div class="collapse " id="navbarToggleExternalContent">
  <div class="bg-light  d-flex flex-column ">
    <a class="p-0 row" href="./index.html " >
    <img src="./img/logo.jpg" alt="" width="30%" >
    </a>
    
    <ul  class="  d-flex flex-column text-start ">
          
    <li><a class="fs-4 text-dark  " href="./index.html">Home <span></span></a></li>
      
      <li class="fs-4 text-dark ">
      <a class="fs-4 text-dark " aria-current="page" href="./product.html">Product<span></span></a></li>
      <li class="fs-4 text-dark  ">
      <a class="fs-4 text-dark " aria-current="page" href="./classic.html">Classic<span></span></a></li>
      <li class="fs-4 text-dark">
      <a class="fs-4 text-dark" href="./news.html">News <span></span></a></li>
      <li class="fs-4 text-dark">
      <a class="fs-4 text-dark" href="./aboutUs.html">About Us <span></span></a>
      </li>
  </ul>

  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

</div>

<div id="responsive-header" class="nav-header row p-2 justify-content-around align-items-center w-100 p-0">

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
