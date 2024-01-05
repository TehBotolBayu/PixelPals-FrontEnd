import Image from "next/image"
// create home menubar message user

function BottomNav() {
  return (
    <>
        <section className='bottomnav-container'>
            <div className='nav-icon text-red &'>
                <Image className="brightness-50 hover:brightness-[3]" src={'/home.svg'} width={30} height={30} />
            </div>
            <div className='nav-icon'>
                <Image className="brightness-50 hover:brightness-[3]" src={'/search.svg'} width={30} height={30} />
            </div>
            <div className='nav-icon'>
                <div className="ring-create">
                    <Image className="hover:brightness-[3]" src={'/create.svg'} width={30} height={30} />
                </div>
            </div>
            <div className='nav-icon'>
                <Image className="brightness-50 hover:brightness-[3]" src={'/message.svg'} width={30} height={30} />
            </div>
            <div className='nav-icon'>
                <Image className="brightness-50 hover:brightness-[3]" src={'/user.svg'} width={30} height={30} />
            </div>
        </section>
    </>
  )
}

export default BottomNav