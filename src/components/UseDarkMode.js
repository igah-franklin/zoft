import {useEffect, useState} from "react";

const UseDarkMode = () =>{
    const [theme, setTheme] = useState(localStorage.themeKey);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(theme);
        //storing the values in local storage
        localStorage.setItem('themeValue',theme)
    },[theme, colorTheme])

    return [colorTheme, setTheme]
    
    // return(
    //     <>
    //     <h1>this text takes in a useEffect </h1>
    //     </>
    // );
}

export default UseDarkMode;