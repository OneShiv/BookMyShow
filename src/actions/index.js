export const switchShow = (showId) =>{
  return {
    type:"SWITCH_SHOW",
    selectedShow:showId
  }
}

export const selectSeat = (key,id) =>{
  return{
    type:"SELECT_SEAT",
    key:key,
    id:id
  }
}

export const bookSeats = (newObject,subTotal,serviceTax,sbc,kkc)=>{
  return{
    type:"BOOK_SEAT",
    newObject,
    subTotal,
    serviceTax,
    sbc,
    kkc
  }
}