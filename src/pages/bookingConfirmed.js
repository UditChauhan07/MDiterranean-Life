import React from "react";
import toyu1 from "../Images/toyu1.png";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import Image from "next/image"

function Bookingconfirmed() {
  return (
    <>
      <section>
        <div className="container">
          <div className="consed">
            <div className="main_bbk">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
                  <div className="main_bbk-1">
                    <h5>Great! Your Stay Is Confirmed</h5>
                    <p>
                      You will soon receive an email confirmation on
                      test@gmail.com
                    </p>
                    <p className="p_1">Booking ID</p>
                    <span>DBYB4488</span>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
                  <div className="main_bbk-2">
                    <button className="btn_main_bbk">Print</button>
                    <p>Booking by Test on Wed, 26 Jul 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bofgr">    
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
                <div className="main_bbk-3">
                  <h4>Travelling Capri By Boat</h4>
                  <p>Capri By Boat</p>
                  <span>Plot No 120, Ekta Merket ,Sector 42 , Florida</span>

                  <p className="p01">Boat Direction </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
                <Image className=" w-75" src={toyu1} /> 
              </div>
            </div>
            </div>



            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Primary Guest</span>
                  <p>Test</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Check In</span>
                  <p>Fri, 07 Jul 2023</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Check In Time</span>
                  <p>12:00 PM</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Guest</span>
                  <p>2 Guest | 1 Room | 1Night</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Mobile Number</span>
                  <p>98XXXXXXXX</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Check Out</span>
                  <p>Sat, 08 Jul 2023</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Check Out Time</span>
                  <p>Check Out Time</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="main_bbk-4">
                  <span>Total Payable Amount</span>
                  <p>$1150.49</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookingconfirmed;
