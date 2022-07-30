import { DiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // Asercion de tipos

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}

export const deleteById = (id: number): DiaryEntry[] | undefined => {
  const deletedArray = diaries.filter((item) => item.id !== id)// elimino del array sin mutar
  diaries.splice(0, diaries.length)// vacio array
  deletedArray.forEach(element => {
    diaries.push(element)
  })

  return diaries
}

export const UpdateById = (id: number, datae: NewDiaryEntry): DiaryEntry[] | undefined => {
  const data: DiaryEntry = {
    id: id,
    date: datae.date,
    visibility: datae.visibility,
    weather: datae.weather,
    comment: datae.comment
  }
  if(diaries.filter((item) => item.id == id).length==0 ){
    return undefined
  }
  const UpdatedArray = diaries.filter((item) => item.id !== id) // delete array without mute it
  
  diaries.splice(0, diaries.length) // empty array

  UpdatedArray.push(data) // fill the array
  UpdatedArray.forEach(element => {
    diaries.push(element)
  })

  return diaries
}
export const addEntry = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {

  const newDiaryEntry = {
    id: diaries.length + 1,
    date: NewDiaryEntry.date,
    weather: NewDiaryEntry.weather,
    visibility: NewDiaryEntry.visibility,
    comment: NewDiaryEntry.comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
