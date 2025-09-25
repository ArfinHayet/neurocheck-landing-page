import React from 'react'

const Team = () => {
  return (
    <section
      id="meetourteam"
      className="max-w-screen lg:h-[70vh] mx-auto py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-18 bg-[#114654]/5"
    >
      <div className="mb-6 md:mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-center text-xl md:text-2xl lg:text-4xl">
          Meet Our Team
        </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 px-3 md:px-0 mx-auto max-w-screen-xl'>
              <div className='text-center p-4 h-[25vh] w-full bg-white rounded-2xl'>
                  <p className='font-semibold  md:text-xl'>Founder</p>
              </div>
              <div className='text-center p-4 h-[25vh] w-full bg-white rounded-2xl'>
                  <p className='font-semibold  md:text-xl'>Co-founder</p>
              </div>
              <div className='text-center p-4 h-[25vh] w-full bg-white rounded-2xl'>
                  <p className='font-semibold  md:text-xl'>Clinicians</p>
              </div>
              <div className='text-center p-4 h-[25vh] w-full bg-white rounded-2xl'>
                  <p className='font-semibold  md:text-xl'>Tech Lead</p>
              </div>
              <div className='text-center p-4 h-[25vh] w-full bg-white rounded-2xl'>
                  <p className='font-semibold  md:text-xl'>Tech Lead</p>
              </div>
              
          </div>
    </section>
  );
}

export default Team;