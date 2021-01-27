type UserAccount = {
    account: string;
    password: string;
    money: number;
}

interface ATM {
    users: UserAccount | undefined;
    currentUser: UserAccount | undefined;

    deposit(amount: number): void;
    withdraw(amount: number): void;
}