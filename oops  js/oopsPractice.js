class Hostel {
  constructor(name, rent, rooms, favDish, location) {
    this.name = name;
    this.rent = rent;
    this.rooms = rooms;
    this._favDish = favDish;
    this._location = location;
  }
  get favDish() {
    return this._favDish;
  }
  set favDish(favDish) {
    return (this._favDish = favDish);
  }
  open() {
    console.log(
      `${this.name} stays open 24 hrs a day and we provide meals three time a day.`
    );
  }
}

class HostelWithoutFood extends Hostel {
  constructor(name, rent, rooms, location) {
    super(name, rent, rooms, null, location);
  }
  open() {
    console.log(
      `${this.name} stays open 24 hrs a day but we don't provide any food.`
    );
  }
}

const hostel1 = new Hostel(
  "Faiz Boys hostel",
  15000,
  28,
  "Chicken Rice",
  "Commercial market, Rawalpindi"
);
console.log(hostel1.favDish);
hostel1.favDish = "Chicken Karrahi";
console.log(hostel1.favDish);
