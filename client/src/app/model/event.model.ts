export class Event {
    _id: string;
    title: string;
    type: string;
    description: string;
    price: Number;
    start: string;
    end: string;
    postDate: string;
    regisDate: string;
    cancel: boolean;
    regisCloseDate: string;
    venue: String;
    country: String;
    sponsors: Array<Object>;
    speakers: Array<Object>;
    users: Array<Object>;
}