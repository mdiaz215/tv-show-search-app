export interface IShowDetails { //This is the data we want to show.
    showName: string //changed from name to showName
    yearStart: string | number, //changed to string or number to handle null text
    yearEnd: string | number, 
    description: string
    image: string 
}
