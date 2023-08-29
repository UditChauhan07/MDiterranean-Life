import React from "react";
import BoxImage from '../Images/ArtLover.png'
import Box01 from '../Images/Box01.png'
import Box02 from '../Images/Box02.png'
import Box03 from '../Images/Box03.png'
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";
// import ExperiencesListing from '../ExperiencesListing/ExperiencesListing'

function LoversSection() {
    return (
        <div className="PaddingTB">
            <div className="container">
                <div className="row  mBtom">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="SectionCenter">
                            <div className="BoxHWImg Box1">
                               
                               
                                <Image className="w-100 " src={BoxImage}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="SectionCenter">
                            <Link href="/ExperiencesListing">
                                <div className="Box1 BoxHWImg ">
                         <Image  className="w-100 " src={Box01}></Image>
                                    <div className="Box-text">
                                        <h1 >
                                            Art Lovers</h1>
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row  mBtom">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                    <div className="SectionCenter">
                            <Link href="/ExperiencesListing">
                                <div className="Box1 BoxHWImg ">
                                
                                <Image  className="w-100 " src={Box02}></Image>
                                
                                     <div className="Box-text">
                                        <h1 >Jewelry Lovers</h1>
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="SectionCenter">
                            <div className="BoxHWImg Box1">
                                
                                <Image  className="w-100 " src={BoxImage}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="SectionCenter">
                            <div className="BoxHWImg Box1">
                                
                                <Image  className="w-100 " src={BoxImage}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                    <div className="SectionCenter">
                            <Link href="/ExperiencesListing">
                                <div className="Box1 BoxHWImg ">
                                {/* <img className="w-100 " src={Box03} /> */}
                                <Image  className="w-100 " src={Box03}></Image>
                                     <div className="Box-text">
                                        <h1 >Beach Lovers</h1>
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LoversSection;
