import { Elements } from "../interfaces/elements.interface";

export const ELEMENTS: Elements = {
    text: [
    {
        type: 'text',
        name: 'Single Line Text',
        description: 'Single text area',
        icon: 'text-icon'
    },
    {
        type: 'textarea',
        name: 'Multi Line Text',
        description: 'Multi text area',
        icon: 'multi-line-icon'
    },
    {
        type: 'number',
        name: 'Integer',
        description: 'Integer type area',
        icon: 'number-icon'
    }
    ],
    date: [
        {
            type: 'date',
            name: 'Date',
            description: 'Select date from date picker',
            icon: 'date-icon'
        },
        {
            type: 'time',
            name: 'Time',
            description: 'Select time from time picker',
            icon: 'time-icon' 
        },
        {
            type: 'dateandtime',
            name: 'Date & Time',
            description: 'Select date and time from picker',
            icon: 'date-and-time-icon'
        }
    ],
    multi: [
        {
            type: 'radio',
            name: 'Single Selection',
            description: 'Select signle option',
            icon: 'radio-icon'
        },
        {
            type: 'checkbox',
            name: 'Multi Selection',
            description: 'Select multiple options',
            icon: 'checkbox-icon'
        },
        {
            type: 'dropdown',
            name: 'Dropdown',
            description: 'Select options from dropdown',
            icon: 'dropdown-icon'
        }
    ],
    media: [
        {
            type: 'file',
            name: 'Upload',
            description: 'Upload documents/media files',
            icon: 'upload-icon'
        }
    ]


}