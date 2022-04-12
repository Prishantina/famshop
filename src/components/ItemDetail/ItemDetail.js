const products2 = [
    {
        id: 1,
        name: 'almohadon estrella',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/401/446/products/almohadon-estrella-31-47e21bff20bea11ca415877660664032-480-0.jpg',
        color:'gris',
        description:'tejido con hilo de algod{on hipoalargenico',
        price:'2500'
    },
    {
        id: 2,
        name: 'almohadon circular',
        color:'gris',
        img:'https://i.pinimg.com/originals/26/cf/d9/26cfd9b221f5d96ae80c0cd1a1138205.webp',
        description:'tejido con hilo de algod{on hipoalargenico',
        price:'2000'
    }
]



const getProductsById = (id) => {
    return  new Promise ((resolve, reject)=>{
        const ok = true;
        setTimeout(() => {
            if(ok) {
                resolve(products2.find(prod => prod.id === 1));
            } else {
                reject('error');
            }
    
        },2000);
    })
}
export default getProductsById;