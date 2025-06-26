import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductsPage({items}){

    const router = useRouter();
    const goToDetail = (itemId) =>{
        router.push(`/products.${itemId}`);
    }

    console.log(items);

    return(
        <>
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">This is the products</h1>
        <input
            type="text"
            placeholder="Search by title..."
            value={filter}
            onChange={handleSearch}
            className="w-full max-w-md p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ul>
            {filteredItems.map((i) => (
                <li key={i.id} className="border p-4 rounded shadow">
                <div className="flex flex-col items-center">
                    <Image
                    src={i.image}
                    alt={i.title}
                    width={200}
                    height={200}
                    className="object-cover rounded"
                    />
                    <div className="mt-2 text-center">
                    <p className="font-semibold">ID: {i.id}</p>
                    <p className="text-lg">{i.title}</p>
                    </div>
                    <button
                    onClick={() => goToDetail(i.id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                    View Details
                    </button>
                </div>
                </li>
            ))}
            </ul>
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