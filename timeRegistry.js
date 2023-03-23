const MINUTES_PER_HOUR = 60;

class TimeRegistry {
    
    constructor(timestamp) {
        const timeParts = timestamp.split(":");
        this.hours = parseInt(timeParts[0]);
        this.minutes = parseInt(timeParts[1]);
    }

    getDurationInMinutes(timeRegistry) {
        const hourDelta = timeRegistry.getHours() - this.hours;
        const minuteDelta = timeRegistry.getMinutes() - this.minutes;

        return (hourDelta * MINUTES_PER_HOUR) + minuteDelta;
    }

    addDurationInMinutes(duration) {
        const combinedMinutes = this.minutes + duration;
        const durationHours = Math.floor(combinedMinutes / MINUTES_PER_HOUR);
        const remainingMinutes = combinedMinutes - (durationHours * MINUTES_PER_HOUR);

        const combinedHours = this.hours + durationHours;

        return new TimeRegistry(combinedHours + ":" + remainingMinutes);
    }

    getPrettyTime() {
        let prettyHours = this.hours;
        let ampm = "AM";

        if (prettyHours > 12) {
            prettyHours -= 12;
            ampm = "PM";
        }

        let prettyMinutes = 0;
        if (this.minutes < 10) {
            prettyMinutes = "0" + this.minutes;
        } else {
            prettyMinutes = this.minutes;
        }

        return prettyHours + ":" + prettyMinutes + " " + ampm;
    }

    getPrettyHours() {
        return this.hours > 12 ? this.hours - 12 : this.hours;
    }

    getHours() {
        return this.hours;
    }

    getMinutes() {
        return this.minutes;
    }
}

module.exports = {
    TimeRegistry
}
