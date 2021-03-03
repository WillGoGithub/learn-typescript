enum Gender {
    Male,
    Female,
    Other,
}

type AccountInfo = {
    account: string;
    password: string;
    nickname?: string;
    birth?: Date;
    gender?: Gender;
    isSubscribed: boolean;
};

let accountTest: AccountInfo = {
    account: 'test',
    password: '~',
    isSubscribed: false,
};

// Intersection 複合型別

type AccountSystem = {
    account: string;
    password: string;
    isSubscribed: boolean;
};

type AccountPersonal = {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
};

type PersonalAccount = AccountSystem & AccountPersonal;

let accountTest2: PersonalAccount = {
    account: 'test2',
    password: '~',
    birth: new Date(2020, 0, 1),
    isSubscribed: true,
};
