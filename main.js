//get total 
let price = document.getElementById("price")
let tbody =document.querySelector("#tbody");
let title = document.getElementById("title");
let category = document.getElementById("category");
let  create = document.querySelector("#create");
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let mode="create";
let dt = document.querySelector(".deleteAll");
let ele;


let arrpro =[];
if(localStorage.getItem("product")){
    arrpro=JSON.parse(localStorage.getItem("product"))

}




create.onclick = function(){
    let product={
        title : title.value.toLowerCase(),
        price :price.value,
        taxes: taxes.value,
        ads : ads.value,
        discount : discount.value,
        count : count.value,
        category : category.value.toLowerCase(),
        total:total.innerHTML,
    }
if(mode==="create"){
    if (product.count > 1){
        for(let i=0 ; i < product.count ;i++ ){
            
            arrpro.push(product);        
        }
    }else{
        arrpro.push(product);
        

    }
    
}else{
    arrpro[ele]=product;
    mode="create"
    create.innerHTML="create"

    
}
    

    localStorage.setItem("product",JSON.stringify(arrpro))
    
    remove()
    read()
    dt.style.display = "block"

    
}


 //read 

 function read(){
    let items="";

    for(let i=0;i<arrpro.length;i++){
        items+=`
         <tr>
        <td>${i+1}</td>
        <td>${arrpro[i].title.toLowerCase()}</td>
        <td>${arrpro[i].price}</td>
        <td>${arrpro[i].taxes}</td>
        <td>${arrpro[i].ads}</td>
        <td>${arrpro[i].discount}</td>
        <td>${arrpro[i].total}</td>
        <td>${arrpro[i].category.toLowerCase()}</td>
        <td><button onclick="update(${i})" id="update">update</button></td>
        <td><button onclick="remover(${i})" id="delete">delete</button></td>
        
    </tr>
    `
    tbody.innerHTML=items;
    }
 }

 read()
 
function remove(){
        title.value=""
        price.value=""
        taxes.value=""
          ads.value="" 
     discount.value=""
     category.value=""
        count.value=""
        total.innerHTML=""
}
function remover(i){
arrpro.splice(i,1);
localStorage.product = JSON.stringify(arrpro);
read()

}



dt.onclick = function(){
    tbody.innerHTML="";
    localStorage.removeItem("product")
    dt.style.display = "none"
    
    arrpro=[]
}
function gettotal() {
    if(price.value){
        let sumtotal = (+price.value + +taxes.value + +ads.value)- +discount.value
        total.innerHTML = sumtotal
        total.style.backgroundColor = "green"
    }else{
        total.innerHTML = ""
        total.style.backgroundColor = " #a30c0c"

    }
}


// update

 function update(i){
    title.value = arrpro[i].title
    price.value = arrpro[i].price
    taxes.value = arrpro[i].taxes
    ads.value = arrpro[i].ads
    discount.value = arrpro[i].discount
    category.value = arrpro[i].category
    total.innerHTML = arrpro[i].total
    mode="update"
 create.innerHTML="update"
ele = i

scroll({
    top:0,
    behavior:"smooth"
})


}











//search
let searchMood = "title";
let searchField = document.getElementById("search")

function getsearchMood(id){

    if(id == "search by title"){
        searchMood = "title";
        searchField.placeholder="Search By Title"   
    }else{
        searchMood = "category";
        searchField.placeholder="Search By Category"
    }

    searchField.focus(); 
    read()
}


function searchData(value){
    let items="";
    if(searchMood == "title"){
        for(let i=0;i<arrpro.length;i++){
            if(arrpro[i].title.includes(value.toLowerCase())){
                items+=`
         <tr>
        <td>${i+1}</td>
        <td>${arrpro[i].title}</td>
        <td>${arrpro[i].price}</td>
        <td>${arrpro[i].taxes}</td>
        <td>${arrpro[i].ads}</td>
        <td>${arrpro[i].discount}</td>
        <td>${arrpro[i].total}</td>
        <td>${arrpro[i].category}</td>
        <td><button onclick="update(${i})" id="update">update</button></td>
        <td><button onclick="remover(${i})" id="delete">delete</button></td>
        
    </tr>
    `
            }
        }
    }else{
        for(let i=0;i<arrpro.length;i++){
            if(arrpro[i].category.includes(value.toLowerCase())){
                items+=`
         <tr>
        <td>${i+1}</td>
        <td>${arrpro[i].title}</td>
        <td>${arrpro[i].price}</td>
        <td>${arrpro[i].taxes}</td>
        <td>${arrpro[i].ads}</td>
        <td>${arrpro[i].discount}</td>
        <td>${arrpro[i].total}</td>
        <td>${arrpro[i].category}</td>
        <td><button onclick="update(${i})" id="update">update</button></td>
        <td><button onclick="remover(${i})" id="delete">delete</button></td>
        
    </tr>
    `
            }
        }
    }
    tbody.innerHTML=items;
}













































































//let arrpro
//     if(localStorage.getItem("product")){
//         arrpro  = JSON.parse(localStorage.getItem("product"))
//     }else{
//         arrpro =[]
//     }
    


// create.onclick = function(){
//     let newpro = {
//         title:title.value,
//         price:price.value,
//         taxes:taxes.value,
//         ads:ads.value,
//         discount:discount.value,
//         total:total.innerHTML,
//         count:count.value,
//         category:category.value,
        
//     }  
//     arrpro.push(newpro)
//     localStorage.setItem("product", JSON.stringify(arrpro) )
//     clear()
//     readdata()
// }






// function clear(){
//       title.value="";
//       price.value="";
//       taxes.value="";
//         ads.value="";
//    discount.value="";
//   total.innerHTML="";
//       count.value="";
//       category.value="";
// }



// function readdata(){
//     let table =""
//     for(let i=0;i<arrpro.length;i++){
//         table +=`
//          <tr>
//         <td>${i+1}</td>
//         <td>${arrpro[i].title}</td>
//         <td>${arrpro[i].price}</td>
//         <td>${arrpro[i].taxes}</td>
//         <td>${arrpro[i].ads}</td>
//         <td>${arrpro[i].discount}</td>
//         <td>${arrpro[i].total}</td>
//         <td>${arrpro[i].category}</td>
//         <td><button id="update">update</button></td>
//         <td><button id="delete" onclick="remove(${i})">delete</button></td>
        
//     </tr> 
//         `
//         tbody.innerHTML=table
//     }
    
// }

// readdata()

// function remove(i){
//     arrpro.splice(i,1)
//     localStorage.product = JSON.stringify(arrpro)
//     readdata()
// }
