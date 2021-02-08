enum TransportTicketType {
    Train,
    MRT,
    Aviation,
};

type TimeFormat = [number, number, number];

type TrainStation = {
    name: TrainStops,
    nextStop: TrainStops,
    duration: TimeFormat,
};

enum TrainStops {
    Pingtung,
    Kaohsiung,
    Tainan,
    Taichung,
    Hsinchu,
    Taipei
};

let a = [TrainStops.Pingtung, { nextStop: TrainStops.Kaohsiung, duration: [2, 30, 0] }];

class TrainTicket {
    private trainStationsDetail: Map<TrainStation> = new Map([
        [TrainStops.Pingtung, { nextStop: TrainStops.Kaohsiung, duration: [2, 30, 0] }],
        { name: TrainStops.Kaohsiung, nextStop: TrainStops.Tainan, duration: [1, 45, 30] },
        { name: TrainStops.Tainan, nextStop: TrainStops.Taichung, duration: [3, 20, 0] },
        { name: TrainStops.Taichung, nextStop: TrainStops.Hsinchu, duration: [2, 30, 30] },
        { name: TrainStops.Hsinchu, nextStop: TrainStops.Taipei, duration: [1, 30, 30] },
    ]);

    private deriveDuration(): TimeFormat {
        const { startingPoint, destination } = this;
        let time: TimeFormat = [0, 0, 0];

        return time;
    }
}

class TicketSystem {
    constructor(
        private type: TransportTicketType,
        private startingPoint: string,
        private destination: string,
        private departureTime: Date,
    ) { }

    private deriveDuration(): TimeFormat {
        return [1, 0, 0];
    }

    private deriveArrivalTime(): Date {
        const { departureTime } = this;
        const [hours, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        const durationMilliseconds = durationSeconds * 1000;
        const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;

        return new Date(arrivalMilliseconds);
    }

    public getTicketInfo() {
        const ticketName = TransportTicketType[this.type];
        const arrivalTime = this.deriveArrivalTime();

        console.log(`
            Ticket Type: ${ ticketName }
            Station: ${ this.startingPoint} - ${this.destination }
            Departure: ${ this.departureTime }
            Arrival: ${ arrivalTime }
        `);
    }
}

const ticket = new TicketSystem(
    TransportTicketType.Train,
    'Tainan',
    'Kaohsiung',
    new Date(2019, 8, 1, 9, 0, 0),
);