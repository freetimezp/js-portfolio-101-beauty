import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const ModalVideo = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex items-center gap-4 cursor-pointer'>
                    <button className='relative w-[58px] h-[58px] bg-white rounded-full flex 
                        items-center justify-center shadow-2xl shadow-accent'>
                        <Image src="/assets/home/play.svg" alt="button" width={36} height={36} />
                    </button>

                    <span className='text-lg font-primary'>
                        Watch Video
                    </span>
                </div>
            </DialogTrigger>

            <DialogContent>
                <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    url="https://www.youtube.com/embed/M_ymMYH2uDc?si=xyYRF6ZZOIIb7req"
                    muted
                />
            </DialogContent>
        </Dialog>
    );
}

export default ModalVideo;
