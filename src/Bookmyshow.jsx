import React from "react";
import {app} from "./Bookmyshow.module.css";
import SeatingArragement from "./SeatingArragement";
import Billing from "./Billing";
import {switchShow,selectSeat,bookSeats} from "./actions/index";
import {connect} from "react-redux";

class Bookmyshow extends React.Component{
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id!== this.props.match.params.id){
    this.props.switchShow(this.props.match.params.id);
    }
  }

  selectedSeatHandler = (key,id) =>{
    this.props.seatHandler(key,id);
  }
  seatClickHandler = (key,id)=>{
    let seatArrangementObject = this.state[this.state.selectedShow];
    let seatsArray= seatArrangementObject[key];
    let newSeatsArray=seatsArray.map(seat =>{
      if(seat.id===id){
        return{
          ...seat,
          booked:true
        }
      }else{
        return seat;
      }
    });

    this.setState({
      [this.state.selectedShow]:{
        ...this.state[this.state.selectedShow],
        [key]:newSeatsArray
      }
    })
  }

  bookTicketHandler = (subTotal,serviceTax,sbc,kkc) =>{
    let seatObject=this.props.state[this.props.state.selectedShow];
    let newObject={};
    Object.keys(seatObject).map(key=>{
      let seatsArray = seatObject[key];
      if(this.props.state.currentlySelectedSeats[key].length >0){
        seatsArray=seatsArray.map(seat =>{
          if(this.props.state.currentlySelectedSeats[key].includes(seat.id)){
            return {
              ...seat,
              booked:true
            }
          }else{
            return seat;
          }
        });
        newObject[key]=seatsArray;
      }else{
        newObject[key]=seatsArray;
      }
    });
    this.props.bookSeatHandler(newObject,subTotal,serviceTax,sbc,kkc);
  }


  render(){
    console.log(this.props);
    return(
      <div className={app}>
        {this.props.state.selectedShow && <SeatingArragement arrangementObject = {this.props.state[this.props.state.selectedShow]} currentlySelectedSeats={this.props.state.currentlySelectedSeats} selectedSeatHandler={this.selectedSeatHandler}/>}
        {this.props.state.selectedShow && <Billing totalSales={this.props.state.totalSales} bookTicketHandler={this.bookTicketHandler} selectedSeats={this.props.state.currentlySelectedSeats}/>}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    state:state
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    switchShow: (showId)=>{ dispatch(switchShow(showId))},
    seatHandler : (key,id) => {dispatch(selectSeat(key,id))},
    bookSeatHandler : (newObject,subTotal,serviceTax,sbc,kkc)=>{dispatch(bookSeats(newObject,subTotal,serviceTax,sbc,kkc))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmyshow);