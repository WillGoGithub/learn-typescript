enum TransportTicketType {
    Train,
    MRT,
    Aviation,
}

type TimeFormat = [number, number, number];

type TrainStation = {
    // name: TrainStops,
    nextStop: TrainStops;
    duration: TimeFormat;
};

enum TrainStops {
    Pingtung,
    Kaohsiung,
    Tainan,
    Taichung,
    Hsinchu,
    Taipei,
}

class TicketSystem {
    constructor(
        private type: TransportTicketType,
        protected startingPoint: TrainStops,
        protected destination: TrainStops,
        private departureTime: Date
    ) {}

    protected deriveDuration(): TimeFormat {
        return [1, 0, 0];
    }

    private deriveArrivalTime(): Date {
        const { departureTime } = this;
        const [hours, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        const durationMilliseconds = durationSeconds * 1000;
        const arrivalMilliseconds =
            departureTime.getTime() + durationMilliseconds;

        return new Date(arrivalMilliseconds);
    }

    public getTicketInfo() {
        const ticketName = TransportTicketType[this.type];
        const arrivalTime = this.deriveArrivalTime();

        console.log(`
            Ticket Type: ${ticketName}
            Station: ${TrainStops[this.startingPoint]} - ${
            TrainStops[this.destination]
        }
            Departure: ${this.departureTime}
            Arrival: ${arrivalTime}
        `);
    }
}

class TrainTicket extends TicketSystem {
    constructor(
        startingPoint: TrainStops,
        destination: TrainStops,
        departureTime: Date
    ) {
        super(
            TransportTicketType.Train,
            startingPoint,
            destination,
            departureTime
        );
    }

    private trainStationsDetail: Map<TrainStops, TrainStation> = new Map([
        [
            TrainStops.Pingtung,
            { nextStop: TrainStops.Kaohsiung, duration: [2, 30, 0] },
        ],
        [
            TrainStops.Kaohsiung,
            { nextStop: TrainStops.Tainan, duration: [1, 45, 30] },
        ],
        [
            TrainStops.Tainan,
            { nextStop: TrainStops.Taichung, duration: [3, 20, 0] },
        ],
        [
            TrainStops.Taichung,
            { nextStop: TrainStops.Hsinchu, duration: [2, 30, 30] },
        ],
        [
            TrainStops.Hsinchu,
            { nextStop: TrainStops.Taipei, duration: [1, 30, 30] },
        ],
    ]);

    protected deriveDuration(): TimeFormat {
        const { startingPoint, destination } = this;

        if (!this.isStopExist([startingPoint, destination])) {
            throw new Error('Wrong stop! Please check again!');
        }

        let time: TimeFormat = [0, 0, 0];
        let isStopFound = false;

        for (const [
            stationName,
            detail,
        ] of this.trainStationsDetail.entries()) {
            if (!isStopFound && stationName === startingPoint) {
                isStopFound = true;
                time = this.addTime(time, detail.duration);
            } else if (isStopFound) {
                time = this.addTime(time, detail.duration);

                if (detail.nextStop === destination) break;
            }
        }

        return this.convertTime(time);
    }

    private isStopExist(stops: TrainStops[]): boolean {
        return stops.every((stop) => this.trainStationsDetail.has(stop));
    }

    private addTime(time: TimeFormat, duration: TimeFormat): TimeFormat {
        let temp = time;
        temp[0] += duration[0];
        temp[1] += duration[1];
        temp[2] += duration[2];

        return temp;
    }

    private convertTime(time: TimeFormat): TimeFormat {
        let temp = time;

        temp[1] += ~~(temp[2] / 60);
        temp[2] %= 60;
        temp[0] += ~~(temp[1] / 60);
        temp[1] %= 60;

        return temp;
    }
}

const ticket = new TicketSystem(
    TransportTicketType.Train,
    TrainStops.Tainan,
    TrainStops.Hsinchu,
    new Date(2019, 8, 1, 9, 0, 0)
);

ticket.getTicketInfo();
