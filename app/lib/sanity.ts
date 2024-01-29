import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: '0tu41il3',
    dataset: 'production',
    // apiVersion: '2023-03-25', 
    apiVersion: "2022-03-25",
    useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// export const dynamic = "force-dynamic";


//  export const revalidate = 60