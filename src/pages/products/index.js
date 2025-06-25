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
        <div>
            <h1 className="align-middle">This is the products</h1>
            <div>
                <ul>
                    {items.map((i)=>{
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