import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";



export default function Home({items}) {

    const router = useRouter();
    const goToDetail = (itemId) =>{
        router.push(`/products/${itemId}`);
    }

    const [filter, setFilter] = useState('');

    const filteredItems = items.filter((i)=>{
      return i.title.toLowerCase().includes(filter.toLowerCase());
    });

    const handleSearch = (e) => {
      setFilter(e.target.value);
    };

    console.log(items);

    return(
        <>
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">This is the Products</h1>
                <input
                type="text"
                placeholder="Search by title..."
                value={filter}
                onChange={handleSearch}
                className="w-full max-w-md p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((i) => (
                    <div
                    key={i.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
                    >
                    <Image
                        src={i.image}
                        alt={i.title}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex-grow">
                        <p className="text-lg font-medium mt-2 line-clamp-2">{i.title}</p>
                    </div>
                    <div className="p-4 pt-0">
                        <button
                        onClick={() => goToDetail(i.id)}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                        View Details
                        </button>
                    </div>
                    </div>
                ))}
                </div>
                {filteredItems.length === 0 && (
                <p className="text-center text-gray-500 mt-4">No items match your search</p>
                )}
            </div>
        </div>
        </>
    );
}

export async function getStaticProps(){
    const response = await fetch ('https://fakestoreapi.com/products');
    const items = await response.json();

    return{
        props:{
            items,
        }
    }
}