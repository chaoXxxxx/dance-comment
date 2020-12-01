"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = __importDefault(require("./template/default"));
class CreateCmment {
    constructor(option) {
        this.orderNumber = -1;
        this.cList = [];
        this.list = default_1.default;
        this.config = {
            time: 10000,
            useTemplate: true,
            template: [],
            orderPlay: true
        };
        this.config = Object.assign({}, this.config, option);
        if (!this.config.useTemplate) {
            this.list = [];
        }
        this.checkList(option && option.template);
    }
    init() {
        this.create();
        if (this.config.time && this.config.time >= 100) {
            setInterval(() => {
                this.clear();
                this.create();
            }, this.config.time);
        }
    }
    clear() {
        this.cList.forEach(item => {
            document.removeChild(item);
        });
    }
    create() {
        const getRandom = this.getNumber();
        const commList = this.list[getRandom];
        const cList = [];
        commList.forEach(item => {
            const comm = document.createComment(item);
            cList.push(comm);
            document.insertBefore(comm, document.querySelector('html'));
        });
        this.cList = cList;
    }
    getNumber() {
        if (this.config.orderPlay) {
            this.orderNumber++;
            if (this.orderNumber > this.list.length - 1) {
                this.orderNumber = 0;
            }
            return this.orderNumber;
        }
        else {
            return this.random(0, this.list.length - 1);
        }
    }
    checkList(list) {
        if (!list) {
            return;
        }
        for (let i = 0; i < list.length; i++) {
            if (!this.isArray(list[i])) {
                console.error('template is not Array -> template: [[String, String], [String, String]....]');
                continue;
            }
            for (let j = 0; j < list[i].length; j++) {
                if (!this.isString(list[i][j])) {
                    console.error('template is not String -> template: [[String, String], [String, String]....]');
                    continue;
                }
            }
            this.list.push(list[i]);
        }
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]';
    }
    isString(data) {
        return Object.prototype.toString.call(data) === '[object String]';
    }
}
exports.default = CreateCmment;
