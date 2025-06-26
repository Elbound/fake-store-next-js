import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductDetailPage({ item }) {
    const router = useRouter();
    const { slug } = router.query;

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const savedFavorite = localStorage.getItem(`favorite_${slug}`);
        if (savedFavorite !== null) {
        setIsFavorite(JSON.parse(savedFavorite));
        }
    }, [slug]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    console.log(item);

    return (
        <>
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Product Details</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    </div>
                    <div className="w-full lg:w-1/2">
                    <p className="text-2xl font-semibold">{item.title}</p>
                    <p className="mt-2 text-lg">Price: ${item.price.toFixed(2)}</p>
                    <p className="mt-2">Category: {item.category}</p>
                    <p className="mt-4">Description: {item.description}</p>
                    <button
                        onClick={toggleFavorite}
                        className={`mt-6 px-4 py-2 rounded-md ${
                        isFavorite
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                        } transition-colors`}
                    >
                        {isFavorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                    
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}


export async function getStaticPaths() {
    const response = await fetch("https://fakestoreapi.com/products");
    const item = await response.json();
    const paths = item.map((i) => ({
        params: { slug: i.id.toString() },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
    const item = await response.json();
    return {
        props: {
            item,
        },
    };
}