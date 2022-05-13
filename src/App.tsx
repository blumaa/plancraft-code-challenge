import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextBlock, TitleBlock } from './constants.js'
import { data } from './data'
import _ from 'lodash'

interface Person {
  name: string,
  job: string
}

function App() {
  const [ isLoading, setIsloading ] = useState(true)
  // const [ orders, setOrders ] = useState<{id: string, orderNumber: string, text: string, type: string, data: TextBlock[] }[]>([])
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
          return <li key={order.id}>{order.text}
            <ul>{order.data.map(subOrder=>{
              console.log('subOrder', subOrder)
            return <li>{subOrder.text}</li>
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
