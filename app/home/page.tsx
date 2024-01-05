import Image from 'next/image';
import { ContentGrid } from '@/components';
import {content} from '@/utils/data'


export default function Home() {
  return (
    <ContentGrid content={content}/>
  )
}