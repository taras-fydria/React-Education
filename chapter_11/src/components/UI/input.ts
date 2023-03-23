enum EInput {
    number = 'number',
}

interface IInputComponent {
    id: string
    label: string,
    input: IInput
}

interface IInput {
    id: string,
    type: EInput.number,
    min: string,
    max: string,
    step: string,
    defaultValue: string
}


export {
    EInput,
    IInput,
    IInputComponent
}