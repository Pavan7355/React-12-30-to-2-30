import React from'react'

//examples related to jsx

function App() {
  let ImageUrl="https://www.motortrend.com/uploads/2022/04/2023-Jaguar-F-Type-R-Coupe_1-2.jpg"
 let Fun=()=>{
  alert("hello how are you")
 }   
  return (
       <>
       <img src='https://www.hdwallpapers.in/download/2024_lamborghini_revuelto_car_4k_5k_hd_cars-5120x2880.jpg'
       height="200" width="200"/>
       <img src='Car1.webp' alt='no image'height="200" width="200"/>
       <img src={ImageUrl} alt='no image'height="200" width="200"/>
       {/* <p className="one">welcome to js class</p>
       <button onClick={Fun}>Click here</button> */}
       </>
  );
}

export default App;
