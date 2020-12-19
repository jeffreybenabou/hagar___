import React, {useState} from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

import contact from './res/images/contact.png'
import about from './res/images/about.png'
import message from './res/images/message.png'
import drawer from './res/images/drawer.png'
import portofolio from "./res/images/portofolio.png"
import downArrow from "./res/images/arrow.png"
import background from './res/images/background.png'
import uiux1 from './res/images/uiux/1.jpg'
import uiux11 from './res/images/uiux/3.jpg'
import uiux2 from './res/images/uiux/2.jpg'
import uiux4 from './res/images/uiux/4.jpg'
import uiux5 from './res/images/uiux/5.jpg'
import uiux6 from './res/images/uiux/6.jpg'
import uiux61 from './res/images/uiux/61.jpg'
import uiux7 from './res/images/uiux/7.jpg'
import uiux71 from './res/images/uiux/71.jpg'
import uiux8 from './res/images/uiux/8.jpg'
import uiux81 from './res/images/uiux/81.jpg'
import uiux9 from './res/images/uiux/9.jpg'
import uiux91 from './res/images/uiux/91.jpg'
import uiux10 from './res/images/uiux/10.jpg'
import uiux101 from './res/images/uiux/101.jpg'
import uiux111 from './res/images/uiux/11.jpg'
import uiux112 from './res/images/uiux/111.jpg'
import uiux122 from './res/images/uiux/122.jpg'
import logo1 from './res/images/logo/logo1.jpg'
import logo2 from './res/images/logo/logo2.jpg'
import logo3 from './res/images/logo/logo3.jpg'
import logo4 from './res/images/logo/logo4.jpg'
import logo5 from './res/images/logo/logo5.jpg'
import logo6 from './res/images/logo/logo6.jpg'

import print1 from './res/images/print/1.jpg'
import print2 from './res/images/print/2.jpg'
import print3 from './res/images/print/3.jpg'

import "./res/css/popup.css"
import './res/css/upper_div.css'
import './res/css/drawer.css'
import './res/css/categories.css'
import './res/css/works.css'

import Popup from 'reactjs-popup';

const App = (props) => {
    const [UIUX, setUIUX] = useState([
        {
            title: 'test',
            img: uiux1,
            mockUp: uiux11
        },
        {
            title: 'test',
            img: uiux2
        },

        {
            title: '',
            img: uiux4,
            mockUp: uiux5
        },
        {
            title: '',
            img: uiux6,
            mockUp: uiux61
        },
        {
            title: '',
            img: uiux7,
            mockUp: uiux71
        },
        {
            title: '',
            img: uiux122,
            mockUp: uiux122
        },
        {
            title: '',
            img: uiux8,
            mockUp: uiux81
        },
        {
            title: '',
            img: uiux9,
            mockUp: uiux91
        },
        {
            title: '',
            img: uiux10,
            mockUp: uiux101
        },

        {
            title: '',
            img: uiux111,
            mockUp: uiux112
        },
    ]);
    const [print, setPrint] = useState([
        {
            title: 'test',
            img: print1,
            mockUp: print1
        },
        {
            title: '',
            img: print2,
            mockUp: print2
        },
        {
            title: '',
            img: print3,
            mockUp: print3
        },

    ]);
    const [logo, setLogo] = useState([
        {
            title: '',
            img: logo1,
            mockUp: logo1
        },
        {
            title: '',
            img: logo2,
            mockUp: logo2
        },
        {
            title: 'test',
            img: logo3,
            mockUp: logo3
        },
        {
            title: 'test',
            img: logo4,
            mockUp: logo4
        },
        {
            title: 'test',
            img: logo5,
            mockUp: logo5
        },
        {
            title: '',
            img: logo6,
            mockUp: logo6
        },
    ]);
    const [all, setAll] = useState(() => {
        const data = [];
        UIUX.map((item) => {
            data.push(item)
        })
        print.map((item) => {
            data.push(item)
        })
        logo.map((item) => {
            data.push(item)
        })
        return data
    });
    const [currentArray, setCurrentArray] = useState(all);

    const DrawerButton = (props) => {

        return <button
            id={"main_drawer_button"}
            onClick={props.onClick}
            style={props.style}
            className={"drawer_button_div"}>
            {
                props.showText &&
                <div>
                    {props.textToShow}
                </div>
            }
            <img className={"drawer_button_image"} src={props.image}>

            </img>


        </button>
    }
    const Drawer = () => {

        return <div  id={"drawer"} style={{"--boxShadow":showText?"5px 5px 1rem 0rem #d7d7d7":undefined,"--backgroundColor":showText?"white":'transparent'}} >
            <DrawerButton
                id={"main_drawer_button"}
                onClick={() => {
                    setShowText(!showText);
                }}
                image={drawer}
            />
            <DrawerButton
                style={{"--visibility":showText?"visible":'hidden'}}
                textToShow={"אודות"}
                showText={showText}
                image={about}
            />
            <DrawerButton
                style={{"--visibility":showText?"visible":'hidden'}}
                textToShow={"צור קשר"}
                showText={showText}
                image={message}
            />
            <DrawerButton
                style={{"--visibility":showText?"visible":'hidden'}}
                textToShow={"0523080322"}
                showText={showText}
                image={contact}
            />
        </div>
    }

    const CategoryButton = (props) => {
        return <button onClick={props.onClick} className={"category_button"}>
            <div className={"text_on_category_button"}>
                {props.title}
            </div>
            <img
                className={"image_on_category_button"}
                src={background}/>
        </button>
    }
    const CategoryButtons = () => {

        return <div id={"category_main_div"}>
            <CategoryButton
                onClick={() => {
                    setCurrentArray(all)
                }}
                title={"ALL"}/>
            <CategoryButton
                onClick={() => {
                    setCurrentArray(logo)
                }}
                title={"LOGO"}/>
            <CategoryButton
                onClick={() => {
                    setCurrentArray(print)
                }}
                title={"PRINT"}/>
            <CategoryButton
                onClick={() => {
                    setCurrentArray(UIUX)
                }}
                title={"UI / UX"}/>
        </div>
    }

    const Info = (props) => {
        return <div onClick={()=>{
            setShowText(false)
        }} id={"info"} style={{"--filter":showText?"blur(3px)":undefined,}}>
            <img src={portofolio} id={"portofolio"}/>
            <div id={"text_on_header"}>גלול מטה כדי לראות את העבודות</div>
            <img id={"down_arrow"} src={downArrow}/>
            <CategoryButtons/>
            <Works/>
        </div>
    }

    const Works = () => {

        return <div id={"work_frame"}>
            <div id={"right_side_work_container"}>
                {
                    currentArray.map((item, index) => {
                        return index % 2 == 0 && <Work item={item}/>
                    })
                }
            </div>

            <div id={"left_side_work_container"}>
                {
                    currentArray.map((item, index) => {
                        return index % 2 == 1 && <Work item={item}/>
                    })
                }
            </div>

        </div>
    }

    const Work = (props) => {
        const [showText, setShowText] = useState(false);
        return <div
            onMouseOver={() => {
                setShowText(true)
            }}
            onMouseOut={() => {
                setShowText(false)
            }}
            onClick={() => {
                setPopup({
                    visible: true,
                    mockUp: props.item.mockUp
                })
            }}
            className={"work_main_div"}>
            <img
                style={{"--opacity": showText ? 0.5 : 1}}
                className={"work_img"}
                src={props.item.img}
            />
            {
                showText &&
                <div
                    onMouseEnter={() => {
                        setShowText(true)
                    }}

                    onMouseOut={() => {
                        setShowText(true)
                    }}
                    className={"floating_text_on_image"}>
                    {props.item.title}
                </div>
            }

        </div>
    }
    const Header = (props) => {
        return <div id={"header"}>
            <Info/>
            <Drawer/>

        </div>
    }
    const [popup, setPopup] = useState({visible: false, mockUp: ''})
    const [showText, setShowText] = useState(false)
    return <div id={"main_div"}>

        <Popup
            overlayStyle={{background: 'rgba(255, 255, 255,0.8)'}}
            open={popup.visible}
            onClose={() => {
                setPopup({visible: false, mockUp: ''})
            }}


        >


            <TransformWrapper
                wheel={{wheelEnabled: true}}
                >

                <TransformComponent transformEnabled={true}>
                    <img style={{borderRadius: '5vh',width:'100%'}} src={popup.mockUp}/>
                    <button onClick={()=>{setPopup({visible: false})}} style={{fontSize:"1.5rem",borderColor:'transparent',outline:'transparent',height:'1.5rem',backgroundColor:'transparent',zIndex:100,position:'absolute',top:"1rem",right:0,left:"1rem",bottom:0}}>
                        x
                    </button>
                </TransformComponent>
            </TransformWrapper>

        </Popup>
        <Header/>
    </div>
}

export default App;