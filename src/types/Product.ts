interface Price {
    value: number
    currency: string
}

export default interface Product {
    id: number
    name: string
    description: string
    longDescription: string
    imageURL: string
    rating: number
    releaseDate: number
    price: Price
    available: boolean
}