
let bigdiv = document.createElement('DIV');
bigdiv.className="bigdiv";
document.body.appendChild(bigdiv);
let size= 7;
let allsize=size*size;
for (var i = 0; i < allsize; i++) {
    

let bigdiv=document.querySelector('.bigdiv');
let div= document.createElement('DIV');


if (i%2) {
    div.className='red';
    

}else
{
div.className="block";
}
bigdiv.appendChild(div);
};


