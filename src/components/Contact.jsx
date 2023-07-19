
import React, {useState, useRef }from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


// template_iof7v8u
// service_v7s207c
// mAH0r6wWJ--9dS3KE

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email:'', 
    message:'',
  })
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)


  const temp_ID = 'template_iof7v8u'
  const service_ID = 'service_v7s207c'
  const public_key = 'mAH0r6wWJ--9dS3KE'


    
    emailjs.send(
      service_ID, 
      temp_ID,
      {
        from_name:form.name,
        to_name: 'Alaa',
        from_email: form.email,
        to_email: 'agag.alaa@gmail.com',
        message:form.message,
      },
      public_key
      ).then(() =>{
        setLoading(false)
        alert("Thank you. I will get back to you as soon as possible!")

        setForm({
          name:'',
          email:'',
          message: '',
        })
      }, (error) =>{
        setLoading(false)
        console.log(error)
        alert('Something went wrong, try again.')
      })


  }

 
 
 
  return (
    <div className='xl:mt-2 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >

          {/* Name portion */}
          <label className='flex flex-col'>
            <span className='tect-white font-medium mb-4'>
              Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Name?'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outlined-none border-none font-medium'
            />
          </label>

          {/* Email portion */}
          <label className='flex flex-col'>
            <span className='tect-white font-medium mb-4'>
              Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email?'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outlined-none border-none font-medium'
            />
          </label>

          {/* Name portion */}
          <label className='flex flex-col'>
            <span className='tect-white font-medium mb-4'>
              Message
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Send me a message'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outlined-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            
          >
            {loading ? 'Sending...': 'Send'}

          </button>




        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2 , 1)}
        className='xl:flex-1 xh:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')