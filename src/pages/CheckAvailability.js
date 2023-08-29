'use client'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
 import DateIcon from "../Images/Date-icon.png";
import GuestIcon from "../Images/Guest-icon.png"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"
function BannerCheckAvailability() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [showResults, setShowResults] = useState(false);
    const onClick = () => { setShowResults(true); }
    const onClick2 = () => { setShowResults(false); }



    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    const Results = () => (
        <div id="results" className="AddGuestandRoom">
            <div id="mount-point">
                <div className="mount-point-1">
                    <div className="mount-point-2">
                        <div><h6>Room</h6></div>
                        <div><button><FaMinus/></button> <span>1</span> <button><FaPlus/></button></div>
                    </div>
                </div>

                <div className="mount-point-1">
                    <div className="mount-point-2">
                        <div><h6>Adults</h6>
                            <p>Ages 18 or above</p>
                        </div>

                        <div><button><FaMinus/></button> <span>1</span> <button><FaPlus/></button></div>
                    </div>
                </div>

                <div className="mount-point-1">
                    <div className="mount-point-2 mb-0">
                        <div><h6>Chidren</h6>
                            <p>Ages 03 to 17</p>
                        </div>

                        <div><button><FaMinus/></button> <span>1</span> <button><FaPlus/></button></div>
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <>

            <section >
                <div className="hero-image2">
                    <div className="hero-text ">
                        <h1 className="text-uppercase" >A Capri by Sea Island Tour</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="CheckAvailability">
                        <form>
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-12 pr-0">
                                    <div className="bg-white">
                                        <div className="InnerIcon">
                                            <Image src={DateIcon}/>  
                                            <DatePicker className="border0" selected={startDate} onChange={(date) => setStartDate(date)} />
                                            
                                        </div>
                                    </div>


                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 pl-0">
                                    <div className="bg-white02">
                                        <div className="InnerIcon">
                                            <Image src={DateIcon} />  
                                            <DatePicker className="border0" selected={startDate1} onChange={(date) => setStartDate1(date)} />
                                        </div>
                                    </div>


                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 ">
                                    <div className="bg-white03">
                                        <div className="InnerIcon">
                                            <Image className="img-fluid" src={GuestIcon}/> 
                                            <div onClick={showResults ? onClick2 : onClick} className="Guest">
                                                <p className="Adults">2 Adults</p>
                                                <p className="Rooms">1 room</p>
                                            </div>
                                            <div className="AddGuest">

                                                {showResults ? <Results /> : null}


                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </form>
                        <div className="buttonBlack text-center">
                            <Link href="/DetailListing">
                                <button className="btn btn-btn">Check Availability</button>
                            </Link>

                        </div>





                    </div>






                </div>

            </section >
            </>
    )
}
export default BannerCheckAvailability;