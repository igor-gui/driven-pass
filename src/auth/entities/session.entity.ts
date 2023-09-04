export class Session {
    private readonly _token: string;
    private readonly _userId: number;

    constructor(token: string, userId: number){
        this._token = token;
        this._userId = userId;
    }

    get userId() {
        return this._userId;
    }

    get token(){
        return this._token;
    }
}