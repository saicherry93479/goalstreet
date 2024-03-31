import React, { useState } from 'react'
import PlusIcon from '../assets/PlusIcon'
import Minus from '../assets/Minus'

const FAQNote = ({question,answer}) => {
    const [visible,setVisible]=useState(false)

 
  return (
    <div className="mb-2 w-full">
          <div className="border-b-[1.5px] border-black-500/10">
            <div className="flex items-center cursor-pointer" onClick={()=>setVisible(!visible)}>
              <h3 className="relative flex flex-1 items-center justify-between transition-all [&[data-state=closed]>#plus>svg:first-child]:rotate-90 py-4 md:py-10 text-left font-bold hover:no-underline md:text-2xl text-black">
                {question}

              </h3>
              {visible?<Minus></Minus>:<PlusIcon></PlusIcon>}
            </div>
            <div class={`pb-4 pt-0 text-black  ${visible?'':'hidden'} `}>
              {visible? answer:""}
            </div>
          </div>
        </div>
  )
}

export default FAQNote
