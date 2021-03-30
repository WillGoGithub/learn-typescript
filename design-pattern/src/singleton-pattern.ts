/*
 * SingletonPerson 為使用單例模式的類別。
 * 單例模式的實踐方法 —— 必須具備私有建構子，防止外部的人私自建構更多該類別的物件
 */
class SingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) { }

    private static Instance: SingletonPerson =
        new SingletonPerson('Will', 20, false);

    static getInstance(): SingletonPerson {
        return this.Instance;
    }
}

const uniquePerson = SingletonPerson.getInstance();
console.log(uniquePerson);
console.log(uniquePerson.name);
console.log(uniquePerson.age);
console.log(uniquePerson.hasPet);

/*
 * 由於單例模式是在剛初始化類別的時候就順便將單子給建構好。
 * 有時候會遇到單子建構過程中會耗費龐大的資源
 */
class LazySingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) { }

    private static Instance: LazySingletonPerson | null = null;

    static getInstance(): LazySingletonPerson {
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('Will', 20, false);
        }

        return this.Instance;
    }
}
