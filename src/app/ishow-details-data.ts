export interface IShowDetailsData {//data received from API
    show: {
        name: string,
        premiered: string,
        ended:string,
        image: {
          medium: string
        },
        summary: string
    }
}
