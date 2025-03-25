import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FCFBF4] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Vishnu Reddy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p> A highly motivated and results-driven Software Engineer with a strong background in full
                stack development. Proficient in designing, developing, and optimizing dynamic user 
                interfaces using React and Angular. Adept at collaborating with cross-functional teams to 
                deliver scalable, high-performance web applications. Passionate about cybersecurity, cloud 
                computing, and modern software architectures. Committed to continuous learning and staying 
                updated with the latest industry trends and technologies.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
