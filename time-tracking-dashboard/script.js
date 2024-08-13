const data = [
  {
    title: "Work",
    timeframes: {
      Daily: {
        current: 5,
        previous: 7,
      },
      Weekly: {
        current: 32,
        previous: 36,
      },
      Monthly: {
        current: 103,
        previous: 128,
      },
    },
    icon: {
      url: "images/icon-work.svg",
    },
  },
  {
    title: "Play",
    timeframes: {
      Daily: {
        current: 1,
        previous: 2,
      },
      Weekly: {
        current: 10,
        previous: 8,
      },
      Monthly: {
        current: 23,
        previous: 29,
      },
    },
    icon: {
      url: "images/icon-play.svg",
    },
  },
  {
    title: "Study",
    timeframes: {
      Daily: {
        current: 0,
        previous: 1,
      },
      Weekly: {
        current: 4,
        previous: 7,
      },
      Monthly: {
        current: 13,
        previous: 19,
      },
    },
    icon: {
      url: "images/icon-study.svg",
    },
  },
  {
    title: "Exercise",
    timeframes: {
      Daily: {
        current: 1,
        previous: 1,
      },
      Weekly: {
        current: 4,
        previous: 5,
      },
      Monthly: {
        current: 11,
        previous: 18,
      },
    },
    icon: {
      url: "images/icon-exercise.svg",
    },
  },
  {
    title: "Social",
    timeframes: {
      Daily: {
        current: 1,
        previous: 3,
      },
      Weekly: {
        current: 5,
        previous: 10,
      },
      Monthly: {
        current: 21,
        previous: 23,
      },
    },
    icon: {
      url: "images/icon-social.svg",
    },
  },
  {
    title: "SelfCare",
    timeframes: {
      Daily: {
        current: 0,
        previous: 1,
      },
      Weekly: {
        current: 2,
        previous: 2,
      },
      Monthly: {
        current: 7,
        previous: 11,
      },
    },
    icon: {
      url: "images/icon-self-care.svg",
    },
  },
];

const activityContainer = document.querySelector(".activities");
const period = document.querySelectorAll(".periods");
let color;
let selectedPeriod;
let obj;
let valueArray;
let prevTimeText;
const arrayCards = [];
let perDay;

// ---------- FUNCTION ----------
function createActivitiy(position, num) {
  obj = position.timeframes;
  valueArray = Object.values(obj);

  const cards = `
  <div style='background-color:var(--${position.title})' class="content">
        <div class="content_top">
          <img src="${position.icon.url}" alt="icon-${position.title}" />
        </div>
        <div class="content_bottom">
          <div class="top">
            <h2 class="title">${position.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
          </div>
          <div class="bottom">
            <h2 class="current_time">${valueArray[num].current}hrs</h2>
            <p class="previous_time"><span class='prev'>Last Week</span> - ${valueArray[num].previous}hrs</p>
          </div>
        </div>
  </div>`;

  activityContainer.insertAdjacentHTML("beforeend", cards);
  arrayCards.push(activityContainer);
}

function init() {
  data.forEach((da) => {
    document.querySelectorAll(".prev").forEach((el) => {
      el.textContent = "Yesterday";
    });

    createActivitiy(da, "0");
  });
}

init();

period.forEach((periodBtn) => {
  periodBtn.addEventListener("click", () => {
    removeSelectedPerdiod();
    periodBtn.classList.add("selected");
    perDay = periodBtn.dataset.info;

    activityContainer.innerHTML = "";
    data.forEach((da) => {
      document.querySelectorAll(".prev").forEach((el) => {
        if (perDay === "0") {
          el.textContent = "Yesterday";
        } else if (perDay === "1") {
          el.textContent = "Last Week";
        } else if (perDay === "2") {
          el.textContent = "Last Month";
        }
      });

      createActivitiy(da, perDay);
    });
  });
});

function removeSelectedPerdiod() {
  period.forEach((periodEL) => {
    if (periodEL.classList.contains("selected")) {
      periodEL.classList.remove("selected");
    }
  });
}

// console.log(arrayCards);

// const content = document.querySelector(".content");
// const curTime = document.querySelector(".current_time");
// content.style.backgroundColor = `var(--${color})`;

// prevTimeText = document.querySelector(".prev");
//   if (num === 0) {
//     prevTimeText.textContent = "Yesterday";
//   } else if (num === 1) {
//     prevTimeText.textContent = "Last Week";
//   } else if (num === 2) {
//     prevTimeText.textContent = "Last Month";
//   }
