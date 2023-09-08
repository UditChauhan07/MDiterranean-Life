import {useState} from "react";
import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.css'
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
    <div className="d-flex frjnf">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="" type="button" onClick={decNum}><FaMinus/></button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="" type="button" onClick={incNum}><FaPlus/></button>
  </div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;