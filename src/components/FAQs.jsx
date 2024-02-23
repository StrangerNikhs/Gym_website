import React from 'react'
import { FaQuestion } from 'react-icons/fa6'
import SectionHead from './SectionHead'
import { faqs } from '../data'
import FAQ from './FAQ'

const FAQs = ({ question, answer }) => {
  return (
    <section className="faqs">
      <div className="container c">
        <SectionHead icon={ <FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {
            faqs.map(({ id, question, answer }) => {
              return <FAQ key={id} question={ question} answer={answer} />
            })
          }
        </div>
      </div>
    </section> 
  )
}

export default FAQs