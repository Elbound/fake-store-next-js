import { useRouter } from "next/router";

export default function ProductDetailPage({item}){
    const router = useRouter();
    const {slug} = router.query;
    return(
        <>
        <div>
            <h1>this is page of item id {slug}</h1>
            <p>item id: {item.id}</p>
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