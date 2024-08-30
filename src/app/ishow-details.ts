export interface IShowDetails { //This is the data we want to show.
    name: string //changed from name to showName
    premiered: number, //changed to number to only collect year
    ended: number, 
    summary: string
    image: string 
}