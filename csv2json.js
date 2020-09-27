const fs = require('fs')

let data = []
fs.readFile('./CindyReviewSchedule.csv', 'utf8', function(_err, _data) {
  data.push(..._data.split(/\r?\n/))
  data = data.map(item => item.split(/,/)).filter((item, i) => i !== 0)
  const reviewData = []
  data.forEach(item => {
    const dayData = {}
    item.forEach((value, index) => {
      switch (value) {
        case '0':
          dayData.l0 = index
          break
        case '1':
          dayData.l1 = index
          break
        case '2':
          dayData.l2 = index
          break
        case '3':
          dayData.l3 = index
          break
      }
    })
    item[0] && reviewData.push({date: item[0], ...dayData})
  })

  const dataJson = JSON.stringify(reviewData)

  fs.writeFileSync('./CindyReviewSchedule.json', dataJson)
})