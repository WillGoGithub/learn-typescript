enum Gender { Male, Female, Other };

interface UserInfo {
    id: number;
    name: string;

    birth: Date;
    interests: string[];
    
    gender: Gender;

    address: {
        country: string;
        city: string;
        postalCode: string;
    };

    logInfo(message: string): void;
}

// 單純函式
interface UpdateRecord {
    (id: number, newRecord: UserInfo): void;
}

// 基本 Interface 使用
interface Person {
    name: string;
    age: number;
    hasPet: boolean;
}

// 使用介面
const maxWell: Person = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};

const martin: Person = {
    name: 'Martin',
    hasPet: true,
};

const leo: Person = {
    name: 'Leo',
    age: 28,
    hasPet: false,
    job: 'DevOps',
};

const toby: Person = {
    name: 'Toby',
    age: 54,
    hasPet: 'aa'
};

