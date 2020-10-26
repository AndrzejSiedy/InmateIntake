export interface InmateLocation {
    dateTime: Date;
    location: string;
}

export interface Inmate {
    id: number;
    title: string;
    name: string;
    gender: string;
    nationality: string;
    dob: Date;
    cellNumber: number;
    intakeDateTime: Date;
    currentLocation: string;
    locationHistory: InmateLocation[];
    imgUrl: string;
}


export interface ServiceResponse<T> {
    total: number;
    data: Array<T>;
}
