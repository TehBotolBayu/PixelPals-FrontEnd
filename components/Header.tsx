import Image from "next/image"
import {SearchBar} from '@/components'

const Header = () => {
  return (
    <div className='header-container'>
        <Image src={'/pinterest-logo.png'} height={40} width={40} />       
        <SearchBar/>
        <Image src={'/menubar.svg'} height={40} width={40} />       
    </div>
  )
}

export default Header