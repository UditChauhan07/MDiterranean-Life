import React from 'react'
import hero_5 from '../Images/hero_5.png';
import hero_sec_01img from '../Images/hero_sec_1img.png'
import hero_sec_02img from '../Images/hero_sec_02img.png'
import hero_sec_03img from '../Images/hero_sec_03img.png'
import hero_sec_04img from '../Images/hero_sec_04img.png'
import Image from 'next/image';
// import Link from 'next/link';

function Herobanner1() {
  return (
    <>
    <section className='Hero_5'>
        <div className='container'>
            <div className='hero_in'>
                <div className='row'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <div className='hero_col_in'>
                        <Image className="hero_5-img_first " src={hero_5} alt="First slide" />
                        </div>
                    </div>
                    <div className='col-lg-7 col-md- col-sm-12'>
                        <div className='hero_sec_control'>
                        <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='hero_sec_1'>
                            <Image className=" hero_sec_1img" src={hero_sec_01img} alt="First slide" />
                            </div>
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='hero_sec_1'>
                            <Image className=" hero_sec_1img img2" src={hero_sec_02img} alt="First slide" />
                            </div>
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='hero_sec_1'>
                            <Image className=" hero_sec_1img" src={hero_sec_03img} alt="First slide" />
                            </div>
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='hero_sec_1'>
                            <Image className=" hero_sec_1img img4" src={hero_sec_04img} alt="First slide" />
                            </div>
                            </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>
    
    
    </>
  )
}

export default Herobanner1