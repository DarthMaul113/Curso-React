let productos = [
    { id: '1' ,categoria: 'poleras', name: "producto 1",   price: 37.990, foto:'https://falabella.scene7.com/is/image/Falabella/116014177_1?wid=1500&hei=1500&qlt=70' },
    { id: '2' ,categoria: 'poleras', name: "producto 2", price: 27.990, foto:'https://falabella.scene7.com/is/image/Falabella/14849092_1?wid=1500&hei=1500&qlt=70' },
    { id: '3' ,categoria: 'poleras', name: "producto 3",    price: 42.990, foto:'https://falabella.scene7.com/is/image/Falabella/15827541_1?wid=1500&hei=1500&qlt=70' },
    { id: '4' ,categoria: 'zapatillas', name: "producto 4", price: 55.900, foto:'https://falabella.scene7.com/is/image/Falabella/50174033_1?wid=1500&hei=1500&qlt=70' },
    { id: '5' ,categoria: 'zapatillas', name: "producto 5", price: 56.990, foto:'https://falabella.scene7.com/is/image/Falabella/50098933_1?wid=1500&hei=1500&qlt=70' },
    { id: '6' ,categoria: 'zapatillas', name: "producto 6", price: 49.990, foto:'https://falabella.scene7.com/is/image/Falabella/50173945_3?wid=1500&hei=1500&qlt=70' },
    { id: '7' ,categoria: 'zapatillas', name: "producto 7", price: 65.990, foto:'https://falabella.scene7.com/is/image/Falabella/gsc_112993325_486217_1?wid=1500&hei=1500&qlt=70' }
  ]


export const prodFetch = () => new Promise( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(productos)
        }, 2000)
    } else {
        rej('Algo salió mal')

    }
})