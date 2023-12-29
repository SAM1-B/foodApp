var cartBox= document.getElementById("cartBox");


// CART OPEN AND CLOSE
function cartOpen(){
    cartBox.style.display= "block";
}
function cartClose(){
    cartBox.style.display= "none";
}


// CART COUNT ONCLICK
var count =0;
function addToCartBtn1(num){

  count +=num;
  document.getElementById("cartCount").innerHTML= count;
  var price = 2000;
  let li= document.createElement("li");
  let list= `<div class="d-flex  foodSpread align-items-center"><img src="img/food5.png" alt=""  class="w-25">
    <p class="foodTitle" style="font-size:10px;">Fried rice and  <br> two chickens</p> <p class="foodPrice"># ${price}</p>
    </div>`;
  li.innerHTML=list;
    cartBox.appendChild(li);

    document.getElementById("totalAmount").innerHTML= price;
}

function addToCartBtn2(num){

    count +=num;
    document.getElementById("cartCount").innerHTML= count;
    var price = 1500;
    let li= document.createElement("li");
    let list= `<div class="d-flex  foodSpread align-items-center"><img src="img/food1.png" alt=""  class="w-25">
      <p class="foodTitle" style="font-size:10px;"> chickens</p> <p class="foodPrice"># ${price}</p>
      </div>`;
    li.innerHTML=list;
      cartBox.appendChild(li);

    document.getElementById("totalAmount").innerHTML= price;
  }







// TOTAL CALC

document.getElementById("totalAmount").innerHTML= price