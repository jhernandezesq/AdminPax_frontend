import {format} from 'date-fns'

export const dateOfFormat = date => {
    return format(new Date(date), 'dd-m-yyyy')
}