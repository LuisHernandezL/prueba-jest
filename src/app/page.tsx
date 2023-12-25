
import MenuCard from '../components/MenuCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 content-center">
      <div className='flex flex-col gap-5 m-auto md:flex-row'>
        <MenuCard name='Listado' />
        <MenuCard name='Tasks' />
      </div>
    </main>
  )
}
