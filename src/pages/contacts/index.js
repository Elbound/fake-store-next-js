import Image from 'next/image';

export default function ContactPage() {
    return (
        <>
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
                <table className="mx-auto text-left">
                <tbody>
                    <tr>
                    <td className="p-1">
                        <Image src="/images/facebook.png" alt="Facebook" width={30} height={30} />
                    </td>
                    <td className="p-1">
                        <span className="text-gray-700">fakestoreofficial.fb</span>
                    </td>
                    </tr>
                    <tr>
                    <td className="p-1">
                        <Image src="/images/instagram.png" alt="Instagram" width={30} height={30} />
                    </td>
                    <td className="p-1">
                        <span className="text-gray-700">fakestore.ig</span>
                    </td>
                    </tr>
                    <tr>
                    <td className="p-1">
                        <Image src="/images/email.png" alt="Email" width={30} height={30} />
                    </td>
                    <td className="p-1">
                        <span className="text-gray-700">fakestore@gmail.com</span>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
        </>
    );
}