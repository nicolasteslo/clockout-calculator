const { TimeRegistry } = require('./timeRegistry')

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Clock-in:  ', (clockIn) => {
    rl.question('Lunch clock-in:  ', (lunchClockIn) => {
        rl.question('Lunch return time:  ', (lunchReturn) => {

            const MINUTES_PER_WORKDAY = 8 * 60;

            const startTime = new TimeRegistry(clockIn);
            const startBreak = new TimeRegistry(lunchClockIn);
            const endBreak = new TimeRegistry(lunchReturn);

            const beforeBreakDuration = startTime.getDurationInMinutes(startBreak);
            const clockoutTime = endBreak.addDurationInMinutes(MINUTES_PER_WORKDAY - beforeBreakDuration);

            console.log(`To work 8 hours, clock out at ${clockoutTime.getPrettyTime()}`)

            rl.close();
        });
    });
});