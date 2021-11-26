import React, { useState, useEffect } from 'react'
import './styles.css';

const CountDown = () => {
    const [itsChristmasDay, setitsChristmasDay]=useState(false)
    const [timer, settimer] = useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    });

    const dobleDigit = (n) => {
        return (n < 10 ? "0" : "") + n;
      };

    const calculateChristmasCountdown=()=>{

        //Get today's date.
        let now = new Date();
		
        //Get the current month. Add a +1 because
        //getMonth starts at 0 for January.
        let currentMonth = (now.getMonth() + 1);
    
        //Get the current day of the month.
        let currentDay = now.getDate();
    
        //Work out the year that the next Christmas
        //day will occur on.
        let nextChristmasYear = now.getFullYear();
        if(currentMonth === 12 && currentDay > 25){
            //This year's Christmas Day has already passed.
            nextChristmasYear = nextChristmasYear + 1;
        }
    
        let nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
        let christmasDay = new Date(nextChristmasDate);
    
        //Get the difference in seconds between the two days.
        let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
    
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
    
        //Don't calculate the time left if it is Christmas day.
        let calculateTimeLeft = currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)
        if(calculateTimeLeft){
            setitsChristmasDay(false)
            //Convert these seconds into days, hours, minutes, seconds.
            days = Math.floor(diffSeconds / (3600*24));
            diffSeconds  -= days * 3600 * 24;
            hours   = Math.floor(diffSeconds / 3600);
            diffSeconds  -= hours * 3600;
            minutes = Math.floor(diffSeconds / 60);
            diffSeconds  -= minutes * 60;
            seconds = diffSeconds;
        }else{
            setitsChristmasDay(true)
        }
        
        settimer({
            days: dobleDigit(days),
            hours: dobleDigit(hours),
            minutes:dobleDigit(minutes),
            seconds:dobleDigit(seconds)
        })
    }

    useEffect(()=>{
        let myInterval = setTimeout(calculateChristmasCountdown, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        itsChristmasDay ? <h1 className="timerText">Ya es Navidad!</h1> : 
        <h1 className="timerText">Se viene la Navidad {timer.days} días {timer.hours}:{timer.minutes}:{timer.seconds}</h1> 
    )
}

export default CountDown;