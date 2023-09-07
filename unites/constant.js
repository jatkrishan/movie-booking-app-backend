const releaseStatus = {
    realsed: "RELEASED",
    blocked: "BLOCKED",
    unrelesed: "UNRELESED"

}


const userType = {
   customer: "CUSTOMER",
   admin: "ADMIN"
  
},

   userStatus = {
       approved: "APPROVED",
       rejected: "REJECTED",
       pending:  "PENDING"
   },
    
   bookingStatus = {
      completed: "COMPLETED",
      cancle: "CANCLE",
      inProgress: "IN_PROGRESS",
      expired: 'EXPIREED',
   },
  price = {
    ticketPrice: 250
  }




 const contents = {
    releaseStatus: releaseStatus,
    userType : userType ,
    userStatus: userStatus,
    price: price,
    bookingStatus: bookingStatus

 }

module.exports = contents;