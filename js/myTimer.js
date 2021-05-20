export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.element = selector;
  }

  padZero(value) {
    return value < 10 ? `0${value}` : value;
  }

  countDowmTime() {
    const time = this.targetDate - Date.now();
    const days = this.padZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.padZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.padZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.padZero(Math.floor((time % (1000 * 60)) / 1000));

    document.querySelector('[data-value="days"]').textContent = days;
    document.querySelector('[data-value="hours"]').textContent = hours;
    document.querySelector('[data-value="mins"]').textContent = mins;
    document.querySelector('[data-value="secs"]').textContent = secs;
  }

  showTime() {
    setInterval(() => {
      this.countDowmTime();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('07,07,2021'),
});

timer.showTime();
