window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const count = document.querySelector('#count')
      const table = document.querySelector('table')

      count.textContent = data.number
      
      for(let i = 0; i < data.people.length; i++){
      
        const tableRow = document.createElement('tr')
        const columnNumber = document.createElement('td')
        const columnName = document.createElement('td')
        const columnPlace = document.createElement('td')

        tableRow.append(columnNumber, columnPlace, columnName)

        columnNumber.textContent = i + 1
        columnPlace.textContent = data.people[i].craft
        columnName.textContent = data.people[i].name
        
        table.append(tableRow)
      
      }
    })
    .catch((err) => {
      res.json(err, 'error')
    })
});