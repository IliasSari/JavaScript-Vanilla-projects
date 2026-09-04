const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumberEl = document.getElementById("day-number")
const YearEl = document.getElementById("year")

const date = new Date();
const month = date.getMonth()
    monthNameEl.innerText = date.toLocaleString("en",{month: "long"
})

dayNameEl.innerText = date.toLocaleString("en",{
    weekday:"long"
})
dayNumberEl.innerText = date.getDate()
YearEl.innerText = date.getFullYear()