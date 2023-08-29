import React from "react"
import map002 from "../Images/mapper0001.png"
import car_black from "../Images/Car_black.png"
import Beach_121 from "../Images/beach_121.png"
import orlando  from "../Images/orlando.png"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";
import { BsFillStarFill } from 'react-icons/bs'
import Herobanner1 from "./Herobanner1"


function Travelingitinerary() {


  return (
    <>
    <Herobanner1/>
    
      <section className="travel_itinary">
        <div className="container">
          <div className="travel_iti_main">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                <div className="travel_col_1">
                <div className="travel_col_2">
                  <div className="travl">
                    <div className="d-flex align-items-center ">
                    <h3>Travelling Capri By Boat</h3>
                    <div className="sgqw_icon">
                    <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>    
                    </div>
                    </div>

                    <p >
                      Survey No.52/5 A Capri By Sea Island Tour Ste 324A Boca
                      Raton, FL 33431{" "}
                    </p>
                  </div>

                  <div className="trav2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry&quot;s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <div className="travl_ul">
                      <div className="travl_contro me-5">
                        <h4>Workout and Leisure</h4>
                        <ul>
                          <li>Fitness center</li>
                          <li>Swimming pool [outdoor]</li>
                        </ul>
                      </div>

                      <div className="travl_contro ml">
                        <h4>Spa & Beauty</h4>
                        <ul>
                          <li>Massage</li>
                          <li>Spa</li>
                        </ul>
                      </div>
                    </div>

                    </div>
                    </div>

                      <div className="day_plan_1">
                      <div className="day_plan_2" >
                        {/* lfhose */}

    
 
   

    <div class="row">
      <div class="col-md-3 sylkj">
      <h4>Day Plan</h4>
       
        <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link   active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
       
            
            <span class="font-weight-bold small text-uppercase">02 Aug, Tue</span></a>

          <a class="nav-link  " id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
           
            <span class="font-weight-bold small text-uppercase">03 Aug, Wed</span></a>

          <a class="nav-link notor " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
            
            <span class="font-weight-bold small text-uppercase">04 Aug, Thr</span></a>

         
        </div>
      </div>

      <div class="col-md-9">
   
        <div class="tab-content ScrollRight" id="v-pills-tabContent " >
          <div class="tab-pane fade rounded  show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
           <div className="tader">
            <h4 class=" mb-4">Day 1 - Florida</h4>

            <p className="p_trader">Transfer from Airport To Capri Boat  </p>
            <div className="row tader-2">
                <div className="col-xl-5 col-5">
                  <div className="img_car-shadow">
                  <Image className=" " src={car_black} />
                  </div>
                                  
                </div>
                <div className="col-xl-7 col-7">
                <div className="img_car-shadow_2">
                  <h6>Private Transfer</h6>
                  <p>Etios, Nissan or similar</p>
                  <br/>
                  
                  <h6>Facilities</h6>
                  <p>3 seater | 2 Luggage Bags | first Aid</p>
                </div>
            </div>
            </div>
          </div>
            {/* 2 */}
            <div class="tader">
              <br/>
            
            
            <div className="row tader-2">
                <div className="col-xl-5 col-5">
                  <div className="img_car-shadow">
                  <Image className="w-100" src={Beach_121}/>
                  </div>
                                  
                </div>
                <div className="col-xl-7 col-7">
                <div className="img_car-shadow_2">
                  <h6>Sightseeing in Boca Raton</h6>
                  <p>Boca Raton, Florida</p>
                  <br/>
                 <div className="dora ">
                  <div className="mr-5 me-5">
                  <p>DURATION</p>
                  <h6>2 hrs</h6></div>
                  <div>
                  <p>PLACES COVERED</p>
                  <h6>2</h6></div>
                  </div>
                </div>
            </div>
          </div>
          </div>

          {/* 3 */}
          <div class="tader " >
           
           <p className="p_trader">Check-in to Hotel in Boca Raton @ 1 PM</p>
          
            <div className="row tader-2 align-items-center">
                <div className="col-xl-5 col-5">
                  <div className="img_car-shadow">
                  <Image className="w-100 " src={orlando}/>
                  </div>
                                  
                </div>
                <div className="col-xl-7 col-7">
                <div className="img_car-shadow_2">
                <div className="d-flex">
           <div > <h6>Orlando Hotel</h6></div>
           <div className="icoo_star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    </div></div>
                  
                  <p>2.7 km from Boca Raton</p>
                  <p>Tue, 1 Aug 2023 - Thu, 3 Aug 2023</p>
                  <br/>

                 
                 
                </div>
            </div>
          </div>
          </div>

          </div>

          

          <div class="tab-pane   rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h4 class=" mb-4">Day 2 - Florida</h4>
            <p class="font-italic text-muted mb-2">Lorem ipsum dolor sit amet,  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div class="tab-pane  rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h4 class=" mb-4">Day 3 - Florida</h4>
            <p class="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        
       </div>
      </div> 
    
  </div>
</div>

                        
                         </div>

                  
                </div>

                <div className="travel_iti_guest">
                  <h3>GUEST DETAILS</h3>

                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>First Name </label> <br />
                        <input type="text" />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 moopend">
                        <div style={{textAlign: "start"}}><label>Last Name </label></div> 
                        <input type="text" />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>
                          Email Address{" "}
                          <span>
                            
                          </span>{" "}
                        </label>{" "}
                        <br />
                        <input type="text" />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 moopend">
                        <div style={{textAlign: "start"}}><label>Phone Number </label></div> 
                        <input type="text" />
                      </div>

                      <button className="btn-red_side">Add Guest</button>
                    </div>
                  </form>
                </div>

                <Link href="/credit-payment">
                <button className="btn_last">Proceed To Payment Options</button></Link>
              </div>

              

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="check_main01">
                <div className="check_mainn">
                    <h5>Check In</h5>
                    <h4>Fri, 07 Jul 2023</h4>
                    <h5>03:00 PM</h5>
                </div>

                <div className="check_mainn">
                    <h5>Check Out</h5>
                    <h4>Sat, 08 Jul 2023</h4>
                    <h5>12:00 PM</h5>
                </div>

                <div className="check_mainn border-0 ">
                    <h5>Guest</h5>
                    <h4>2 Guest | 1 Room</h4>
                    <h5>1 Night</h5>
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

                        <Image className=" w-100" src={map002}/> 
                        
                        

                        <h5>8.6 Excellent</h5>
                        <p>Location rating score</p>

                        <div className="check_parking">
                            <p className="m-0">Parking</p>
                            <p className="m-0">Free</p>

                        </div>
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

export default Travelingitinerary;
