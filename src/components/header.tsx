import logoNlw from '../assets/nlw-icon.svg'
import { NavLink } from './navlink'
export function Header() {
  return (
    <div className="flex gap-5 items-center py-2">
      <img src={logoNlw} alt="" />
      <nav className="flex gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
