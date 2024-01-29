import { type } from "os";

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Desription Of Product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug ',
            options: {
                source: 'name',
                hotspot: true,
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'price_id',
            type: 'string',
            title: 'Stripe Price ID',
        },
        {
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}],
            title: 'Product Category'
        }

    ]
}