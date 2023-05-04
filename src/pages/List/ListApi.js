import axios from "axios"

export async function fetchMobilApi(){
    const mobil = await axios('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')

    return mobil
}