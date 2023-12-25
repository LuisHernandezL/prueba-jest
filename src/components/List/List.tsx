import Image from "next/image"


async function getList() {
  const res = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements') 
  const data = await res.json()
  return data
}

interface User {
  id: string
  name: string
  avatar: string
  createdAt:string
}


export default async function List() {
  const users = await getList()



  return (

    <div className='grid grid-cols-5 mt-10 gap-6'>
        {
          users.map((user:User) => (

            <div className='bg-blue-200 p-5 mt-3 rounded-md shadow-md w-60' key={user.id}>
              <h1 className='text-2xl'>{user.name}</h1>
              {/* <Image src={user.avatar} alt={user.name} width={200} height={200} className='rounded-md'/> */}
              <p className='text-xl'>{`Created: ${new Date(user.createdAt).toLocaleDateString('en-US')}`}</p>
            </div>
          ))


        }
    </div>
  )
}
