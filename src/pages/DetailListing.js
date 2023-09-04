import React from "react";
import dettrimg1 from "../Images/detal001.png";
import dettrimg2 from "../Images/dettrimg2.png";
import dettrimg3 from "../Images/dettrimg3.png";
import dettrimg4 from "../Images/dettrimg4.png";
import map02 from "../Images/mapo02.png";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import Image from "next/image"
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// import { faStar } from '@fortawesom/fontawesome-svg-core'
// import { faStar } from "react-icons/fa/index"
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs'
// import { AiFillStar } from 'react-icons/fa';
import BannerCheckAvailability from "../pages/CheckAvailability";




function DetailPagelisting() {
  return (
    <>
    <BannerCheckAvailability/>
      <section>
        <div className="container">
          <div className="detail_01main">
            <div className="row">
              <div className="col-xl-3 col-lg-12 col-md-12 col-12">
                <div className="filter_main">
                  <div className="filter_write">
                    <p>FILTERS</p>
                    <button> CLEAR</button>
                  </div>

                  <div className="filter_flex">
                    <div className="popular_filter">
                      <p> Popular Filter</p>
                     
                      <label><input type="checkbox" />Free Cancellation Available </label> <br />
                     
                      <label><input type="checkbox" />Free Breakfast Included </label> <br />
                       <label><input type="checkbox" />Book @ $1 </label> <br />
                    </div>

                    <div className="popular_filter">
                      <p> Price Range</p>
                       <label><input type="checkbox" />upto $999 </label> <br />
                       <label><input type="checkbox" />$1000 - $2499 </label>{" "}
                      <br />
                       <label><input type="checkbox" />$2500 - $3999 </label>{" "}
                      <br />
                       <label><input type="checkbox" /> $4000 + </label> <br />
                    </div>

                    <div className="popular_filter stars1">
                      <p> Customer Ratings</p>
          


  


                      <label>
                      <input type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>                    
                      
                      </label>{" "}
                      <br />
                      <label>
                      <input type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>

                      </label>{" "}
                      <br />
                      <label>
                      <input type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                        
                      </label>{" "}
                      <br />
                      <label>
                      <input type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>

                      </label>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-12 col-md-12">
                <div className="detail_02main">
                {/* legacyBehavior */}
                  <Link href="/TravelItinerary" >
                    <div className="main_det">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="det_img">
                            <Image className="" src={dettrimg1}></Image>
                            {/* <image className="w-100" src={dettrimg1} alt="" /> */}
                          </div>
                        </div>
                        <div className="col-lx-4 col-lg-5 col-md-7 col-sm-12">
                          <div className="det_cen">
                          <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>


                            <span className="starnec">2210 Verified Rating </span>

                            <h3>Travelling capri by Boat</h3>

                            <div className="det_icon_map">
                              {/* <image className="" src={map02} alt="First slide" /> */}
                              <Image className="" src={map02}></Image>
                              <p>A Capri by Sea Island Tour</p>
                            </div>
                            <span className="couple_fred">Couple Friendly</span>

                            <p className=" couple_fred_para">
                              100% Money Back Guarantee on Clean rooms with TV, AC &
                              Free Wi-Fi
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 pl-0">
                          <div className="main_det_side">
                            <p> Free Cancellation Till 27 Jul 23</p>
                            <span className="side_span1">$2833</span>
                            <br />
                            <span className="side_span2">$2205</span>
                            <br />
                            <span className="side_span3">+ $2866 TAXES $ FEES</span>
                            <br />
                            <span className="side_span4">
                              1 room <span className="side_span5">per night</span>
                            </span>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div></Link>

                  <Link href="/TravelItinerary"><div className="main_det">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="det_img">
                          
                          <Image className="" src={dettrimg2}></Image>
                        </div>
                      </div>
                      <div className="col-lx-4 col-lg-5 col-md-7 col-sm-12">
                        <div className="det_cen">
                        <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      

                          <span className="starnec">2210 Verified Rating </span>

                          <h3>Travelling capri by Boat</h3>

                          <div className="det_icon_map">
                            {/* <image className="" src={map02} alt="First slide" /> */}
                            <Image className="" src={map02}></Image>
                            <p>A Capri by Sea Island Tour</p>
                          </div>
                          <span className="couple_fred">Couple Friendly</span>

                          <p className=" couple_fred_para">
                            100% Money Back Guarantee on Clean rooms with TV, AC &
                            Free Wi-Fi
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 pl-0">
                        <div className="main_det_side">
                          <p> Free Cancellation Till 27 Jul 23</p>
                          <span className="side_span1">$2833</span>
                          <br />
                          <span className="side_span2">$2205</span>
                          <br />
                          <span className="side_span3">+ $2866 TAXES $ FEES</span>
                          <br />
                          <span className="side_span4">
                            1 room <span className="side_span5">per night</span>
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>

                  <Link href="/TravelItinerary"> <div className="main_det">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="det_img">
                          <Image className="" src={dettrimg3}></Image>
                        </div>
                      </div>
                      <div className="col-lx-4 col-lg-5 col-md-7 col-sm-12">
                        <div className="det_cen">
                        <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>


                          <span className="starnec">2210 Verified Rating </span>

                          <h3>Travelling capri by Boat</h3>

                          <div className="det_icon_map">
                            
                            <Image className="" src={map02}></Image>
                            <p>A Capri by Sea Island Tour</p>
                          </div>
                          <span className="couple_fred">Couple Friendly</span>

                          <p className=" couple_fred_para">
                            100% Money Back Guarantee on Clean rooms with TV, AC &
                            Free Wi-Fi
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 pl-0">
                        <div className="main_det_side">
                          <p> Free Cancellation Till 27 Jul 23</p>
                          <span className="side_span1">$2833</span>
                          <br />
                          <span className="side_span2">$2205</span>
                          <br />
                          <span className="side_span3">+ $2866 TAXES $ FEES</span>
                          <br />
                          <span className="side_span4">
                            1 room <span className="side_span5">per night</span>
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>

                  <Link href="/TravelItinerary"> <div className="main_det">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="det_img">
                          {/* <image className="w-100" src={dettrimg4} alt="" /> */}
                          <Image className="" src={dettrimg4}></Image>
                        </div>
                      </div>
                      <div className="col-lx-4 col-lg-5 col-md-7 col-sm-12">
                        <div className="det_cen">
                        <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      
                          <span className="starnec">2210 Verified Rating </span>

                          <h3>Travelling capri by Boat</h3>

                          <div className="det_icon_map">
                            {/* <image className="" src={map02} alt="First slide" /> */}
                            <Image className="" src={map02}></Image>
                            <p>A Capri by Sea Island Tour</p>
                          </div>
                          <span className="couple_fred">Couple Friendly</span>

                          <p className=" couple_fred_para">
                            100% Money Back Guarantee on Clean rooms with TV, AC &
                            Free Wi-Fi
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 pl-0">
                        <div className="main_det_side">
                          <p> Free Cancellation Till 27 Jul 23</p>
                          <span className="side_span1">$2833</span>
                          <br />
                          <span className="side_span2">$2205</span>
                          <br />
                          <span className="side_span3">+ $2866 TAXES $ FEES</span>
                          <br />
                          <span className="side_span4">
                            1 room <span className="side_span5">per night</span>
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default DetailPagelisting;
