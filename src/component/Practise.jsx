import React, { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './shimmer'
const Practise = () => {
    const [dataList,setDataList]=useState([]);
    const[filterdList,setFilterdList]=useState([])
    const [inputval,setInputval]=useState('');

    const fetchData=async()=>{
        const list=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.69560&lng=74.23170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData= await list.json();
        const fetchda=jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| [];
        setDataList(fetchda);
        setFilterdList(fetchda);
        console.log(fetchda)

    }
    useEffect(()=>{
        fetchData();
    },[])
  return dataList.length===0 ? <Shimmer />:(
    <>
      <h1>practise</h1>
      <div>
                <input type="text" value={inputval} onChange={(e)=>{
                    setInputval(e.target.value);
                    
                }}/>
            <button
            onClick={()=>{
                const serachList = dataList.filter((ele)=>{
                    // ele.info.name.toLowerCase().includes(inputval.toLowerCase())
                    return ele.info.name.toLowerCase().includes(inputval.toLowerCase())
                });
                console.log("serachList",serachList)
              setFilterdList(serachList)
              
                

            }}
            >search items</button>
            <div>
<button onClick={()=>{
    const rating=dataList.filter((ele)=>ele.info.avgRating > 4)
    setDataList(rating)
}}> heigh rating</button>
</div>
            </div>
        <div className="res-container">
          
            

        {filterdList.map((ele,id)=>(
                <div className='res-card' key={ele.info.id}>
                <div className='img-contain'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ele.info.cloudinaryImageId}`} alt="" />
                </div>
               
               {/* <h3>Rajarampuri</h3> */}
               <h4>{ele.info.name}</h4> 
               <h5>{ele.info.avgRating}</h5>
              </div>
        ))}
            {/* <Card /> */}
        </div>
    </>
  )
}

export default Practise