export type Submarine = {
    id: string;
    name: string;
    state: SubmarineState;
}

export enum SubmarineState {
    shown,
    hidden,
    selfHidden
}