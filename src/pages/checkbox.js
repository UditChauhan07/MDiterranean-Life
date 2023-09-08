import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css'
import { BsFillStarFill } from 'react-icons/bs'


export default Checkbox;

function Checkbox() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div className="">
      {/* <h5 className="card-header">Next.js - Required Checkbox Example</h5> */}
      <div className="card-body">

      <div className="filter_main">
                  <div className="filter_write">
                    <p>FILTERS</p>
                    <button
              type="button"
              onClick={() => reset()}
              className=""
            >
              Clear
            </button>
                  </div>

          

                  <div className="filter_flex">
                    <div className="popular_filter">
                      <p> Popular Filter</p>
                     
                      <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"
               type="checkbox"/>Free Cancellation Available </label> <br />
                     
                      <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />Free Breakfast Included </label> <br />
                       <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />Book @ $1 </label> <br />
                    </div>

                    <div className="popular_filter">
                      <p> Price Range</p>
                       <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />upto $999 </label> <br />
                       <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />$1000 - $2499 </label>{" "}
                      <br />
                       <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />$2500 - $3999 </label>{" "}
                      <br />
                       <label><input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" /> $4000 + </label> <br />
                    </div>

                    <div className="popular_filter stars1">
                      <p> Customer Ratings</p>
          


  


                      <label>
                      <input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>                    
                      
                      </label>{" "}
                      <br />
                      <label>
                      <input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>

                      </label>{" "}
                      <br />
                      <label>
                      <input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />{" "}

                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                      <BsFillStarFill style={{ color: "#9D9D9D" }}/>
                        
                      </label>{" "}
                      <br />
                      <label>
                      <input name="acceptTerms"
              
              {...register("acceptTerms")}
              id="acceptTerms"  type="checkbox" />{" "}

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
    </div>
  );
}
