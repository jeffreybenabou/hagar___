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
import './res/css/effects.css';
import './res/css/upper_div.css'
import './res/css/drawer.css'
import './res/css/categories.css'
import './res/css/works.css'

import Popup from 'reactjs-popup';

/*

const App = () => {

    const [showDrawer, setShowDrawer] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [UIUX, setUIUX] = useState([
        {
            title: '',
            img: uiux1,
            mockUp:uiux11
        },
        {
            title: '',
            img: uiux2
        },

        {
            title: '',
            img: uiux4,
            mockUp:uiux5
        },
        {
            title: '',
            img: uiux6,
            mockUp:uiux61
        },
        {
            title: '',
            img: uiux7,
            mockUp:uiux71
        },
        {
            title: '',
            img: uiux122,
            mockUp:uiux122
        },
        {
            title: '',
            img: uiux8,
            mockUp:uiux81
        },
        {
            title: '',
            img: uiux9,
            mockUp:uiux91
        },
        {
            title: '',
            img: uiux10,
            mockUp:uiux101
        },

        {
            title: '',
            img: uiux111,
            mockUp:uiux112
        },
    ]);
    const [print, setPrint] = useState([
        {
            title: '',
            img: print1,
            mockUp:print1
        },
        {
            title: '',
            img: print2,
            mockUp:print2
        },
        {
            title: '',
            img: print3,
            mockUp:print3
        },

    ]);
    const [logo, setLogo] = useState([
        {
            title: '',
            img: logo1,
            mockUp:logo1
        },
        {
            title: '',
            img: logo2,
            mockUp:logo2
        },
        {
            title: '',
            img: logo3,
            mockUp:logo3
        },
        {
            title: '',
            img: logo4,
            mockUp:logo4
        },
        {
            title: '',
            img: logo5,
            mockUp:logo5
        },
        {
            title: '',
            img: logo6,
            mockUp:logo6
        },
    ]);
    const [all, setAll] = useState(()=>{
        const data=[];
        UIUX.map((item)=>{
            data.push(item)
        })
        print.map((item)=>{
            data.push(item)
        })
        logo.map((item)=>{
            data.push(item)
        })
        return data
    });
    const [currentArray, setCurrentArray] = useState(all);
    const [openPopup,setOpenPopup]=useState({visible:false})
    const ShowButton = (props) => {
        return <div
            id={props.id}
            className={"drawer_button"}
            style={{
                "--hidden": showDrawer ? 'visible' : 'hidden',
            }}>
            {
                props.text.length > 0 &&
                <div className={showDrawer ? "drawer" : !showDrawer && "drawer_close"}>{props.text}</div>
            }

            <button
                onClick={props.onClick}
                style={{zIndex: 10, backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 0}}>
                <img id={props.id + "_image"} src={props.icon} className={"image_on_drawer"}/>
            </button>

        </div>
    }

    const CategoryButton = (props) => {
        return <button onClick={props.action} className={"button_with_image_div"}>

            <div className={"text_on_button_with_background"} style={{
                color: currentCategory == props.index ? "white" : '#5F777F'
            }}>
                {props.title}
            </div>
            {
                currentCategory == props.index &&
                <img className={"button_with_background"} src={background}>

                </img>
            }


        </button>
    }
    const ItemToShow = (item) => {
        const [visible, setVisible] = useState(false)
        return <div
            onClick={()=>{
                setOpenPopup({visible:true,mockUp:item.item.mockUp})
            }}
            onMouseOut={() => {
                setVisible(false);
            }}
            onMouseOver={() => {
                setVisible(true);
            }}
            className={"work"}>
            <img
                style={{
                    height: '100%',
                    width: '100%',
                    borderRadius:'5vh'
                }}
                src={item.item.img}/>
            <div
                className={"text_on_image"}
                style={{
                    "--hidden": !visible?'hidden':'visible',
                }}
            >
                text
            </div>
        </div>
    }
    const ALL = () => {
        return <div id={"main_div_of_work"}>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                {
                    currentArray.map((item, index) => {

                        return index % 2 == 0 && <ItemToShow item={item}/>
                    })
                }
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', width: '100%'}}>
                {
                    currentArray.map((item, index) => {
                        return index % 2 == 1 && <ItemToShow item={item}/>
                    })
                }
            </div>

        </div>
    }


    return (

        <div style={{backgroundColor: '#f5f1ea', flex: 1, display: 'flex'}}>

            <Popup
                lockScroll={true}
                overlayStyle={{background:'rgba(255, 255, 255,0.8)'}}
                open={openPopup.visible} onClose={()=>{
                setOpenPopup({visible:false})
            }}
                position="center center"

            >
                <TransformWrapper wheel={{wheelEnabled:true}} enablePadding={true} enablePanPadding={true}>
                    <TransformComponent  transformEnabled={true}>
                <img style={{  borderRadius:'5vh',height:'95vh'}} src={openPopup.mockUp}/>
                    </TransformComponent>
                </TransformWrapper>

            </Popup>
            <div style={{
                filter: showDrawer ? 'blur(8px)' : undefined,
                flex: 10,
                display: 'flex',
                flexDirection: 'column'
            }}>

                <div style={{display: 'flex', flex: 2}}>
                    hj
                </div>
                <div style={{

                    flexDirection: 'column',
                    marginTop: '5vh',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flex: 10,
                    backgroundColor: '#f5f1ea',
                }}>
                    <img id={"portofolio"} src={portofolio}/>
                    <div id={"text_on_top"}>גלול מטה כדי לראות את כל העבודות</div>
                    <button style={{marginTop: '12vh', borderColor: 'transparent', backgroundColor: 'transparent'}}>
                        <img style={{height: '2.2cm'}} src={downArrow}/>
                    </button>

                    <div id={"div_of_buttons"} style={{marginTop: '10vh',}}>
                        <CategoryButton title={"ALL  "} action={() => {
                            setCurrentCategory(0)
                            setCurrentArray(all);
                        }} index={0}/>
                        <CategoryButton title={"LOGO"} action={() => {
                            setCurrentCategory(1);
                            setCurrentArray(logo);
                        }} index={1}/>
                        <CategoryButton title={"PRINT"} action={() => {
                            setCurrentCategory(2);
                            setCurrentArray(print);
                        }} index={2}/>
                        <CategoryButton title={"UI/UX"} action={() => {
                            setCurrentCategory(3);
                            setCurrentArray(UIUX);
                        }} index={3}/>
                    </div>

                    <ALL/>


                </div>

            </div>


            <div
                id={"drawer_div"}
                style={{
                    overflowY: 'auto',
                    "--boxShadow": showDrawer && '0px 0px 10px #ffffff',
                    "--background": !showDrawer ? 'transparent' : '#f5f1ea',
                    "--width": showDrawer ? '65vw' : 'auto',

                }}
            >


                <ShowButton
                    id={"drawer_button_ham"}
                    onClick={() => {
                        setShowDrawer(!showDrawer)
                    }}
                    icon={drawer}
                    text={""}
                />

                <ShowButton
                    icon={about}
                    text={"אודות"}

                />
                <ShowButton
                    icon={message}
                    text={"צור קשר"}
                />

                <ShowButton
                    icon={contact}
                    text={"0523080322"}
                />
            </div>


        </div>


    );

}
*/
const DrawerButton = (props) => {

    return <button onClick={props.onClick} className={"drawer_button_div"}>
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
    const [showText, setShowText] = useState(false)
    return <div id={"drawer"}>
        <DrawerButton
            onClick={() => {
                setShowText(!showText);
            }}
            image={drawer}
        />
        <DrawerButton
            textToShow={"אודות"}
            showText={showText}
            image={about}
        />
        <DrawerButton
            textToShow={"צור קשר"}
            showText={showText}
            image={message}
        />
        <DrawerButton
            textToShow={"0523080322"}
            showText={showText}
            image={contact}
        />
    </div>
}

const CategoryButton = (props) => {
    return <button className={"category_button"}>
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
        <CategoryButton title={"ALL"}/>
        <CategoryButton title={"LOGO"}/>
        <CategoryButton title={"PRINT"}/>
        <CategoryButton title={"UI / UX"}/>
    </div>
}

const Info = (props) => {
    return <div id={"info"}>
        <img src={portofolio} id={"portofolio"}/>
        <div id={"text_on_header"}>גלול מטה כדי לראות את העבודות</div>
        <img id={"down_arrow"} src={downArrow}/>
        <CategoryButtons/>
        <Works/>
    </div>
}

const Works = () => {
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
                    console.log("asfasf")
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

const App = (props) => {
    return <div id={"main_div"}>
        <Header/>
    </div>
}

export default App;
