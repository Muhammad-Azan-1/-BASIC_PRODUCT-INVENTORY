


type Product = {

    name : string
    price : number
    inventory : { Stock : number
        colorOptions : string[]}

}


let products : Product[] = [{

    
    name:" Circket BAT",
    price: 2000,
    inventory:{Stock:12,
        colorOptions:["Brown"]
    },
    
    
},{
    
name:"Foot Balls",
price: 1200,
inventory:{Stock:10,
    colorOptions:["White"]
},

},{


    name:"Batminton",
    price: 1000,
    inventory:{Stock:8,
        colorOptions:["Black"]
    },

},


]

/// working if the there is a requirment of a different color then what addition things should we have to add in the object

for(let i = 0; i < products.length; i++) {
    function ChangingColor(color: string, product:any){

            //FOR FIRST OBJECT

        if(product == products[0]){

            if(color === "red"){

             product.inventory.colorOptions.pop()
            product.inventory.colorOptions.push(color)
              product.price =  product.price + 500
              product.inventory.Stock = 5

            }else if(color === "blue"){

                product.inventory.colorOptions.pop()
                product.inventory.colorOptions.push(color)
                product.price = product.price - 1000
                product.inventory.Stock = 25

            }else if(color = product.inventory.colorOptions){

               
            }

         
            console.log(product)


        //FOR SECOND OBJECT

        }else if(product == products[1]){

          

            if(color === "red"){

            product.inventory.colorOptions.pop()
            product.inventory.colorOptions.push(color)
              product.price =  product.price + 300
              product.inventory.Stock = 30

            }else if(color === "blue"){

                product.inventory.colorOptions.pop()
                product.inventory.colorOptions.push(color)
                product.price = product.price - 300
                product.inventory.Stock = 45

            }else if(color = product.inventory.colorOptions){

                
            }

           
            console.log(product)


             //FOR THIRD OBJECT

         }else if(product == products[2]){

            if(color === "red"){

             product.inventory.colorOptions.pop()
             product.inventory.colorOptions.push(color)
              product.price =  product.price + 100
              product.inventory.Stock = 8

            }else if(color === "blue"){

                product.inventory.colorOptions.pop()
                product.inventory.colorOptions.push(color)
                product.price = product.price - 400
                product.inventory.Stock = 10

            }else if(color = product.inventory.colorOptions){

               
            }

            
            console.log(product)
        }
    

    }

    ChangingColor("red",products[i])
    

}






































// for(let i = 0; i < products.length; i++){

//     function getProduct(Color:string,){
    
//         if(products[i] == products[0]){
    
        
    
//     }
    
//     getProduct("Orange")
    
//     }
//     }