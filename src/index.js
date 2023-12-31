
document.querySelector('#timezone').innerHTML = dayjs.tz.guess();
    //Refresh clock so that it displays the current time
    setInterval(() => {
        findHour();
        // document.querySelector('#minute').innerHTML = dayjs().minute();
        findMinute();
        findDay();
        findMonth();
        document.querySelector('#date').innerHTML = dayjs().date();
        document.querySelector('#year').innerHTML = dayjs().year();
    }, 250);
    //formatting the hour from 24 hour time to 12 hour time
    function findHour() {
        if (dayjs().hour() === 12) {
            //in the case that it is noon
            document.querySelector('#hour').innerHTML = "12";
            document.querySelector('#am-pm').innerHTML = "PM";
        } else if (dayjs().hour() === 0){
            //in the case that it is midnight
            document.querySelector('#hour').innerHTML = "12";
            document.querySelector('#am-pm').innerHTML = "AM";
        } else if (dayjs().hour() > 12) {
            //in the case that it is afternoon
            document.querySelector('#hour').innerHTML = dayjs().hour() - 12;
            document.querySelector('#am-pm').innerHTML = "PM";
        } else {
            //in the case that it is morning
            document.querySelector('#hour').innerHTML = dayjs().hour();
            document.querySelector('#am-pm').innerHTML = "AM";
        }
    }
    //ensure minutes are displayed as 2 digits
    function findMinute() {
        let currentMinute;
        if (dayjs().minute() < 10) {
            currentMinute = "0" + dayjs().minute();
        } else {
            currentMinute = dayjs().minute();
        }
        document.querySelector('#minute').innerHTML = currentMinute;
    }
    //change the month from a 0 indexed number to text
    function findMonth() {
        let currentMonth;
        switch (dayjs().month()) {
            case 0: 
                currentMonth = "Jan";
                break;
            case 1: 
                currentMonth = "Feb";
                break;
            case 2: 
                currentMonth = "Mar";
                break;
            case 3: 
                currentMonth = "Apr";
                break;
            case 4: 
                currentMonth = "May";
                break;
            case 5: 
                currentMonth = "Jun";
                break;
            case 6: 
                currentMonth = "Jul";
                break;
            case 7: 
                currentMonth = "Aug";
                break;
            case 8: 
                currentMonth = "Sept";
                break;
            case 9: 
                currentMonth = "Oct";
                break;
            case 10: 
                currentMonth = "Nov";
                break;
            case 11: 
                currentMonth = "Dec";
                break;
            default: 
                currentMonth = "Err";
                break;
        }
        document.querySelector('#month').innerHTML = currentMonth;
    }
    //change the day of the week from a 0 indexed number to text
    function findDay() {
        let currentDay;
        switch (dayjs().day()) {
            case 0: 
                currentDay = "Sun";
                break;
            case 1: 
                currentDay = "Mon";
                break;
            case 2: 
                currentDay = "Tues";
                break;
            case 3: 
                currentDay = "Wed";
                break;
            case 4:
                currentDay = "Thur";
                break;
            case 5:
                currentDay = "Fri";
                break;
            case 6: 
                currentDay = "Sat";
                break;
            default: 
                currentDay = "Err";
                break;
        }
        document.querySelector('#day').innerHTML = currentDay;
    }