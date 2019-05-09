let initialState={
  "1":{
    "A":[{id:1,booked:false,price:320},{id:2,booked:false,price:320},{id:3,booked:false,price:320},{id:4,booked:false,price:320},{id:5,booked:false,price:320},{id:6,booked:false,price:320},{id:7,booked:false,price:320},{id:8,booked:false,price:320},{id:9,booked:false,price:320}],
    "B":[{id:1,booked:false,price:280},{id:2,booked:false,price:280},{id:3,booked:false,price:280},{id:4,booked:false,price:280},{id:5,booked:false,price:280},{id:6,booked:false,price:280}],
    "C":[{id:2,booked:false,price:240},{id:3,booked:false,price:240},{id:4,booked:false,price:240},{id:5,booked:false,price:240},{id:6,booked:false,price:240},{id:7,booked:false,price:240}]
  },
  "2":{
    "A":[{id:1,booked:false,price:320},{id:2,booked:false,price:320},{id:3,booked:false,price:320},{id:4,booked:false,price:320},{id:5,booked:false,price:320},{id:6,booked:false,price:320},{id:7,booked:false,price:320}],
    "B":[{id:2,booked:false,price:280},{id:3,booked:false,price:280},{id:4,booked:false,price:280},{id:5,booked:false,price:280},{id:6,booked:false,price:280}],
    "C":[{id:1,booked:false,price:240},{id:2,booked:false,price:240},{id:3,booked:false,price:240},{id:4,booked:false,price:240},{id:5,booked:false,price:240},{id:6,booked:false,price:240},{id:7,booked:false,price:240}]
  },
  "3":{
    "A":[{id:1,booked:false,price:320},{id:2,booked:false,price:320},{id:3,booked:false,price:320},{id:4,booked:false,price:320},{id:5,booked:false,price:320}],
    "B":[{id:1,booked:false,price:280},{id:2,booked:false,price:280},{id:3,booked:false,price:280},{id:4,booked:false,price:280},{id:5,booked:false,price:280},{id:6,booked:false,price:280},{id:7,booked:false,price:280},{id:8,booked:false,price:280}],
    "C":[{id:1,booked:false,price:240},{id:2,booked:false,price:240},{id:3,booked:false,price:240},{id:4,booked:false,price:240},{id:5,booked:false,price:240},{id:6,booked:false,price:240},{id:7,booked:false,price:240},{id:8,booked:false,price:240},{id:9,booked:false,price:240}]
  },
  selectedShow:1,
  currentlySelectedSeats:{"A":[],"B":[],"C":[]},
  totalSales:{
    revenue:0,
    serviceTax:0,
    sbc:0,
    kkc:0
  }
};


const reducer = (state=initialState,action) =>{
  switch(action.type){
    case "SELECT_SEAT":
    return{
      ...state,
      currentlySelectedSeats:{
        ...state.currentlySelectedSeats,
        [action.key]:state.currentlySelectedSeats[action.key].concat(action.id)
      }
     }
    case "BOOK_SEAT":
    return{
      ...state,
      currentlySelectedSeats:{"A":[],"B":[],"C":[]},
      [state.selectedShow]:action.newObject,
      totalSales:{
        revenue:state.totalSales.revenue+action.subTotal,
        serviceTax:state.totalSales.serviceTax+action.serviceTax,
        sbc:state.totalSales.sbc+action.sbc,
        kkc:state.totalSales.kkc+action.kkc
      }
    }
    case "SWITCH_SHOW":
      return {
        ...state,
        selectedShow:action.selectedShow,
        currentlySelectedSeats:{"A":[],"B":[],"C":[]}
      };
    default :
    return state;
  }
}

export default reducer;