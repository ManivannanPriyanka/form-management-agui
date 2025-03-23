export interface Elements {
    [key: string]: Element[];
}

export interface Element {
    name: string;
    description: string;
    type: string;
    icon: string;
}