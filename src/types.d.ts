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

export interface UserData {
    name: string,
    "Active User": number
  }
  
export interface OrderDataType {
    _id: number,
    createdAt: string,
    amount: number,
    status: string
}

export interface UserRowType {
    _id: number,
    img: string,
    username: string,
    avatar: string,
    email: string,
    status: string,
    transaction: string,
}