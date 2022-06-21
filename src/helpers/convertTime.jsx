export const convertTime = (time) => {
    return new Date(time).toLocaleDateString('es-mx', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
    })
}