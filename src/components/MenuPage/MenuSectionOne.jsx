import React from 'react'

const MenuSectionOne = () => {
  return (
    <div>
        <div className="bg-[url('../../../menu-transformed.webp')] relative bg-cover h-[80vh] nxxx:h-[70vh] md:h-[75vh] spxx:h-[105vh] flex flex-col flex-wrap justify-end gap-[1rem] m-[4rem] sm:m-[2rem]">
        <div className="absolute inset-0 bg-black opacity-50" ></div>
        <div className='flex flex-col pl-10 pr-10 pb-16 gap-2 sm:gap-6 sm:text-center'>
        <div className='flex sm:flex-col text-white z-10 items-center justify-between sm:gap-5'>
        <h3 className="spice-text text-white relative z-10 text-4xl md:text-5xl sm:text-[2.5rem] nx:text-[1.8rem] nxx:text-[1.8rem] nxxx:text-[1.8rem]">Starters</h3>
        <p className='slogan nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1.1rem]'>Starting From</p>
        </div>
        <div className='flex sm:flex-col text-white z-10  justify-between items-center sm:gap-4'>
        <p className='md:text-[1.3rem] lg:text-[1.3rem] lg:w-[80%] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>Purely natural Zobo drinks and herbal blends, made with love from local species that heal, refresh and delight.</p>
        <h3 className='spice-text text-2xl md:text-3xl lg:text-[1.6rem] sm:text-[1.8rem] nx:text-[1.3rem] nxx:text-[1.3rem] nxxx:text-[1.3rem]'>₦500</h3>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MenuSectionOne;