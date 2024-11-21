"use client"
import React from 'react'
import { BiLogoInstagram, BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight, BiTrip } from "react-icons/bi";
import { GiPalmTree } from "react-icons/gi";
import { PiBrowserFill, PiFacebookLogoFill, PiInstagramLogoFill, PiLinkBold, PiMailboxFill, PiTwitterLogoFill } from "react-icons/pi";
import { RiGlobalFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { TbBrandLinktree } from "react-icons/tb";
import { motion } from 'framer-motion';
import { GoNorthStar } from "react-icons/go";

const page = () => {
  return (
    <>
      <div className="container-fluid px-0 coming-soon-header">
        <div className="container py-3 d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            <motion.h4
              className="text-center text-uppercase text-white mb-0 d-flex justify-content-center align-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BiTrip className='me-2 color-tertary' />
              Explore India
            </motion.h4>
          </div>
          <hr />
        </div>
      </div>

      <div className="container-fluid bg-black home-land">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <motion.h4
              className="text-center text-white p-3 rounded-5 w-auto mb-4 fw-normal text-capitalize"
              style={{ border: '1px solid var(--color-gray)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GoNorthStar className='color-tertary mx-2' />crafting <strong>something delightful</strong> for you! <GoNorthStar className='color-tertary mx-2' />
            </motion.h4>
            <motion.h1
              className="mb-3 fw-bold text-center text-uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Coming Soon
            </motion.h1>
            <motion.h3
              className="text-center text-white p-3 rounded-5 w-auto mb-4 fw-normal text-capitalize"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get Ready for an <strong>exclusive experience</strong>!
            </motion.h3>
            <motion.p
              className="text-center color-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Reach Out to Us for further Assistance
            </motion.p>

            <div className="py-2 d-flex justify-content-center align-items-center flex-wrap gap-2">
              <motion.a
                href='https://rajasthantourpackages.in/'
                className='bg-black rounded-5 d-flex justify-content-center align-items-center p-2 gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <RiGlobalFill className='icon bg-white fs-2 rounded-5 p-2 color-tertary' />
                <p className='mb-0 pe-2'>www.rajasthantourpackages.in</p>
              </motion.a>

              <motion.a
                href='https://rajasthantourpackages.in/'
                className='bg-black rounded-5 d-flex justify-content-center align-items-center p-2 gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <RiMailFill className='icon bg-white fs-2 rounded-5 p-2 color-tertary' />
                <p className='mb-0 pe-2'>mail@rajasthantravelhelpline.com</p>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 coming-soon-footer">
        <div className="container py-3 d-flex justify-content-center align-items-center flex-column">
          <motion.p
            className="text-center color-border mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            © 2024 | Rajasthan Travel Helpline. All Rights Reserved.
          </motion.p>

          <hr />

          <div className="row d-flex justify-content-center align-items-center">
            <div className="icons">
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <PiInstagramLogoFill className="text-white icon" />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <PiTwitterLogoFill className="text-white icon" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                <PiFacebookLogoFill className="text-white icon" />
              </motion.a>

              <motion.a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <RiWhatsappFill className="text-white icon" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
