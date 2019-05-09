let products=[
{name:'samsung',price:350},
{name:'Nexi',price:30}
];
let Basket ={
goodlist:[],
countTotalPrice(){
  let totalPrice=0;
  for (var i = 0; i < this.goodlist.length; i++) {
    totalPrice+=this.goodlist[i].count*this.goodlist[i].price;
  }
      document.write('Итог:'+ totalPrice +'R')
},

        countTotalNumber()
        {
          let sumCount=0;
          for(let i=0; i < this.goodlist.length; i++){
            sumCount+=this.goodlist[i].count;
          }
          document.write('Товаров в карзине:'+sumCount);
        },
        /*putProduct(prod,count){
          let idx =this.goodlist.findIndex(predicate function(elem){
            return elem.name===prod.name;
          });
          if (ind === -1) {
              this.goodlist.push(Object.assign(target{},prod));
              this.goodlist[this.goodlist.length-1].count=count;
            }else{
              this.goodlist[idx].count+=count;
            }
          }
        };
         for(let i=0; i<products.length; i+=2)
           {
               Basket.putProduct(products[i],count:1);
           }
            for(let i=0; i<products.length; i+=2)
           {
               Basket.putProduct(products[i],count:2);
           }*/
              // Basket.countTotalNumber();
               Basket.countTotalPrice();
             //  Basket.putProduct();






/*let product = [''];
 let price = [''];     
  let a = prompt('Введите товар', '');
 
   product.push(a);
   let b = prompt('Введите цену','');
    price.push(b);    
          
      
function priceSum(arr) {
    let sum = 0;
    if (price.length) {
        sum = price.reduce((a, b) => {
            return (parseFloat(a) || 0) + (parseFloat(b) || 0);
        });
    } else {
        sum = 0;
    }
    return sum;
}
        const s = priceSum(price);
       let msg="basket nul";
    if (s || product.length==0 )
     {        product.length
            s
             
     }else{
           msg
          }
//alert('Сумма к оплате:' + '---Пакупки--' + product.length  + '---Цена--' + s)

*/
