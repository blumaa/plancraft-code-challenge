import React, { useEffect, useState } from 'react';
import './App.css';
import { TitleBlock } from './constants.js'
import { data } from './data'

function App() {
  const [ isLoading, setIsloading ] = useState(true)
  const [ orders, setOrders ] = useState<TitleBlock[]>([])

  useEffect(() => {
   if (isLoading) {
      setOrders(data)
      setIsloading(false)
    }
  }, [])

  if (!isLoading){
    return(
    <div>
        {orders.map(order=>{
          return <li key={order.id}>{order.orderNumber}
            <ul>{order.data.map(subOrder=>{
            return <li key={subOrder.id}>{subOrder.orderNumber}</li>
            }
            )}</ul>
          </li>
        })}
    </div>
    )
  }
  return (
    <div className="App">
     loading...  
    </div>
  );
}

export default App;
