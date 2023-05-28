let startDate = new Date()
let endDate = new Date()
endDate.setDate(startDate.getDate() + 10)
let res = []
let date = startDate

console.log(startDate, endDate)
while (date <= endDate) {
  res.push(new Date(date))
  date.setDate(date.getDate() + 1)
}

console.log(res)