const Payment = require("../model/payment.model.js");
const User = require("../model/user.model.js");
const Booking = require("../model/booking.model.js");
const content = require("../unites/constant.js");
const contents = require("../unites/constant.js");

exports.createPayment = async (req, res) => {
  const booking = await Booking.findOne({ _id: req.body.bookingId});

  var bookingTime = booking.createdAt;
  var currentTime = Date.now();

  var mintes = Math.floor((currentTime - bookingTime) / (1000 * 60));

  if (mintes > 5) {
    booking.status = content.bookingStatus.expired;
    await booking.save();
    return res.status(200).send({
      message: "Can't do the payment as the booking has expired.",
    });
  }

  var paymentObj = {
    bookingId: req.body.bookingId,
    amount: req.body.amount,
    status: content.bookingStatus.completed,
  };

  if (req.body.amount < booking.amount) {
    return res
      .status(400)
      .send({ message: "Payment amount less than to booking amount " });
  }

  try {
    const payment = await Payment.create(paymentObj);
    booking.status = content.bookingStatus.completed;
    await booking.save();

    const user = await User.findOne({ userId: req.userId });
    sendEmail(
      payment._id,
      "payment successful for the booking id: " + payment.bookingId,
      JSON.stringify(booking),
      user.email,
      "mba-no-reply@gmail.com"
    );
  }catch (error) {
    return res
      .status(500)
      .send({ message: "Internal server error creating by booking" });
  }
};




exports.getPaymentById = async (req, res) => {
  const user = await User.findOne({ userId: req.userId });
  try {
    const payment = await payment.findOne({ _id: req.params.id });
    const booking = await Booking.findOne({ _id: payment.bookingId });
        
    if (
      user.userType !== content.userType.admin &&
      booking !== null &&
      booking.userId !== user._id
    ) {
      return res.status(400).send({ message: "Access denied" });
    }
    return res.status(200).send(payment);
  } catch (error) {
    return res.status;
  }
};




exports.getPaymentAll = async (req, res) => {
  const queryObj = {};
  const user = await User.findOne({ userId: req.userId });

  if (user.userType !== contents.userType.admin) {
    const bookings = await Booking.find({ userId: user._id });
    const bookingIds = bookings.map((booking) => booking._id);
    queryObj.bookingId = { $in: bookingIds };
  }

  try {
    const payment = await Payment.find(queryObj)
    res.status(200).send(payment)
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};
