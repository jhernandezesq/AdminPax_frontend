export const convertTimeDay = (time) => {
    return new Date(time).toLocaleDateString('es-mx', {
        weekday: 'long',
    })
}