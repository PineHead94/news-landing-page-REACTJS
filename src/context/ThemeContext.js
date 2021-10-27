import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [ theme,setTheme ] = useState({
        isVerticalTheme:true,
        verticalTheme:{
            itemContentImg:{height: '50px',minWidth: '50px',borderRadius: '50%',margin: '20px'},
            itemContent:{display: 'flex',alignItems: 'center' ,backgroundColor:'white',marginRight: '10px',minWidth: '700px',maxWidth: '700px',height: '12vh',borderRadius: '10px', boxShadow: '5px 10px 40px 0px #75757528'},
            itemDetail:{minWidth:'500px'},
            itemDetailH2:{fontSize: '20px'},
            itemDetailP:{fontSize: '15px'},
            deleteBtn:{height: '35px',width: '35px',border: 'none',borderRadius:'50%',backgroundColor: 'white',color: 'tomato',boxShadow: '5px 10px 40px 0px #75757528',fontSize: '20px'},
            listItem:{display: 'flex',alignItems: 'center',margin: '20px'},
            verticalToggleBtn:{backgroundColor: '#7cffcb',backgroundImage:"linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)"}
        },
        horizontalTheme:{
            newsList:{display:'flex',width: '100%',flexWrap: 'wrap'},
            listItem:{backgroundColor: 'white',display: 'flex',height: '300px',width: '250px',borderRadius: '10px',boxShadow: '5px 10px 40px 0px #75757528',margin: '10px 20px'},itemContent:{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-evenly',margin: '0px 10px'},
            itemContentImg:{height: '120px',width: '200px',order: '2',marginTop: '30px'},
            itemDetailH2:{fontSize: '15px'},
            itemDetailP:{fontSize: '15px'},
            btn:{transform: 'translate(-50%,0%)'},
            deleteBtn:{backgroundColor: 'white',border: 'none',fontSize: '15px',color: 'tomato'},
            horizontalToggleBtn:{backgroundColor: '#7cffcb',backgroundImage:"linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)"}
        }
    })
    const toggleTheme = () => {
        setTheme({ ...theme,isVerticalTheme:!theme.isVerticalTheme })
    }
    return (
        <ThemeContext.Provider value = {{ ...theme,toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;