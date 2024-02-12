class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getName = function () {
    return `Модель: ${this.name}`;
  };
  getYear = function () {
    return `Год выпуска: ${this.year}`;
  };
  getInfo = function () {
    console.log(`${this.getName()}. ${this.getYear()}`);
  };
}

const oldCar = new Vehicle("Ford T", 1908);

class Car extends Vehicle {
  constructor(name, year, parkingSensors = false) {
    super(name, year);
    this.parkingSensors = parkingSensors;
  }
  isHaveParkingSensors = function () {
    console.log(
      this.parkingSensors
        ? "В машине есть парктроники"
        : "Машина не имеет парктроников"
    );
  };
  getInfo = function () {
    const _maxSpeed = 120;
    const _wheels = 4;
    const _getMaxSpeed = () => `${_maxSpeed} km/h`;

    console.log(`${this.getName()}
        ${this.getYear()}
        Колес: ${_wheels}
        Макс. скорость: ${_getMaxSpeed()}`);
  };
}

const fordFusion = new Car("Ford Fusion", 2015);
const bmw = new Car("BMW X5", 2018);
const audi = new Car("Audi A5", 2019, true);

class Moto extends Vehicle {
  constructor(name, year) {
    super(name, year);
    this.wheels = 2;
  }
}

const yamaha = new Moto("Yamaha RX250", 2021);

class Driver {
  constructor(name, experience) {
    this.name = name;
    this.experience = experience;
  }
  displayInfo = function () {
    console.log(`Водитель: ${this.name}; опыт вождения: ${this.experience};`);
  };
  driveCar = function (vehicle) {
    console.log(
      `${this.name} работает на ${vehicle.name} ${vehicle.year} года выпуска`
    );
  };
}

const Vasily = new Driver("Вася", 22);
const Egor = new Driver("Егор", 15);

Vasily.displayInfo();
Egor.displayInfo();

Vasily.driveCar(audi);
Egor.driveCar(yamaha);
