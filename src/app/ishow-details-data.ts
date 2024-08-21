export interface IShowDetailsData { //This is the data received from API.
    show: {
        name: string,
        premiered: string,
        ended: string,
        image: {
            medium: string
        },
        summary: string
    }
}
