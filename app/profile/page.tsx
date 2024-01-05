import Image from "next/image"
import {content} from '@/utils/data'
import { ContentGrid, BottomNav } from "@/components"

function page() {
  return (
    <>
    <div className='bg-home'>
        <div className='back-button flex text-white items-center'>
            <Image
            src='/back.svg'
            height={10}
            width={10}
            />
            <p className="ml-4">
            Profile
            </p>
        </div>
        <div className="flex flex-col items-center">
            <div className="my-5">
                <Image
                src='/user/content/user (1).jpeg'
                height={100}
                width={100}
                alt='profilephoto'
                className="profile-picture w-20 h-20"
                />
            </div>
            <div className="mb-5 text-center">
                <h1 className="font-semibold text-white text-md">Username</h1>
                <p className="text-sm text-gray-300">bio</p>
            </div>
        </div>
        <section className="user-metric">
            <div className="text-center">
                <div className="text-gray-300 text-sm mb-2">Followers</div>
                <div className="text-sm font-bold text-white">150</div>
            </div>
            <div className="text-center">
                <div className="text-gray-300 text-sm mb-2">Following</div>
                <div className="text-sm font-bold text-white">150</div>
            </div>
        </section>
        <aside className="content-nav-container">
            <div className="content-nav shadow-border">
                <img
                src='/photos.svg'
                className="content-nav-logo"
                />
            </div>
            <div className="content-nav saved-content">
                <img
                src='/save.svg'
                className="content-nav-logo"
                />
            </div>
        </aside>
        <main className="profile-content">
            <ContentGrid content={content}/>
        </main>
    </div>
    <BottomNav/>

    </>
  )
}

export default page