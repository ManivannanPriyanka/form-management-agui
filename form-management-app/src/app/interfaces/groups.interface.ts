import { FormElement } from "./formElement.interface";

export interface Group {
    id: string;
    name: string;
    description: string;
    formElements: FormElement[];
    isDefault?: boolean;
}