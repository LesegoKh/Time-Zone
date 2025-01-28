const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
});

dayNameEl.innerText = date.toLocaleString("en", {
    weekday:"long"
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear()

// Times functionality here

// get references to elements in HTML

const timeSAST = document.querySelector(".saf .time-text:last-child");
const timeGMT = document.querySelector(".london .time-text:last-child");
const timeChicago = document.querySelector(".ny .time-text:last-child");
const timeAsia = document.querySelector(".asia .time-text:last-child");

// function for time zone

function updateTime() {
    const now = new Date();

    //SAST 
    timeSAST.innerText = now.toLocaleTimeString("en-ZA", {
        timeZone:"Africa/Johannesburg",
        hour12:false,
    });

    // GMT London
    timeGMT.innerText = now.toLocaleTimeString("en-GB", {
        timeZone:"Europe/London",
        hour12:false,
    });

    //US Central - Chicago
    timeChicago.innerText = now.toLocaleTimeString("en-US", {
        timeZone:"America/Chicago",
        hour12:false,  
    });

    // Asia - beijing
    timeAsia.innerText = now.toLocaleTimeString("zh-CN", {
        timeZone:"Asia/Shanghai",
        hour12:false,
    });
}

// Update display interval

setInterval(updateTime, 1000);

updateTime();