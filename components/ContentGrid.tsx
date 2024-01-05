import Image from "next/image"
import {contentType} from '@/types'

function ContentGrid({content}:{content: contentType[]}) {
  return (
    <div className='content-grid'>
        <div className='content-container'>
        {
        content.map((e:contentType, i) => {
            if (i%2 == 0){
            return (
                <Image 
                className='content-image' 
                src={e.image} 
                alt={e.caption} 
                key={i} 
                height={100} 
                width={100} />
            )
            } 
        }
        )
        }
        </div>
        <div className='content-container'>
        {
        content.map((e, i) => {
            if (i%2 != 0){
            return (
                <Image 
                className='content-image' 
                src={e.image} 
                alt={e.caption} 
                key={i} 
                height={100} 
                width={100} />
            )
            } 
        })
        }
        </div>
    </div>
  )
}

export default ContentGrid