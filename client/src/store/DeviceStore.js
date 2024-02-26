import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'fridje' },
      { id: 2, name: 'Smartphone' },
      { id: 3, name: 'SmartClock' },
      { id: 4, name: 'Headphones' },
      { id: 5, name: 'Laptops' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Poko' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 11 pro',
        price: 12000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fru%2F%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D0%25B8%2Fiphone&psig=AOvVaw00qSdCk9J2WUcDU8SAKU8X&ust=1708236528342000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDzqI3bsYQDFQAAAAAdAAAAABAE',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 12000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fru%2F%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D0%25B8%2Fiphone&psig=AOvVaw00qSdCk9J2WUcDU8SAKU8X&ust=1708236528342000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDzqI3bsYQDFQAAAAAdAAAAABAE',
      },
      {
        id: 3,
        name: 'Iphone 13 pro',
        price: 12000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fru%2F%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D0%25B8%2Fiphone&psig=AOvVaw00qSdCk9J2WUcDU8SAKU8X&ust=1708236528342000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDzqI3bsYQDFQAAAAAdAAAAABAE',
      },
      {
        id: 4,
        name: 'Iphone 13 pro',
        price: 12000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fru%2F%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D0%25B8%2Fiphone&psig=AOvVaw00qSdCk9J2WUcDU8SAKU8X&ust=1708236528342000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDzqI3bsYQDFQAAAAAdAAAAABAE',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(type) {
    this._types = type;
  }
  setBrands(brand) {
    this._brands = brand;
  }

  setDevices(device) {
    this._devices = device;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
