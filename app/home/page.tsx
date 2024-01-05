import Image from 'next/image';
import { ContentGrid } from '@/components';
import {contentType} from '@/types';

const content: contentType[] = [
  {
    image:'/user/content/user (7).png',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (1).jpeg',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (3).jpeg',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (6).png',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (1).jpg',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (1).png',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (1).webp',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (8).png',
    caption: 'random caption',
  },
  {
    image:'/user/content/user (9).PNG',
    caption: 'random caption',
  },
]

export default function Home() {
  return (
    <ContentGrid content={content}/>

  )
}