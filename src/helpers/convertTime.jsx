export const convertTime = time => {
    return new Date(time).toLocaleDateString('en-US', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZoneName: 'short'
    })
}