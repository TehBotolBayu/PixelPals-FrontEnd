import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='px-4 pt-14 pb-24 bg-dark min-h-screen'>
        <div className='back-button'>
            <Image
            src='/back.svg'
            height={10}
            width={10}
            />
        </div>
        <div className='w-full'>
            <Image 
            src={'/user/content/user (1).jpg'} 
            width={100} 
            height={100}
            className='large-image'
            quality={100}
            />
            <div className='save-button'>
                <Image
                src='/save.svg'
                width={15}
                height={15}
                />
            </div>
        </div>
        <div className='creator-info py-4'>
            <div className='creator-info'>
                <div>
                    <Image
                    src={'/user/content/user (1).jpeg'}
                    height={100}
                    width={100}
                    className='profile-picture w-12 h-12'
                    alt='profile-picture'
                    />
                </div>
                <div className='ml-2'>
                    <div className='text-[16px] font-semibold text-white'>nama profil</div>
                    <div className='text-[12px] text-gray-200'>follower</div>
                </div>
            </div>
            <div className='creator-info'>
                <button className='button-small'>Follow</button>
                <div className='ml-2'>
                    <Image
                    src='/three-dot.svg'
                    height={7}
                    width={7}
                    />
                </div>
            </div>
        </div>
        <h1 className='content-title'>
            Lorem ipsum dolor sit amet.
        </h1>
        <p className='content-description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Quis recusandae ut aliquam repellat molestiae? Quas, p
            rovident explicabo. Dolorum distinctio porro doloribus,
            eius, labore suscipit, delectus illo saepe excepturi 
            vit ae ea?
        </p>
    </div>
  )
}

export default page