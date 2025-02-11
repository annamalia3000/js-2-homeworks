class AlarmClock {
    constructor() {
       this.alarmCollection = [];
       this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        };

        if (this.alarmCollection.some((searchingTime) => searchingTime.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall: true});

    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(newTime => newTime.time !== time);

    }

    getCurrentFormattedTime() {
        const timeFormat = new Date;
        return timeFormat.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) ;
    }

    start() {
        if (this.intervalId) {
            return;
        }

        setInterval(() => {
            this.alarmCollection.forEach(element => {
                if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                    element.canCall = false;
                    element.callback();
                }
            });
        }, 1000);     
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true)
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}