import logo from '../assets/logo.svg'
import {GrMenu, GrClose} from 'react-icons/gr'
const Header = () => {
  return (
    <>
    <nav className='flex px-14'>
      <img src={logo}/>
    <div className='w-full'>
      <GrMenu className='w-10 h-10 hidden md:hidden'/>
      <div className='flex justify-between pl-12 pr-24'>
        <ul className='flex gap-2 text-lg'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul  className='flex gap-2 text-lg'>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
    </nav>
    
    </>
  )
}

export default Header