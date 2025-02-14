import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerLinks } from '@/constants'
import { link } from 'fs'

const Footer = () => {
  return (
    <footer className='flex flex-col
    text-black-100 mt-5 border-t
    border-gray-100'>
         {/* Top section containing logo, company information, and navigational links */}
        <div className='flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16 
        px-6 py-10'>
            {/* Company logo and information */}
            <div className='flex flex-col
            justify-start items-start gap-6'>
                <Image src="/logo.svg" alt='logo' 
                width={118} height={18}
                className='object-contain'/>
                <p className='text-base
                text-gray-700'>
                    Carhub 2025 <br />
                    All right reserved &copy;
                </p>
            </div>

                {/* Footer links */}
                <div className='footer__links'>
                    {footerLinks.map((item) => (
                        <div key={item.title} className='footer__link'>
                            <h3 className='font-bold'>{item.title}</h3>
                            <div className='flex flex-col gap-5'>
                            {item.links.map((link) => (
                                <Link 
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
        </div>

                {/* Bottom section containing legal links and copyrights */}
                <div className='flex justify-between
                items-center flex-wrap mt-10 border-t 
                border-gray-100 sm:px-16 px-6 py-10'>
                    <p>@2025 Carhub. All Right Reserved </p>
                    <div className='footer__copyrights-link'>
                        <Link href="/" className='text-gray-500'>
                        Privacy & Policy
                        </Link>
                        <Link href="/" className='text-gray-500'>
                        Term & Condition
                        </Link>
                    </div>
                </div>
    </footer>
    
  )
}

export default Footer