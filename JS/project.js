let row = document.getElementById('all')
// let arr = []
// let cart = { }



if (localStorage.getItem("ShoppingCart")==null)
    {
        localStorage.setItem('ShoppingCart',JSON.stringify({})) ;
    }

// else
//     {
//      cart = JSON.parse(localStorage.getItem("ShoppingCart"))
//      get_Data()   
//     } 

let get_Data =  ( ) => {
    let xhr = new XMLHttpRequest();
    let Method = 'GET'
    let Url = 'https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json'
    xhr.open( Method , Url );
    xhr.send();
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = () => {
        if(xhr.status == 200){
            let RES = JSON.parse(xhr.response);
            let MYDATA = RES.ProductCollection ;
            
            Display(MYDATA);
        }
    }
}



get_Data()

function Display (data)
{    
     for (let i=0 ; i<data.length ; i++ )
     {
        
        // Create item As div
        let item = document.createElement('div')
        item.classList.add('col-md-4','btn','border-secondary','d-flex','flex-column')

        //create Name 
        let head = document.createElement('div')
        let name = document.createElement('h2')
        name.innerHTML = data[i].Name
        head.classList.add('pb-5','pt-2','bg-success','text-dark')
        $(head).append(name)
        $(item).append(head)

         //create img 
         let imgdiv = document.createElement('div')
         let myimg = document.createElement('img')
         myimg.setAttribute('src',data[i].ProductPicUrl)
         myimg.setAttribute('class','img-fluid')
         $(imgdiv).append(myimg)
         $(item).append(imgdiv)

        //create Price & addCart
        let footer = document.createElement('div')
        let price = document.createElement('h3')
        let icon = document.createElement('img')
        let numCart = document.createElement('div')
        let addcart = document.createElement('button')
        let quantity = document.createElement('input')
        // addcart.setAttribute('id','mycart')
        quantity.setAttribute('placeholder','quantity')
        quantity.setAttribute('value','')
        quantity.setAttribute('placeholder','0')
        quantity.setAttribute('min','0')
        quantity.setAttribute('max','100')
        quantity.setAttribute('type','number')
        quantity.setAttribute('class','w-50')
        addcart.setAttribute('class','btn-danger')
        icon.setAttribute('src','iconfinder_ecommerce-28_4707193.png')
        price.classList.add('text-primary')
        // console.log(typeof(data[i].Price))
        price.innerHTML = data[i].Price + "  " + data[i].CurrencyCode
        $(addcart).append(icon)
        $(numCart).append(quantity)
        $(numCart).append(addcart)
        $(footer).append(price)
        $(footer).append(numCart)
        footer.classList.add('d-flex','justify-content-around','pt-5','pb-2','mt-auto','bg-warning')
        $(item).append(footer)

        $(row).append(item)
        $('body').append(row)


        addcart.addEventListener('click',function(){
            let id = data[i].ProductId
            let url = data[i].ProductPicUrl
            let name = data[i].Name
            let price = data[i].Price
            let num = quantity.value


            //https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable
            cart = JSON.parse(localStorage.getItem('ShoppingCart'))
            cart[id] =
            {
            id:id,
            quantity: num,
            Name:name,
            Url:url,
            Price:price
            }
            // arr.push(obj)
            // console.log(arr)
            localStorage.setItem('ShoppingCart',JSON.stringify(cart))

        })
        

     };
}