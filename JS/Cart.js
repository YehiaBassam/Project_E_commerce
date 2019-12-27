let dataFromLocal = JSON.parse(localStorage.getItem('ShoppingCart'))


// loop for Objects
for (var key in dataFromLocal)
{
    let id = dataFromLocal[key].id
    let url = dataFromLocal[key].Url
    let name = dataFromLocal[key].Name
    let price = dataFromLocal[key].price
    // console.log(id);
    // console.log(url);
    // console.log(name);

    let img = document.getElementById('myimg')
    img.setAttribute('src',url)
    img.setAttribute('class','img-fluid')
    img.setAttribute('style','border:2px solid gray')


     document.getElementById('myname').innerHTML = name
     document.getElementById('myprice').innerHTML = price


    
    // let num = quantity.value
}

