import React from 'react'
import {faqs} from "../../assets/data/faqs"
import Faqitem from './Faqitem'

const Faqlist = () => {
  return (
    <div>
      <ul className='mt-[38px]'>
        {faqs.map((item,index)=><Faqitem item={item} key={index} index={index}></Faqitem>)}
      </ul>
    </div>
  )
}

export default Faqlist