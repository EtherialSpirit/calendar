//месяцы по-русски
      var monthArr=new Array(12);
      monthArr[0]="Январь";
      monthArr[1]="Февраль";
      monthArr[2]="Март";
      monthArr[3]="Апрель";
      monthArr[4]="Май";
      monthArr[5]="Июнь";
      monthArr[6]="Июль";
      monthArr[7]="Август";
      monthArr[8]="Сентябрь";
      monthArr[9]="Октябрь";
      monthArr[10]="Ноябрь";
      monthArr[11]="Декабрь";
      
      var dayArr = new Array(7);
      dayArr[1] = "понедельник";
      dayArr[2] = "вторник";
      dayArr[3] = "среда";
      dayArr[4] = "четверг";
      dayArr[5] = "пятница";
      dayArr[6] = "суббота";
      dayArr[0] = "воскресенье";
  
    function createCalendar(id, year, month) {
      
      var elem = document.getElementById(id);
      //var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      
      var mon = month;
      
      var d = new Date(year, mon);
   
      document.getElementById("data").textContent = monthArr[mon] +" "+year;
      //var table = '<table><tr><th>понедельник</th><th>вторник</th><th>среда</th><th>четверг</th><th>пятница</th><th>суббота</th><th>воскресенье</th></tr><tr>';
      var table = '<table><tr></tr><tr>';
      // заполнить первый ряд от понедельника
      // и до дня, с которого начинается месяц
      // * * * | 1  2  3  4
      for (var i = 0; i < getDay(d); i++) {
        table += '<td style="width: 100px; height: 100px; vertical-align: top"></td>';
      }
      // ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td style="width: 100px; height: 100px; vertical-align: top">'+dayArr[d.getDay()]+', '+d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
      }
      // добить таблицу пустыми ячейками, если нужно
      if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += '<td style="width: 100px; height: 100px; vertical-align: top"></td>';
        }
      }
      // закрыть таблицу
      table += '</tr></table>';
      // только одно присваивание innerHTML
      elem.innerHTML = table;
    }
    function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }
    var day = new Date();
    var dayMonth = day.getMonth();
    var dayYear  = day.getFullYear();
    createCalendar("calendar", dayYear, dayMonth);
    
    monthReduce.onclick = function() {
      dayMonth = dayMonth -1;  
      if (dayMonth<0) {
        dayMonth = 11;
        dayYear = dayYear-1;
      }
      createCalendar("calendar", dayYear, dayMonth);
    }
    
    monthPlus.onclick = function() {
      dayMonth = dayMonth +1; 
       if (dayMonth>11) {
        dayMonth = 0;
        dayYear = dayYear+1;
      }
      createCalendar("calendar", dayYear, dayMonth);
    }
    
  yestButton.onclick = function() {
      dayMonth = day.getMonth();
      dayYear  = day.getFullYear();
      createCalendar("calendar", dayYear, dayMonth);
    }
    
    
    
