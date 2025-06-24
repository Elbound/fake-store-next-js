import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
    <div>
      <Link href="/home">Home</Link>
      <Link href="/products">Products</Link>
    </div>
    
    <Component {...pageProps} />

    </>
  );
}
