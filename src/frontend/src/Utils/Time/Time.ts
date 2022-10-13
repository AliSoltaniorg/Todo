class Time {
    time: string;
    private splittedTime: number[];
    constructor(time?: string) {
        this.time = time || '12:00:00';
        this.splittedTime = this.time.split(':').map((t) => {
            const ct = parseInt(t);
            if (!isNaN(ct)) return ct;
            else throw new Error('Value is not an integer');
        });
        this.hours = this.splittedTime[0];
        this.minute = this.splittedTime[1];
        this.seconds = this.splittedTime[2] || 0;
    }

    hours?: number;
    minute?: number;
    seconds?: number;

    toSecond() {
        const times = {
            hours: this.splittedTime[0],
            minutes: this.splittedTime[1],
            seconds: this.splittedTime[2] || 0,
        };

        return times.hours * 60 * 60 + times.minutes * 60 + times.seconds;
    }

    getHours() {
        return this.splittedTime[0];
    }

    getMinutes() {
        return this.splittedTime[1];
    }

    getSeconds() {
        return this.splittedTime[2] || 0;
    }

    toString() {
        return this.time;
    }

    static parse(seconds: number): Time {
        console.log('sec = ', seconds);
        const h = Math.floor(seconds / 3600).toString();
        const m = Math.floor((seconds % 3600) / 60).toString();
        const s = Math.floor((seconds % 3600) % 60).toString();
        return new Time(h + ':' + m + ':' + s);
    }
}

export default Time;
