import axios from 'axios'
const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby"
const API_KEY="Your-API_KEY"
const config = {
    headers:{
        'content-type':'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':['places.displayName',
        'places.formattedAddress',
        'places.location',
        'places.attractionOptions',
        'places.photo',
        'places.shortFormattedAddress',
        'places.id'
    ]
    }
}
const newNearByPlace = (data) => axios.post(BASE_URL,data,config)
export default{
    newNearByPlace,
    API_KEY
}