import React, { useState } from "react";
import capp1 from "../Images/cpa01.png"
import capp2 from "../Images/cpa02.png"
import capp3 from "../Images/cpa03.png"
import capp4 from "../Images/cpa04.png"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
import BannerCheckAvailability from "../pages/CheckAvailability";
import Quantuti from "./Quantuti"

// import Link from "next/link";

  
  function Checkabli() {
    
  return (
    
    <>
    {/* <Quantuti></Quantuti> */}
    <BannerCheckAvailability/>
   
      <div className="CheckAvailability shadow-none">
<div className="container">
                    <div className="check_detaipl">
                            <h3>CAPRI, ITALY ISLAND TOUR</h3>

                            <p className="check_detaipl_para">A typical departure point for Capri by Sea is Marina Grande. Marina Grande is the larger of the two marinas on the island, the one most tourists are familiar with as the ferries operate from there. For landlubbers, Marina Grande offers easy access to a funicular up to the famous Piazza Umberto or grab one of the plentiful taxis up Capri’s infamous narrow and twisting roads to the main shopping area.</p>


<p>For those adventurous souls, it’s easy to hire a captain and their Gozzo (a spacious open boat with sun cushions that fits about six passengers) to show you Capri as only few see it. Typically your first destination is the smaller Marina called Marina Piccola, located directly across the island from Marina Grande.</p>

<p>But there are many sights to see before you arrive. For example, on the way out of the harbor, you’ll see a tiny statue of a young boy waving from a rock called Gennarino Scigunizzo di Capri. It depicts Gennarino, a Neapolitan boy or ascugnizzo (the colloquial name for street urchin), who found a new life on Capri. It’s a tradition to greet him as you arrive or leave the island by boat.</p>
                        


                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 capp111">
                            <Image className="" src={capp1}/>
                            </div>

                                         <div className="col-lg-3 col-md-6 col-sm-12 capp111">
                                         <Image className="" src={capp2}/>
                                         </div>

                                         <div className="col-lg-3 col-md-6 col-sm-12 capp111">
                                         <Image className="" src={capp3}/>
                                         </div>

                                         <div className="col-lg-3 col-md-6 col-sm-12 capp111">
                                         <Image className="" src={capp4}/>
                                         </div> 
                        </div>


                        <div className="check_detaipl20">
                            <h3>TRAVELING CAPRI BY BOAT</h3>
                            <p>You’ll pass secret beaches accessible only by boat. Drop anchor, and you’ll likely have the place to yourself. Venture a bit further and look up to see the highest point on the cliffs above, and you’ll be looking at the cliffs next to Villa Jovis, built by Emperor Tiberius. Historians confirmed that Tiberius used these cliffs to execute prisoners and political enemies by pushing them into the sea. Those that survived the fall would be quickly dispatched by soldiers with spears waiting in boats below.</p>

<p>As you continue round the corner toward Marina Piccola, you’re greeted by the Faraglioni: three towering granite behemoths who have stood sentinel over the bay since time immemorial. According to the Odyssey, these rocks are home to the flesh-eating sirens and were created by the cyclops Polyphemus when he threw them in the sea, attempting to kill Odysseus during his daring escape.</p>

<p>Myths aside, Marina Piccola sings a different siren song these days. It calls to the ultra-wealthy, and it truly is a thing of dreams. Set against towering cliffs, the narrow beach features exclusive restaurants and bars, but most celebrity visitors bring their own entertainment in the form of superyachts. The water is warm, a cloudless green blue, and the quiet beaches are carpeted with soft white pebbles sanded smooth by time. From the beach, a narrow trail called Via Krupp used by Augustus and Tiberius to access their palaces climbs to the Gardens of Augustus a thousand feet above.</p>
                            
                            
                            

                        </div>
                        
                        
                        </div>
                        </div>
                        </div>


 
 
 

 
    
    </>
  )
}

export default Checkabli