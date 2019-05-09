import React from "react";
import {billstyle,billcontainer} from "./Billing.module.css";

const Billing = (props) =>{
  return(
    <div className={billcontainer}>
      <div className={billstyle}><h2>Billing Section</h2>{getBill(props.selectedSeats,props.bookTicketHandler)}</div>
      <div className={billstyle}><h2>Total sales</h2>
      <p>Revenue:{props.totalSales.revenue}</p>
      <p>Service Tax:{props.totalSales.serviceTax.toFixed(2)}</p>
      <p>Swach Bharat cess:{props.totalSales.sbc}</p>
      <p>Krishi Kalyan cess:{props.totalSales.kkc}</p>
      </div>
    </div>
  )
}

const getBill = (selectedSeats, bookTicketHandler) =>{
let subTotal = selectedSeats["A"].length*320+selectedSeats["B"].length*280+selectedSeats["C"].length*240;
    let serviceTax= subTotal * 0.14;
    let sbc = subTotal * 0.05;
    let kkc = subTotal * 0.05;
    serviceTax=parseFloat(serviceTax);
    let total = subTotal + serviceTax + sbc + kkc;
    return(
      <div>
        <p>Subtotal:{subTotal}</p>
        <p>service tax:{serviceTax.toFixed(2)}</p>
        <p>Swach Bharat cess:{sbc}</p>
        <p>Krishi Kalyan cess:{kkc}</p>
        <p>Total: {total}</p>
        <div>
          <button onClick={()=>bookTicketHandler(subTotal,serviceTax,sbc,kkc)}>Book Tickets</button>
        </div>
      </div>
    );
}



export default Billing;