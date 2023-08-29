import React from 'react'
import beachlimg1 from "../Images/Rectangle 165.png"
import beachlimg2 from "../Images/Rectangle 16602.png"
import beachlimg3 from "../Images/Rectangle 16701.png"
import beachlimg4 from "../Images/Rectangle 16801.png"
import beachlimg5 from "../Images/Rectangle 16901.png"
import beachlimg6 from "../Images/Rectangle 17001.png"
import map01 from "../Images/map01.png"
import arrowup from "../Images/Vector_arrow.svg"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";
import HeroBanner from "./HeroBanner"
// import BannerCheckAvailability from './Check-availability/CheckAvailability'

// import { FontAwesomeV5Icon } from 'font-awesome-v5-icons'

function ExperiencesListing() {
  return (
    <>
    <HeroBanner/>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>Capri, Italy Island Tour</h3>
                  <div className='img_contron_beach'>
                    <span>
                    <Image className="" src={map01}></Image>
                      
                      </span> <p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg1}></Image>
                  
                  <Link href='/Checkabli'><div className='arrowup'>
                    
                    <Image className="" src={arrowup}></Image>
                  </div></Link>

                </div>

              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>TRAVELING CAPRI BY BOAT</h3>
                  <div className='img_contron_beach'>
                    <span>
                    <Image className="" src={map01}></Image>

                        
                    </span><p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg2}></Image>
                                 <Link href='/Checkabli'><div className='arrowup'>
                  <Image className="" src={arrowup}></Image>
                  </div></Link>
                </div>

              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>A Capri by Sea Island Tour</h3>
                  <div className='img_contron_beach'>
                    <span><Image className="" src={map01}></Image></span><p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg3}></Image>
                
                  <Link href='/Checkabli'><div className='arrowup'>
                  <Image className="" src={arrowup}></Image>
                
                  </div></Link>
                </div>

              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>TRAVELING CAPRI BY BOAT</h3>
                  <div className='img_contron_beach'>
                    <span><Image className="" src={map01}></Image></span><p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg4}></Image>
                 
                  <Link href='/Checkabli'><div className='arrowup'>
                  <Image className="" src={arrowup}></Image>
                  </div></Link>
                </div>

              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>A Capri by Sea Island Tour</h3>
                  <div className='img_contron_beach'>
                    <span><Image className="" src={map01}></Image></span><p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg5}></Image>
                  <Link href='/Checkabli'><div className='arrowup'>
                  <Image className="" src={arrowup}></Image>
                  </div></Link>
                </div>

              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='beachl'>
                <div className='beachl1'>
                  <h3>A Capri by Sea Island Tour</h3>
                  <div className='img_contron_beach'>
                    <span><Image className="" src={map01}></Image></span><p>A Capri by Sea Island Tour</p>
                  </div>
                </div>
                <div className='beachl2'>
                <Image className="beachbig_img w-100 " src={beachlimg1}></Image>
                 <Link href='/Checkabli'><div className='arrowup'>
                  <Image className="" src={arrowup}></Image>
                  </div></Link>
                </div>

              </div>
            </div>



          </div>

        </div>
      </section>


    </>
  )
}

export default ExperiencesListing