import reducer from "./reducers/bookmyshow";

test("Testing switch show functionality",()=>{
  expect(reducer({
    selectedShow:1
  },{type:"SWITCH_SHOW",selectedShow:2})).toMatchObject({
    selectedShow:2,
    currentlySelectedSeats:{"A":[],"B":[],"C":[]}
  });
});

test("Testing Book seat functionality",()=>{
  expect(reducer({
    "1":{
      "A":[{id:1,price:320,booked:false}]
    },
    selectedShow:1,
    totalSales:{
      revenue:0,
      serviceTax:0,
      sbc:0,
      kkc:0
    }
  },{
    type:"BOOK_SEAT",
    newObject:{
      "A":[{id:1,price:320,booked:true}]
    },
    subTotal:320,
    serviceTax:2,
    sbc:2,
    kkc:2
  })).toMatchObject({
    selectedShow:1,
    "1":{
      "A":[{id:1,price:320,booked:true}]
    },
    currentlySelectedSeats:{"A":[],"B":[],"C":[]},
    totalSales:{
      revenue:320,
      serviceTax:2,
      sbc:2,
      kkc:2
    }
  })
})

test("Testing Select seat functionality",()=>{
  expect(reducer({
    currentlySelectedSeats:{"A":[],"B":[],"C":[]}
  },{
    type:"SELECT_SEAT",
    key:"A",
    id:1
  })).toMatchObject({
    currentlySelectedSeats:{"A":[1],"B":[],"C":[]},
  })
})