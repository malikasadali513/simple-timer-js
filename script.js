class Timer {
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.timeRef = document.querySelector(".timer-display");
    this.intervalId = null;
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    document
      .getElementById("start-timer")
      .addEventListener("click", this.startTimer);
    document
      .getElementById("pause-timer")
      .addEventListener("click", this.pauseTimer);
    document
      .getElementById("reset-timer")
      .addEventListener("click", this.resetTimer);
  }
  startTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.displayTimer();
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.intervalId);
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.displayTimer();
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
