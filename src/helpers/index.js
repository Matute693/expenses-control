export const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
}


export const dateFormatter = date => {
    const newDate = new Date(date);
    const options = {
        yeat: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    console.log( newDate.toLocaleDateString('es-ES', options))
    return newDate.toLocaleDateString('es-ES', options);
}