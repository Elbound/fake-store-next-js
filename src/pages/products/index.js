

export default function ProductsPage({users}){
    console.log(users);
    return(
        <>
        <div>
            <h1 className="align-middle">This is the products</h1>
            <div>
                <ul>
                    {users.map((user)=>{
                        return(
                            <li>
                                {user.username}
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
    const response = await fetch ('https://fakestoreapi.com/users');
    const users = await response.json();

    return{
        props:{
            users,
        }
    }
}