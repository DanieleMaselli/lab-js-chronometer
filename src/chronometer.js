class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    //initiate the timer!
    this.printTimeCallback = printTimeCallback;
    
    this.intervalId = setInterval(() => {
      //increment
      this.currentTime +=1;
      //a way to provide a callback function that can be executed at regular intervals,
      if (typeof printTimeCallback === 'function') {
        //callback function
        printTimeCallback(this.currentTime);
      }
    },1000);

  } 


  getMinutes() {
    //return the number of whole minutes that have passed based on the currentTime property
    const minutes = Math.floor(this.currentTime/60)
    return minutes;
      
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    //takes a numeric value and ensures as a two-digits string
    this.value = value;
    return ("0" + this.value).slice(-2)

  }

  stop() {
    //calls the clearInterval function to stop intervalID
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
    
  }

  split() {

    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    //return a formated string 
    return `${minutes}:${seconds}`;
    
  }
}
