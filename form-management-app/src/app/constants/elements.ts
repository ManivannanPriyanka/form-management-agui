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
        type: 'textArea',
        name: 'Multi Line Text',
        description: 'Multi text area',
        icon: ''
    },
    {
        type: 'number',
        name: 'Integer',
        description: 'Integer type area',
        icon: ''
    }
    ],
    date: [
        {
            type: 'date',
            name: 'Date',
            description: 'Select date from date picker',
            icon: ''
        },
        {
            type: 'time',
            name: 'Time',
            description: 'Select time from time picker',
            icon: '' 
        },
        {
            type: 'dateAndTime',
            name: 'Date & Time',
            description: 'Select date and time from picker',
            icon: ''
        }
    ],
    multi: [
        {
            type: 'radio',
            name: 'Single Selection',
            description: 'Select signle option',
            icon: ''
        },
        {
            type: 'checkbox',
            name: 'Multi Selection',
            description: 'Select multiple options',
            icon: ''
        },
        {
            type: 'dropdown',
            name: 'Dropdown',
            description: 'Select options from dropdown',
            icon: ''
        }
    ],
    media: [
        {
            type: 'fileUpload',
            name: 'Upload',
            description: 'Upload documents/media files',
            icon: ''
        }
    ]


}