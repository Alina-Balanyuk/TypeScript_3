"use strict";
// Перечисление для типа документа
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentTypes["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocumentTypes["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
})(DocumentTypes || (DocumentTypes = {}));
// Класс, реализующий интерфейс Владелец
class VehicleOwner {
    constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get birthDate() { return this._birthDate; }
    get documentType() { return this._documentType; }
    get documentSeries() { return this._documentSeries; }
    get documentNumber() { return this._documentNumber; }
    displayInfo() {
        console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._documentType}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}
// // Класс, реализующий интерфейс Транспортное средство
// class Car implements Vehicle {
//     private _brand: string;
//     private _model: string;
//     private _year: number;
//     private _vin: string;
//     private _registrationNumber: string;
//     private _owner: Owner;
//     constructor(
//         brand: string,
//         model: string,
//         year: number,
//         vin: string,
//         registrationNumber: string,
//         owner: Owner
//     ) {
//         this._brand = brand;
//         this._model = model;
//         this._year = year;
//         this._vin = vin;
//         this._registrationNumber = registrationNumber;
//         this._owner = owner;
//     }
//     // Геттеры
//     get brand() { return this._brand; }
//     get model() { return this._model; }
//     get year() { return this._year; }
//     get vin() { return this._vin; }
//     get registrationNumber() { return this._registrationNumber; }
//     get owner() { return this._owner; }
//     // Метод для вывода информации о транспортном средстве
//     displayInfo(): void {
//         console.log(`Марка: ${this._brand}`);
//         console.log(`Модель: ${this._model}`);
//         console.log(`Год выпуска: ${this._year}`);
//         console.log(`VIN-номер: ${this._vin}`);
//         console.log(`Регистрационный номер: ${this._registrationNumber}`);
//     }
// }
// // Пример использования
// const owner = new VehicleOwner(
//     "Иванов",
//     "Иван",
//     "Иванович",
//     new Date(1990, 0, 1),
//     DocumentTypes.Passport,
//     "1234",
//     "567890"
//  );
// const car = new Car(
//     "Toyota",
//     "Camry",
//     2020,
//     "1HGBH41JXMN109186",
//     "A123BC",
//     owner
// );
// // Вывод информации о владельце и транспортном средстве
// owner.displayInfo();
// car.displayInfo();
// Перечисление для типа кузова
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["Convertible"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
})(BodyType || (BodyType = {}));
// Перечисление для класса автомобиля
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
// Класс, реализующий интерфейс Автомобиль
class Automobile {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }
    // Метод для вывода информации о транспортном средстве
    displayInfo() {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}
// Класс, реализующий интерфейс Мотоцикл
class Motorcycle {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }
    // Геттеры
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get frameType() { return this._frameType; }
    get isSport() { return this._isSport; }
    // Метод для вывода информации о транспортном средстве
    displayInfo() {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isSport ? "Да " : "Нет"}`);
    }
}
class StorageOfVehicles {
    constructor() {
        this.creationDate = new Date();
        this.vechicles = [];
    }
    addVehicle(vehicle) {
        this.vechicles.push(vehicle);
    }
    getAllVechicles() {
        return this.vechicles;
    }
}
const vStorage = new StorageOfVehicles();
const ownerCar = new VehicleOwner("Петров", "Петр", "Петрович", new Date(1985, 5, 15), DocumentTypes.DriverLicense, "5678", "123456");
const automobile = new Automobile("Honda", "Accord", 2021, "2HGFC2F59MH500000", "B456CD", ownerCar, BodyType.Sedan, CarClass.Business);
// Добавление автомобиля в хранилище
vStorage.addVehicle(automobile);
// Получение всех автомобилей из хранилища
const allVehicles = vStorage.getAllVechicles();
allVehicles.forEach(vehicle => vehicle.displayInfo());
