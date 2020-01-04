export const isRequired = (field) => {
    throw new Error(`The field ${field} is required` )
}