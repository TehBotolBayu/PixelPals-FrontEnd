import Image from "next/image"

function page() {
  return (
    <div className='bg-home'>
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
        <main className="profile-content">

        </main>
    </div>
  )
}

export default page