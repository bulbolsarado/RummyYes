const targetDateOfMonth = 1; // 每月1号
const targetHourOfMonth = 02; 
const targetMinOfMonth = 30; 

const monthlyTimer = setInterval(() => {
    const yearNow = moment().year();
    const monthNow = moment().month();
    const dayNow = moment().date();
    const hourNow = moment().hour();
    const minNow = moment().minutes();
    let targetMonth = monthNow;

    if ( dayNow > targetDateOfMonth+1 
       || (dayNow == targetDateOfMonth+1 &&  hourNow >= targetHourOfMonth && minNow >= targetMinOfMonth)) {
      targetMonth += 1;
    }
    const targetTime = moment([0, 0, targetDateOfMonth]).year(yearNow).month(targetMonth).hour(targetHourOfMonth).minutes(targetMinOfMonth).utc().utcOffset(480);
    const now = moment.utc();
    const distance = targetTime - now;
    if (distance > 0) {
        $('.countdown-month-now-1').css({'display': 'block'});
        $('.countdown-month-today-1').css({'display':'none'});
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // hours < 10 ? hours = '0' + hours : null;
        // minutes < 10 ? minutes = '0' + minutes : null;
        // seconds < 10 ? seconds = '0' + seconds : null;
      
        document.querySelector('.day-of-month_1').textContent = days + "day";
        document.querySelector('.hours-of-month_1').textContent = hours + "H";
        // document.querySelector('.minutes-of-month_1').textContent = minutes;
        // document.querySelector('.seconds-of-month_1').textContent = seconds;
    }
    
    if (distance < 0) {
       // clearInterval(monthlyTimer1);
        $('.countdown-month-now-1').css({'display': 'none'});
        $('.countdown-month-today-1').css({'display':'block'});
      }
  }, 1000)

const targetDateOfMonth20 = 10; // 每月10号
const targetHourOfMonth20 = 02; 
const targetMinOfMonth20 = 30; 

const monthlyTimer1 = setInterval(() => {
    const yearNow = moment().year();
    const monthNow = moment().month();
    const dayNow = moment().date();
    const hourNow = moment().hour();
    const minNow = moment().minutes();
    let targetMonth = monthNow;
    if (dayNow > targetDateOfMonth20+1
       || (dayNow == targetDateOfMonth20+1 && hourNow >= targetHourOfMonth20 && minNow >= targetMinOfMonth20)) {
      targetMonth += 1;
    }
    const targetTime = moment([0, 0, targetDateOfMonth20]).year(yearNow).month(targetMonth).hour(targetHourOfMonth20).minutes(targetMinOfMonth20).utcOffset(480);
    const now = moment.utc().utcOffset(480);
    const distance = targetTime-now;
    if (distance > 0) {
        $('.countdown-month-now-20').css({'display': 'block'});
        $('.countdown-month-today-20').css({'display':'none'});
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // hours < 10 ? hours = '0' + hours : null;
        // minutes < 10 ? minutes = '0' + minutes : null;
        // seconds < 10 ? seconds = '0' + seconds : null;
        document.querySelector('.day-of-month_20').textContent = days + "day";
        document.querySelector('.hours-of-month_20').textContent = hours + "H";
        // document.querySelector('.minutes-of-month_20').textContent = minutes;
        // document.querySelector('.seconds-of-month_20').textContent = seconds;
    }
    if (distance < 0) {
        //clearInterval(monthlyTimer1);
        $('.countdown-month-now-20').css({'display': 'none'});
        $('.countdown-month-today-20').css({'display':'block'});
      }
  }, 1000)


const targetDayOfWeek = 1;   // 每周一
const targetHourOfWeek = 02; 
const targetMinOfWeek = 30; 

const weeklyTimer = setInterval(() => {
  let targetWeekOfYear = moment().week();
  const hourNow = moment().hour();
  const minNow = moment().minutes();
  if (moment().day() > targetDayOfWeek +1
  || (moment().day() == targetDayOfWeek+1 && hourNow >= targetHourOfWeek && minNow >= targetMinOfWeek)) {
    targetWeekOfYear += 1;
  }
  const targetTime = moment({ m: 0, s: 0, ms: 0 }).week(targetWeekOfYear).day(targetDayOfWeek).hour(targetHourOfWeek).minutes(targetMinOfWeek).utc().utcOffset(480);
  const now = moment.utc().utcOffset(480);
  const distance = targetTime - now;
 
  if (distance > 0) {
    $('.countdown-week-now-1').css({'display': 'block'});
    $('.countdown-week-today-1').css({'display':'none'});
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // hours < 10 ? hours = '0' + hours : null;
    // minutes < 10 ? minutes = '0' + minutes : null;
    // seconds < 10 ? seconds = '0' + seconds : null;
    document.querySelector('.day-of-week').textContent = days + "day";
    document.querySelector('.hours-of-week').textContent = hours + "H";
    // document.querySelector('.minutes-of-week').textContent = minutes;
    // document.querySelector('.seconds-of-week').textContent = seconds;
  }
  
  if (distance < 0) {
    //clearInterval(monthlyTimer1);
    $('.countdown-week-now-1').css({'display': 'none'});
    $('.countdown-week-today-1').css({'display':'block'});
  }
 
}, 1000)





