 //<meta charset="UTF-8">

//<script>



let product = ['samsung','filips'];
 let price = ['2'];     
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

  
