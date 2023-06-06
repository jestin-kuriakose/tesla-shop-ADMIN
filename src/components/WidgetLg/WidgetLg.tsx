import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./WidgetLg.scss"
import { orderData } from '../../dummyData';

const WidgetLg = () => {
    const Button = ({ type }: any) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      const [orders, setOrders] = useState<any[]>([])
    
      useEffect(()=> {
        const getOrders = async () => {
          try{
            setOrders(orderData)
            // const res = await axios.get("orders");
            // setOrders(res.data)
          } catch {}
        }
        getOrders()
      }, [])

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
        <tr className="widgetLgTr" key={order._id}>
          
            <td className="widgetLgUser" >
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order._id}</span>
          </td>
          <td className="widgetLgDate">{order.createdAt}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
          
        </tr>
        ))}
        
      </table>
    </div>
  )
}

export default WidgetLg