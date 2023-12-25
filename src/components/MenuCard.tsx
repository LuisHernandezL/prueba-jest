import Link from "next/link"

type MenuCardProps = {
  name: string
}

export default function MenuCard({ name }: MenuCardProps) {

  
  return (
    
    
      <div className=' bg-slate-400 rounded-md p-5 h-[250px] w-[200px]  flex flex-col items-center justify-center'>
        <Link href={`/${name.toLocaleLowerCase()}`} >

        {name}
        </Link>
        
      </div>
  
  )
}
