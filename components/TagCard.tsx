'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function TagCard({kategori, url}:{kategori: string, url: string}) {
    const pathname = usePathname();
    
    const handleTag = () => {
        // alert(pathname + '\n' + '/home'+url);
    }
    
    return (
    <Link href={'/home'+url} className={clsx(
        'tagcard',
        {
            'bg-primary' : pathname === '/home'+url
        }
    )} onClick={handleTag}>
        {kategori}
    </Link>
  )
}

export default TagCard

