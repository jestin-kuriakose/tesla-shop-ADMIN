export interface Product {
    _id: number,
    title: string,
    sku: string,
    cat: string[],
    price: number,
    color: string[],
    storage: string[],
    condition: string[],
    variation: Variation[],
    createdAt: Date,
    updatedAt: Date,
    image: string,
    stock: number,
    active: boolean
}

interface Variation {
    sku: string,
    color: string,
    storage: string,
    condition: string,
    price: number,
    stock: number
}