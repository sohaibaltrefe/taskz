import React from 'react'
import Prodacq from '../proddata/prodacq';

function Prodac() {
    const prod =[
        {id:1,title :'product one', desc :'this is product one',price:120}
        ,        {id:2,title :'product two', desc :'this is product two',price:200}
 ,        {id:3,title :'product three', desc :'this is product three',price:231}
 ,        {id:4,title :'product four', desc :'this is product four',price:42}
 ,        {id:5,title :'product five', desc :'this is product five',price:412}
 ,        {id:6,title :'product six', desc :'this is product six' ,price:123},


    ];
  return (
<div className='row'>


{
    prod.map((prod)=> {
{ return <Prodacq {...prod} key={prod.id}/> }

} ) }




</div>
)
}

export default Prodac