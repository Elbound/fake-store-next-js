import Link from "next/link";

export default function HomePage(){
    return(
        <>
        <div>
            <h1 className="align-middle">hello world</h1>
            <p>welcome to store page. browse products here:</p>
            <Link href="/products" className="">Go to Products</Link>
        </div>
        
        </>
    );
}

