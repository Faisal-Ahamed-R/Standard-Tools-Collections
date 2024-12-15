var ProductCollections=document.querySelectorAll("h3")
var ImageContainer=document.querySelector(".product_source")
console.log(ImageContainer)
var Divs=ImageContainer.querySelectorAll("div")
var containers=document.querySelector(".product_one")
var SearchBar=document.getElementById("search")
console.log(ProductCollections)
SearchBar.addEventListener("keyup",function(){
    var ElementValue=event.target.value.toUpperCase();
    for(let count=0;count<ProductCollections.length;count=count+1)
    {
        var productName = Divs[count].querySelector("h3").textContent;

        if(productName.toUpperCase().indexOf(ElementValue)<0)
        {
            Divs[count].style.display="none"
        }
        else{
            Divs[count].style.display="block"
        }
    }
})