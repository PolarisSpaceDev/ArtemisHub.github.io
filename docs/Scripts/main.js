

// Gets time for target date
    const targetTime = new Date("Sept, 1, 2027, 18:00:00").getTime();

// Updates every 1000 milliseconds (1s)
const countdownInterval = setInterval(() => {
    // Gets the current time
    var currentTime = new Date().getTime();
    
    var currentTimeAsDate = new Date(currentTime);
    // Calculates the time left between target and current time
    var difference = targetTime - currentTime;

    // Calculates milliseconds to years
    var y = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    // Calculates milliseconds to months
    var m = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4167));
    // Calculates milliseconds to days
    var d = Math.floor(difference / (1000 * 60 * 60 * 24) % 30.4167);
    // Calculates milliseconds to hours
    var h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // Calculates milliseconds to minutes
    var min = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    // Calculates milliseconds to seconds
    var s = Math.floor(difference % (1000 * 60) / 1000);

    document.getElementById("Years").innerHTML = "Years: " + y;
    document.getElementById("Months").innerHTML = "Months: " + m;
    document.getElementById("Days").innerHTML = "Days: " + d;
    document.getElementById("Hours").innerHTML = "Hours: " + h;
    document.getElementById("Minutes").innerHTML = "Minutes: " + min;
    document.getElementById("Seconds").innerHTML = "Seconds: " + s;

    document.documentElement.style.setProperty(--s, s);

    if (difference < 0) {
        clearInterval();
        document.getElementById("Years").innerHTML = "GO FOR LAUNCH!";
        document.getElementById("Months").innerHTML = null
        document.getElementById("Days").innerHTML = null
        document.getElementById("Hours").innerHTML = null
        document.getElementById("Minutes").innerHTML = null
        document.getElementById("Seconds").innerHTML = null
    }
},1000) 


// API practice
async function ArtemisIIData() {

    try {
        const artemisII = await fetch("https://lldev.thespacedevs.com/2.3.0/astronauts/");

        if(!artemisII.ok) {
            throw new Error("Error");
        }

        const result = await artemisII.json();
        console.log(result.results[9]);

        
    } catch(error) {
        console.error(error.message);
    }

    

    
}

ArtemisIIData()