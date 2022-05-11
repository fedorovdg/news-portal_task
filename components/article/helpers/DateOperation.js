export function GetCurrentDate () {
  let date = new Date
  //const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

export function GetCurrentWeekDay () {
  let date = new Date
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[date.getDay()] + ','
}

//Friday, February 18, 2022
