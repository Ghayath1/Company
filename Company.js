let color="green"
class Vehicle {
    constructor(name, manufacturer, ID) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.ID = ID;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, ID, type) {
        super(name, manufacturer, ID);
        this.type = type; // gas or electric
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, ID, planeType) {
        super(name, manufacturer, ID);
        this.planeType = planeType; // نوع الطائرة
    }
}

class Employee {
    constructor(name, ID, dateOfBirth) {
        this.name = name;
        this.ID = ID;
        this.dateOfBirth = dateOfBirth;
    }
}

class Driver extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
        super(name, ID, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
        super(name, ID, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Reservation {
    constructor(reservationDate, employeeId, vehiclesId) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = `${employeeId}-${vehiclesId}`;
    }
}

let reservations = [];

function reserveVehicle(employeeId, vehicleId, vehicles, employees) {
    const employee = employees.find(e => e.ID === employeeId);
    const vehicle = vehicles.find(v => v.ID === vehicleId);

    if (!employee || !vehicle) {
        console.log("Employee or vehicle not found.");
        return;
    }

    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("Pilot can't drive a car.");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("Driver can't fly a plane.");
    } else {
        const reservation = new Reservation(new Date(), employeeId, vehicleId);
        reservations.push(reservation);
        console.log("Reservation added successfully!");
    }
}

const car1 = new Car("Toyota", "Toyota Company", "1", "gas");
const car2 = new Car("Tesla", "Tesla Inc.", "2", "electric");
const car3 = new Car("Hyundai", "Hyundai Motors", "3", "gas");
const plane1 = new Plane("Boeing 737", "Boeing", "4", "commercial");
const plane2 = new Plane("F16", "Lockheed Martin", "5", "military");

const driver1 = new Driver("Ahmed", "101", "1990-01-01", "D-12345");
const pilot1 = new Pilot("Mohammed", "102", "1985-05-10", "P-67890");

let vehicles = [car1, car2, car3, plane1, plane2];
let employees = [driver1, pilot1];

reserveVehicle("101", "1", vehicles, employees);
reserveVehicle("102", "5", vehicles, employees);

console.log(reservations);
