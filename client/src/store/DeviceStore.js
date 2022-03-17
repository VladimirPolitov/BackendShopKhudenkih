import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12pro', price: 25000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/08a/iphone_13_pro_max_q421_graphite_pdp_image_position-2__ru-ru.jpg'},
            {id: 2, name: 'Iphone 12pro', price: 25000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/08a/iphone_13_pro_max_q421_graphite_pdp_image_position-2__ru-ru.jpg'},
            {id: 3, name: 'Iphone 12pro', price: 25000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/08a/iphone_13_pro_max_q421_graphite_pdp_image_position-2__ru-ru.jpg'},
            {id: 4, name: 'Iphone 12pro', price: 25000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/08a/iphone_13_pro_max_q421_graphite_pdp_image_position-2__ru-ru.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}