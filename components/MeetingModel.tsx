import React, { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
  

interface MeetingModelProps{
    isOpen: boolean 
    onClose: ()=>void 
    title: string 
    className?: string 
    children?: ReactNode
    handleClick?: ()=>void 
    buttonText?: string 
    image?: string 
    buttonIcon?: string 
}

const MeetingModel = ({isOpen, onClose, title, className, handleClick, buttonText, children, buttonIcon, image}: MeetingModelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  {/* <DialogTrigger>Open</DialogTrigger> */}
  <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
    <div className='flex flex-col gap-6'>
        {
            image && (
                <div className='flex justify-center'>
                    <Image src={image} alt="image" width={72} height={72}/>
                </div>
            )
        }

        <h3 className={cn("text-3xl font-bold leading-[42px]", className)}>{title}</h3>
        {children}
        <Button onClick={handleClick} className='bg-blue-1 focus-visible:ring-0'>
            {buttonText || "Schedule meeting"}
        </Button>
    </div>
  </DialogContent>
</Dialog>

  )
}

export default MeetingModel