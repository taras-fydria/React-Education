export enum EInput {
    number = 'number',
}

export interface IInputComponent {
    id: string
    label: string,
    input: IInput
}

export interface IInput {
    id: string,
    type: EInput.number,
    min: string,
    max: string,
    step: string,
    defaultValue: string
}