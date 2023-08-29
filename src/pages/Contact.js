import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle, BiSolidInfoCircle } from 'react-icons/bi'
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">

            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7003.363692799083!2d77.37945019999998!3d28.639296000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692649641869!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" className='w-100 form-control' placeholder='comments' id="" cols="30" rows="4"></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title  mb-4">Get in touch with s </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Hno:267, Jammu , J&K</address>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5' />
                          <a href="tel:+91 9682151806 ">+91 9682151806</a>
                          </li>
                          <li className='mb-3 d-flex gap-15 align-items-center'>
                            <AiOutlineMail className='fs-5' />
                            <a href="mailto:britikanthal2@gmail.com">britikanthal2@gmail.com</a>
                            </li>
                            <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiSolidInfoCircle className='fs-5' />
                          <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                            </li>
                            </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact