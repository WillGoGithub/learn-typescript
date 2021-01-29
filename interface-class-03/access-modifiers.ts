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
    constructor(private users: UserAccount[]) { }

    private currentUser: UserAccount | undefined;

    public signIn(account: string, password: string): void {
        this.currentUser = this.users.find(
            user => user.account === account &&
            user.password === password
        );

        if (!this.currentUser) {
            throw new Error("User not found.");
        }
    }

    public signOut(): void {
        this.currentUser = undefined;
    }

    public deposit(amount: number): void {
        if (!this.currentUser) {
            throw new Error('No user signed in !');
        }

        this.currentUser.money += amount;
    }

    public withdraw(amount: number): void {
        if (!this.currentUser) {
            throw new Error('No user signed in !');
        }

        this.currentUser.money -= amount;
    }
}

// 若宣告某類別 C，則裡面的成員變數 P 或成員方法 M 被註記為：
// public 模式時：P 與 M 可以任意在類別內外以及繼承 C 的子類別使用
// private 模式時：P 與 M 僅僅只能在當前類別 C 內部使用
// protected 模式時： P 與 M 除了當前類別 C 內部使用外，繼承 C 的子類別也可以使用