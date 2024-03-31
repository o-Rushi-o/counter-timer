const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const countertimer = document.querySelector(".countertimer");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let currentTime = new Date(),
    dd = String(currentTime.getDate()).padStart(2, "0"),
    mm = String(currentTime.getMonth() + 1).padStart(2, "0"),
    yyyy = currentTime.getFullYear();
  const now = `${mm}/${dd}/${yyyy}`;

  const enterDay = prompt("Enter Day").padStart(2, "0");
  const enterMonth = prompt("Enter Month").padStart(2, "0");
  // const enterYear = prompt("Enter Year");
  // const targetDate = `${enterMonth}/${enterDay}/${enterYear}`;
  let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;
  if (now > targetDate) {
    targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
  }
  const intervalId = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const remainigtime = timer - today;
    const leftday = Math.floor(remainigtime / day),
      lefthour = Math.floor((remainigtime % day) / hour),
      leftminute = Math.floor((remainigtime % hour) / minute),
      leftsecond = Math.floor((remainigtime % minute) / second);
    // console.log(`${leftday}:${lefthour}:${leftminute}:${leftsecond}`);

    daysElement.innerText = leftday;
    hoursElement.innerText = lefthour;
    minutesElement.innerText = leftminute;
    secondsElement.innerText = leftsecond;

    if (remainigtime < 0) {
      countertimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalId);
    }
  }, 0);
};
timerFunction();
