import logoNlw from '../assets/nlw-icon.svg'
export function Header(){
  return(
    <div className='flex gap-5 items-center py-2'>
      <img src={logoNlw} alt="" />
      <nav className='flex gap-5'>
        <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
        <a href="" className='font-medium text-sm'>Participantes</a>
      </nav>
    </div>
  )
}