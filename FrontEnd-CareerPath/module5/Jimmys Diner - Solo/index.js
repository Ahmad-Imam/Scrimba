import {menuArray} from "./data.js"

let totalPrice = 0;
let shoppingCart = []

const submitBtn = document.querySelector(".submit-btn");
const payBtn = document.querySelector(".submit-btn");
const completeOrder = document.querySelector(".complete");
const popupBox = document.querySelector(".popup");


function renderMenu(menuArray){
    const menuItem = document.querySelector(".menu");
    menuArray.forEach(function (menu){
          menuItem.innerHTML += `
          <div class="menu-item" ">
                   <p class="menu-icon">${menu.emoji}</p>
                    <div class="menu-info">
                    <p class="menu-title">${menu.name}</p>
                    <p class="menu-des">${menu.ingredients}</p>
                     <p class="menu-price">${menu.price}</p>
                </div>
               
               <i class="fa-solid fa-circle-plus menu-add" data-id="${menu.id}"></i>
                   </div>
                   <div class="line"></div>
    `
    })
}

function handleClick(){
            document.addEventListener("click",function (e){
            if(e.target.dataset.id){
                handleOrder(e.target.dataset.id)
            }
            else if(e.target.dataset.orderid){
                handleRemove(e.target.dataset.orderid);
            }else{
            //   popupBox.classList.add("hide");    
            }
             
            // console.log(e.target)   
        })
        submitBtn.addEventListener("click", function (e){
            e.preventDefault();
            console.log(e.target.id);
        })
        
         payBtn.addEventListener("click", function (e){
            e.preventDefault();
            console.log(e.target.id);
            popupBox.classList.remove("hide");
            renderCompleteOrder()
        })
        
        completeOrder.addEventListener("click", function (e){
            e.preventDefault();
            popupBox.classList.remove("hide");
            console.log(e.target.id);
            
        })
        
        
    }

function handleOrder(menuId){
    let orderFood = menuArray.filter(function(menu){
        return menu.id == menuId
    })[0]
    totalPrice += orderFood.price;
    shoppingCart.push(orderFood)
    renderOrder(shoppingCart,totalPrice);
}

function renderOrder(shoppingCart){
    const orderList = document.querySelector(".order");
    const totalOrderList = document.querySelector(".total");
    orderList.innerHTML =" "
    if(shoppingCart.length>0)
    {
        shoppingCart.forEach(function(orderFood){
                orderList.innerHTML += `
                
                <div class="order-list">
                    <p class="order-title">${orderFood.name}</p>
                    <p class="order-remove" data-orderid="${orderFood.id}">remove</p>
                    <p class="order-price">${orderFood.price}$</p>
                </div>
        `
     
        totalOrderList.innerHTML = ` 
                    <p class="total-order-title">Total Price</p>
                    
                    <p class="total-order-price">${totalPrice}</p>    
        `
        })
    } 
    else {
         totalOrderList.innerHTML = ` 
                    <p class="total-order-title">Total Price</p>
                    
                    <p class="total-order-price">0$</p>    
                `
    }
}

function handleRemove(orderId){
    let orderFood = shoppingCart.filter(function(cartItem){
        return cartItem.id == orderId
    })

    shoppingCart.forEach(function (cartItem,index){
        if(cartItem.id == orderId)
        {
            totalPrice -= cartItem.price;
            shoppingCart.splice(index,1)
        }
    })  
    renderOrder(shoppingCart)
}



function renderCompleteOrder(){
    popupBox.classList.add("hide");
    document.querySelector(".order").innerHTML = ``
    document.querySelector(".total").innerHTML = ``
    document.querySelector(".order-complete").classList.remove("hide-complete");
    // document.querySelector(".order-complete").innerHTML = `Thanks for ordering. Your food is one the way`
    console.log(document.querySelector(".order-complete").getAttribute("display"))
}


renderMenu(menuArray);
handleClick();
