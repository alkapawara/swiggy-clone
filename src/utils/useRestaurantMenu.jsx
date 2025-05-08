import { useEffect,useState } from "react";
import { MENU_URL } from "./restaorantData";

const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fechMenu()
    },[]);
    const fechMenu=async()=>{
            try {
                const raw=await fetch(MENU_URL+resId);
            const json= await raw.json();
            setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
    }

return resInfo;

}

export default useRestaurantMenu;