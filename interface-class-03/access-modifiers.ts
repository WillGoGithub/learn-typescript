type UserAccount = {
    account: string;
    password: string;
    money: number;
}

// interface ATM {
//     users: UserAccount | undefined;
//     currentUser: UserAccount | undefined;

//     signIn(account: string, password: string): void;
//     signOut(): void;
//     deposit(amount: number): void;
//     withdraw(amount: number): void;
// }

interface AccountSystem {
    users: UserAccount[] | undefined;
    currentUser: UserAccount | undefined;

    signIn(account: string, password: string): void;
    signOut(): void;
}

interface TransactionSystem {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

interface ATM extends AccountSystem, TransactionSystem { }

// ===========
class RealATM implements ATM {
    users: UserAccount[] = [
        { account: 'A', password: '123', money: 1_000_000 },
        { account: 'B', password: '123', money: 2_000_000 },
        { account: 'C', password: '123', money: 3_000_000 },
    ];

    currentUser: UserAccount | undefined;

    signIn(account: string, password: string): void {
        this.currentUser = this.users.find(
            user => user.account === account &&
            user.password === password
        );

        if (!this.currentUser) {
            throw new Error("User not found.");
        }
    }

    signOut(): void {
        throw new Error("Method not implemented.");
    }

    deposit(amount: number): void {
        throw new Error("Method not implemented.");
    }

    withdraw(amount: number): void {
        throw new Error("Method not implemented.");
    }
}