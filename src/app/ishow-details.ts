export interface IShowDetails {
    name: string
    yearStart: number, //changed to number to only collect year, but may revert back to Date
    yearEnd: number, 
    description: string
    image: string 
}
