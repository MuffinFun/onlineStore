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
        img: 'https://shop.mts.by/upload/resize_cache/webp/iblock/798/Smartfon-Apple-iPhone-13-128GB-_rozovyy_.webp',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 12000,
        rating: 5,
        img: 'https://shop.mts.by/upload/resize_cache/webp/iblock/798/Smartfon-Apple-iPhone-13-128GB-_rozovyy_.webp',
      },
      {
        id: 3,
        name: 'Iphone 13 pro',
        price: 12000,
        rating: 5,
        img: 'https://shop.mts.by/upload/resize_cache/webp/iblock/798/Smartfon-Apple-iPhone-13-128GB-_rozovyy_.webp',
      },
      {
        id: 4,
        name: 'Iphone 13 pro',
        price: 12000,
        rating: 5,
        img: 'https://shop.mts.by/upload/resize_cache/webp/iblock/798/Smartfon-Apple-iPhone-13-128GB-_rozovyy_.webp',
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
