class Timer {
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.timeRef = document.querySelector(".timer-display");
    this.intervalId = null;

    document.getElementById("start-timer").addEventListener("click", () => {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        this.displayTimer();
      }, 1000);
    });

    document.getElementById("pause-timer").addEventListener("click", () => {
      clearInterval(this.intervalId);
    });

    document.getElementById("reset-timer").addEventListener("click", () => {
      clearInterval(this.intervalId);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.timeRef.innerHTML = "00 : 00 : 00";
    });
  }

  displayTimer() {
    this.seconds++;
    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes == 60) {
        this.minutes = 0;
        this.hours++;
      } 
    } 

    let h = this.hours < 10 ? "0" + this.hours : this.hours;
    let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    this.timeRef.innerHTML = `${h} : ${m} : ${s}`;
  }
}

const timer = new Timer();
