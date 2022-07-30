"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.UpdateById = exports.deleteById = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default; // Asercion de tipos
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const deleteById = (id) => {
    const deletedArray = diaries.filter((item) => item.id !== id); // elimino del array sin mutar
    diaries.splice(0, diaries.length); // vacio array
    deletedArray.forEach(element => {
        diaries.push(element);
    });
    return diaries;
};
exports.deleteById = deleteById;
const UpdateById = (id, datae) => {
    const data = {
        id: id,
        date: datae.date,
        visibility: datae.visibility,
        weather: datae.weather,
        comment: datae.comment
    };
    const UpdatedArray = diaries.filter((item) => item.id !== id); // elimino del array sin mutar
    diaries.splice(0, diaries.length); // vacio array
    UpdatedArray.push(data);
    UpdatedArray.forEach(element => {
        diaries.push(element);
    });
    return diaries;
};
exports.UpdateById = UpdateById;
const addEntry = (NewDiaryEntry) => {
    const newDiaryEntry = {
        id: diaries.length + 1,
        date: NewDiaryEntry.date,
        weather: NewDiaryEntry.weather,
        visibility: NewDiaryEntry.visibility,
        comment: NewDiaryEntry.comment
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.addEntry = addEntry;
