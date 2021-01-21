type AccountUserType = {
    readonly email: string,
};

interface AccountUserInterface {
    readonly email: string,
};

let aType: AccountUserType = {
    email: '123',
};

aType.email;
aType.email = '321';

