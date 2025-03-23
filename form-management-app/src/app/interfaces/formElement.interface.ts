export interface FormElement {
    type: string;
    label: string;
    description: string;
    placeholder?: string;
    required?: boolean;
    options?: option[];
    readOnly?: boolean;
    defaultValue?: string;
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
}

export interface option {
    value: string;
    id: string;
}