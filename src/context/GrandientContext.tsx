import React, {createContext, useState} from 'react'
import ImageColors from 'react-native-image-colors'

interface ImageColors{
primary: string;
secondary: string;
}


interface ContextProps{
 colors : ImageColors;
 prevcolors:ImageColors;
 SetColors: (colors: ImageColors) => void
 SetPrevColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps) //Definir tipo




export const GradientProvider =({children}:any) =>{

const [colors, setColors] = useState<ImageColors>({ primary :'#fff', secondary :'#fff'});

const [prevcolors, setPrevColors] = useState<ImageColors>({ primary :'transparent', secondary :'transparent'});


const SetColors = (colors : ImageColors) =>{

       setColors(colors);
}


const SetPrevColors = (colors : ImageColors) =>{

    setPrevColors(colors);
}


    return( 
        <GradientContext.Provider value={{
        colors,prevcolors,SetPrevColors,SetColors
        }} >
            {children}
        </GradientContext.Provider>
    )
}