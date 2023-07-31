import { FaPizzaSlice } from "react-icons/fa";
import "./App.scss";
import axios from "axios";
import img1 from '../assets/dark-food-photo-editing-after.jpg'
import {useState} from 'react'
import { getrecipe } from "../services/FoodApi";

function App() {
  const [query, setquery] = useState("");
  

  const [recipies, setrecipies] = useState([]);
  
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const food = await getrecipe(query)

    setrecipies(food)

  };


  return (
      <div className="w-screen h-screen ">
        <header className="w-[24] h-[100px] bg-green-200 grid grid-col justify-center items-center ">
          <h1 className="text-md font-bold ">Fast & Delious Food ... 🍕</h1>
          <form className="relative flex items-center justify-center gap-3 "onSubmit={(e)=>HandleSubmit(e)}>
            <input type="text" placeholder="search ..." className="px-3 py-1 rounded-md" onChange={(e)=>setquery(e.target.value)}  />
            <FaPizzaSlice />
            <button className=" bg-red-400 rounded-lg py-1">submit</button>
          </form>
        </header>
{/* --------------------------------------------------- */}
      




         <div className="w-[1020p] h-[400px]">
          <img className="w-full h-full object-cover " src={img1} alt="" />

        </div> 

       
          
       

<div className="grid grid-cols-4 justify-center items-center gap-2  pt-5 justify-items-center ">
          {recipies?.map((items,index) => (
            <div key={index} className="wrapper">
              <div key={items["recipe"]["label"]} className="card  border rounded-md shadow-2xl cursor-pointer mx-2 my-4 text-center">
                <div className="front  overflow-hidden rounded-t-md p-3 flex flex-col  ">
                  <img
                    src={items["recipe"]["image"]}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                  />
                  <h1 className="items-center text-xs  font-semibold p-2 whitespace-nowrap text-ellipsis">
                   {items["recipe"]["label"]}
                  </h1>
                  <p className="p-2 text-base font-extrabold">Calories : {Math.round(items["recipe"]["calories"])}</p>
                </div>
                <div className="back overflow-hidden rounded-t-md p-3 overflow-y-auto">
                  <ul className="list-disc  p-2 text-start tracking-wide font-bold">
                    <li className="text-xs ">{items["recipe"]["ingredientLines"]}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
    </div>





</div>
        
    
  
  );
}

export default App;
