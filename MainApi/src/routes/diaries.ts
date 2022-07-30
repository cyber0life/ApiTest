import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

// devuelve todos los datos del json
router.get('', (_req, res) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (_req, res) => {
  const diary = diaryServices.findById(+_req.params.id)

  if (diary == null) {
    res.sendStatus(404)
  }
  res.send(diary)
})

router.post('', (_req, res) => {
  const { date, weather, visibility, comment } = _req.body
  
  //check if the json is wrongly formatted
  if(weather==undefined || date==undefined ||comment==undefined || visibility==undefined){
    res.sendStatus(400)
  }
  else{
    const newDiaryEntry = diaryServices.addEntry({
    date,
    weather,
    visibility,
    comment
    })
  
    res.send(newDiaryEntry) 
  }
   
  
})

router.delete('/:id', (_req, res) => {
  const diary = diaryServices.deleteById(+_req.params.id)

  if (diary == null) {
    res.sendStatus(404)
  }
  res.send(diary)
})

router.patch('/:id', (_req, res) => {
  const { date, weather, visibility, comment } = _req.body
  if(weather==undefined || date==undefined ||comment==undefined || visibility==undefined){
    res.sendStatus(400)
  }
  const diary = diaryServices.UpdateById(+_req.params.id, {
    date,
    weather,
    visibility,
    comment
  })

  if (diary == null) {
    res.sendStatus(404)
  }
  res.send(diary)
})
export default router
