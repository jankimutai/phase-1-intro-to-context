// Your code here
function createEmployeeRecord (array){
    let employeeRecord = {
        firstName :array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
return employeeRecord;
}
function createEmployeeRecords(arrays){
    let employeeRecords =arrays.map(array => createEmployeeRecord(array));
return employeeRecords;
}
function createTimeInEvent(employeeRecord, dateStamp) {
  let [date,hour] = dateStamp.split(" ");
  employeeRecord.timeInEvents.push({
    type:"TimeIn",
    date:date,
    hour:parseInt(hour)
  });
  
  return employeeRecord;
    
  }
  function createTimeOutEvent(record, dateStamp) {
    let [date , hour] = dateStamp.split(' ');
    record.timeOutEvents.push({
      type:"TimeOut",
      date: date,
      hour:parseInt(hour,10),
    })
    return record;
  }
  function hoursWorkedOnDate(employeeRecord,date){
    let timeIn = employeeRecord.timeInEvents.find( event => event.date === date)
    let timeOut = employeeRecord.timeOutEvents.find( event => event.date === date)
    let hoursWorked = (timeOut.hour-timeIn.hour)/100;
    return hoursWorked
  }
  function wagesEarnedOnDate(employeeRecord, date){
    let hoursWorked = hoursWorkedOnDate(employeeRecord,date)
    let pay = hoursWorked* employeeRecord.payPerHour;
    return pay;
  }
  function allWagesFor(employeeRecord){
    let totalAttendedDays = employeeRecord.timeInEvents.map(event => event.date)
    let payOwed = totalAttendedDays.reduce((total,date) => total + wagesEarnedOnDate(employeeRecord, date), 0 );
   return payOwed;
  }
  function calculatePayroll (employeeRecord){
    let pay = employeeRecord.reduce((total,employeeRecord) => total+ allWagesFor(employeeRecord),0);
    return pay;

  }


