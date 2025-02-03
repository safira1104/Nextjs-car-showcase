"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'


const CustomButton = ({title, containerStyles, handleClick,
  btnType, textStyles, rightIcon } : CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        {/* Render the button title with provided text styles */}
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>

        {/* Render the right-side icon if provided */}
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon} alt='right icon' fill className='object-contain' />
          </div>
        )}
    </button>
  )
}

export default CustomButton