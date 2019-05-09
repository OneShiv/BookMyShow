import React from "react";
import {seatstyle} from "./SeatingArrangement.module.css";

class SeatingArrangement extends React.Component{
  render(){
    let DOMEl=Object.keys(this.props.arrangementObject).map(key=>{
      let el=this.props.arrangementObject[key].map(seat=>{
        let seatStatus = seat.booked;
        if(seatStatus===true){
          seatStatus="#ccc"
        }else if(seatStatus===false){
          if(this.props.currentlySelectedSeats[key].includes(seat.id)){
            seatStatus="pink"
          }
        }else{
          seatStatus="white"
        }
        return(<div className={seatstyle} title={seat.price} key={key+seat.id} onClick={()=>this.props.selectedSeatHandler(key,seat.id)} style={{"backgroundColor":seatStatus,"cursor":seat.booked?"auto":"pointer"}}>{key}{seat.id}</div>);
      });
      el.push(<br/>);
      return el;
    });
    return(
      <div>
        {DOMEl}
      </div>
    );
  }
}


export default SeatingArrangement;