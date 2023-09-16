const flight = "LH222";
const hamza = {
  name: "Hamza Khan",
  passport: 2233133122,
};

const checkIn = function (flightNum, passenger) {
  flightNum = flight;
  passenger.name = "Mr." + hamza.name;
  if (passenger.passport === 2233133122) {
    alert("Check In");
  } else {
    alert("Wrong passport number!");
  }
};

checkIn(flight, hamza);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(hamza);
checkIn(flight, hamza);
