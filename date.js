let question = [
  { date: '2023-06-04T11:17:27.298Z', value: 5 },
  { date: '2023-06-07T11:17:27.298Z', value: 10 },
  { date: '2023-06-11T11:17:27.298Z', value: 15 },
  { date: '2023-06-13T11:17:27.298Z', value: 20 },
  { date: '2023-06-14T11:17:27.298Z', value: 15 }
]
let startDate = new Date(question[0].date)
let endDate = new Date(question[question.length-1].date)
//console.log(new Date(question[0].date), question[question.length-1].date)
//endDate.setDate(startDate.getDate() + 10)
 
// debug again not all values are pushed
let res = []
let date = startDate
let ind = 0
console.log(startDate, endDate)
while (date <= endDate) {
  console.log(question, ind, question[ind])
  console.log((new Date(question[ind].date)).toString(), date.toString(), (new Date(question[ind].date)).toString() === date.toString())
  if((new Date(question[ind].date)).toString() === date.toString()) {
    res.push(question[ind])
    ind = ind+1
  } else {
    res.push({date: new Date(date), value: 0})
  }
  date.setDate(date.getDate() + 1)
}

console.log(res)