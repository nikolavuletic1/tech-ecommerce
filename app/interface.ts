

// export interface simplifiedProduct {
//     [x: string]: string | StaticImport;
//     _id: string,
//     imageUrl: string,
//     price: number,
//     slug: string,
//     name: string,
//     categoryName: string
// }

export interface simplifiedProduct {
    _id: string,
    imageUrl: string,
    price: number,
    slug: string,
    name: string,
    categoryName: string
}

export interface fullProduct {
    _id: string,
    images: any,
    price: number,
    slug: string,
    name: string,
    categoryName: string,
    description: string,
    price_id: string,
}
