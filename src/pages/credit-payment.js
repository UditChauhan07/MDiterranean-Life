import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Blank_credit from "../Images/blank_credit-card.png";
import map002 from "../Images/mapper0001.png";
import tour from "../Images/tour05.png";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link"
import Herobanner1 from "./Herobanner1" 



 
function Credit() {
   return (
    <>
    <Herobanner1/>
    
      <section className="credit_12">
        <div className="container">
    

 

          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
              <div className="shadow_11">
                <div className="card">
                  <div className="radio-group">
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        
                          <div className="credit_1">      
                            <label for="1"> <Accordion.Header for="1" value="1" >
                        
                          <input
                              type="radio" eventKey="0"  id="1" name="color" value="1" defaultChecked/> 
                         </Accordion.Header>Credit / Debit Card    </label> </div>
                          
                        

                        <Accordion.Body>
                          <div className="row">
                            <div className=" col-12">
                              <label>Select Payment Method*</label> <br />
                              <select class=" w-100 custom-select"placeholder="" id="inputGroupSelect01" >
                                <option selected> Visa / MasterCard / Amex / JCB </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6  col-12">
                              <div className="row">
                                <div className="col-12">
                                  <label>Card holder Name*</label> <br />
                                  <input
                                    type="text"
                                    placeholder="Card holder name"
                                  />
                                </div>
                                <div className="col-12">
                                  <label>Digital Payment</label> <br />
                                  <input
                                    type="text"
                                    placeholder="Card number"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                  <label>Expiry date*</label> <br />
                                  <input type="text" placeholder="MM/YY" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                  <label>CVC/CVV*</label> <br />
                                  <input type="text" placeholder="MM/YY" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <Image className="w-100" src={Blank_credit} alt=""/> 
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        

                        <div className="credit_1">      
                            <label for="2"> <Accordion.Header for="2" value="2" >
                        
                          <input
                              type="radio" eventKey="1"  id="2" name="color" value="2"/> 
                         </Accordion.Header>Digital Payment </label> </div>


                         
                        
                        <Accordion.Body>
                          Answer to the Question #2
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">

                      <div className="credit_1">      
                            <label for="3"> <Accordion.Header for="3" value="3" >
                        
                          <input
                              type="radio" eventKey="2"  id="3" name="color" value="3"/> 
                         </Accordion.Header>Online Banking </label> </div>
                        
                        <Accordion.Body>
                          Answer to the Question #1
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  {/* sdpifjseoipfuj */}

                  <p className="pwmail">
                    We`&apos;`ll send confirmation of your booking to Test@gmail.com                   </p>
                </div>
                </div>
                <div className="row ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-4">
                  <Link href="/bookingConfirmed"><button className="credit_btn">Book Now</button> </Link>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-4">
                   <Link href="/TravelItinerary"> <button className="credit_btn_1">
                      Back To Your Booking Details{" "}
                    </button></Link>
                  </div>
                
              </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="check_main01">
                  <div className="check_mainn border-0">
                    <h4>07 Jul 2023 - 08 Jul 2023</h4>
                    <h5>1 night</h5>
                    <div className="bober">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 pe-0">
                          <div className="d-flex">
                            <Image className=" kjgowidthimg_2 " src={tour} alt="First slide" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 ">
                          <div className=" align-items-center night_007">
                            <h3>Travelling Capri By Boat</h3>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <p>Tour Ste 324A Boca Raton, FL 33431</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" col-12">
                      <div className="prog ">
                        <div className="prog-0 d-flex justify-content-between ">
                          <div className="prog-1">Price</div>
                          <div className="prog-2">$1150.49</div>
                        </div>
                        <span>Included in price: Taxes and fees</span>
                        <p>YOU SAVED $ 32.21 ON THIS BOOKING!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="check_main01">
                  <div className="check_man01">
                    <h3>8.6 Excellent</h3>
                    <p>188 reviews</p>
                    <div className="buttoom_control">
                      <button className="buttoom_1">Brekfast</button>
                      <button className="buttoom_1">Housekeeping</button>
                    </div>

                    <Image className=" kjgowidthimg_2" src={map002} alt="First slide" />

                    <h5>8.6 Excellent</h5>
                    <p>Location rating score</p>

                    <div className="check_parking">
                      <p>Parking</p>
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Credit;
