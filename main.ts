


type Product = {

    name : string
    price : number
    color_Selected:string
    inventory : { Stock : number
        colorOptions : string[]}

}


let products : Product[] = [{

    
    name:"Circket BAT",
    price: 2000,
    color_Selected:"Brown",
    inventory:{Stock:12,
        colorOptions:["Brown","red","blue",]
    },
    
    
},{
    
name:"Foot Balls",
price: 1200,
color_Selected:"White",
inventory:{Stock:10,
    colorOptions:["White","Black","Yellow"]
},

},{


    name:"Batminton",
    price: 1000,
    color_Selected:"Pink",
    inventory:{Stock:8,
        colorOptions:["Pink","Orange","Grey"]
    },

},


]

/// working if the there is a requirment of a different color then what addition things should we have to add in the object



    function ChangingColor(product:Product, color?:any){

        if(!product.inventory.colorOptions.includes(color)){

            console.log(`This color : ${color} is not available for ${product.name}`)
            return
        }

        
            //FOR FIRST OBJECT

        if(product.name === "Circket BAT"){

            if(color === "red"){

                product.color_Selected = "red";
              product.price =  product.price + 500
              product.inventory.Stock = 5

            }else if(color === "blue"){

                product.color_Selected = "blue";
                product.price = product.price - 1000
                product.inventory.Stock = 25

            }


        //FOR SECOND OBJECT

        }else if(product.name === "Foot Balls"){

          

            if(color === "Black"){

                product.color_Selected = "Black";
              product.price =  product.price + 300
              product.inventory.Stock = 30

            }else if(color === "Yellow"){

                product.color_Selected = "Yellow";           
                product.price = product.price - 300
                product.inventory.Stock = 45

            }
           



             //FOR THIRD OBJECT

         }else if(product.name === "Batminton"){

            if(color === "Orange"){

                product.color_Selected = "Orange";
              product.price =  product.price + 100
              product.inventory.Stock = 8

            }else if(color === "Grey"){

                product.color_Selected = "Grey";
                product.price = product.price - 400
                product.inventory.Stock = 10

            }
            
          
        }
    
        console.log(product)
    }
        for(let i = 0; i < products.length; i++) {

    
    ChangingColor(products[i],"Pink")


  
  
        }

























