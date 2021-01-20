interface AccountSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountPerson {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

interface UserAccount extends AccountSystem, AccountPerson { }

/* 介面交集 */
interface I1 { a: string; b: number; }
interface I2 { b: number; c: boolean; }
interface I3 { a: string; c: string; }

interface I1x2 extends I1, I2 { }

interface I2x3 extends I2, I3 { }

interface I1x3 extends I1, I3 { }

interface I1x2x3 extends I1, I2, I3 { }

// 介面（Interface）的意義 —— 跟規格的概念很像，可以擴充設計、組裝出更複雜的功能規格

// 型別（Type）的意義 —— 代表靜態的資料型態，因此型別一但被定義出來則恆為固定的狀態。
// 儘管可以利用型態的複合（intersection 與 union）看似達到型別擴展的感覺，然而這個行為並不叫作型別擴展，而是創造出新的靜態型別

// Code against interface, not implementation:
// Decouple every part of your code and compose from them, instead of short - lived implementation.