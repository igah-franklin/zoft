import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import UseDarkMode from "./UseDarkMode";

const ActivateDarkMode = () =>{
    const [colorTheme, setTheme] = UseDarkMode();
    return(
        <div className="fixed bottom-10 right-9 w-full bg-blue-100 w-[50px] h-[50px] py-5 rounded-[50px] flex justify-center items-center z-[8]">
            <span>
                {colorTheme==='light'?
                <FaToggleOn 
                style={{color:'#000', fontSize:'25px', cursor:'pointer'}} 
                onClick={()=>setTheme(colorTheme)}
                />
                :
                <FaToggleOff 
                style={{color:'black', fontSize:'25px', cursor:'pointer'}} 
                onClick={()=>setTheme(colorTheme)}
                />
                }
            </span>
            
        </div>
    );
}

export default ActivateDarkMode;