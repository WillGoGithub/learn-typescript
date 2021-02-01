enum TransportTicketType {
    Train,
    MRT,
    Aviation,
};

type TimeFormat = [number, number, number];

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