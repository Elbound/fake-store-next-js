import { useRouter } from "next/router";
import { useState } from "react";



export default function Home({items}) {

    const router = useRouter();
    const goToDetail = (itemId) =>{
        router.push(`/products.${itemId}`);
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
        <div>
            <h1 className="align-middle">This is the products</h1>
            <input 
              type="text" placeholder="Search by title..."
              value={filter} onChange={handleSearch}
              className="p-2 mb-4 border"
            />
            <div>
                <ul>
                    {filteredItems.map((i)=>{
                        return(
                            <li key={i.id}>

                                <div className="flex-1/2">
                                    <div>
                                        {/* <img src={i.image} alt="product image" /> */}
                                    </div>

                                    <div>
                                        <p>{i.id}</p>
                                        <p>{i.title}</p>
                                    </div>
                                    <button onClick={()=>goToDetail(i.id)}>View Details</button>
                                </div>

                            </li>
                        );
                    })}
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