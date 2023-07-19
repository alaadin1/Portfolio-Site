import React from 'react'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


const FeedbackCard = ({index,testimonial, name,designation, company, image}) =>(
  <motion.div>


  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2x1 min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What other says
          </p>
          <h2 className={styles.sectionHeadText}>
            TEST
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex felsx-wrap gap-7`}>
        {testimonials.map((testimonial, index) =>(
          <FeedbackCard />
          
        ))}

      </div>
    </div>
  )
}


export default Feedbacks