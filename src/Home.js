import React from 'react'
import './Home.css'
import logo from './assets/images/1.png';
import G from './assets/images/g.png';
import Search from './assets/images/3.png';



function Home() {
    return (
        <div className="home">
            <div className="home__nav">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="nav__top">
                    <div className="nav__text">
                        <h1>Hi Uishopy</h1>
                    </div>
                    <div className="nav__image">
                        <img src={G} alt=""/>
                    </div>
                </div>
            </div>
                
                <div className="middle__text">
                            <input type="text" placeholder="Search"/>
                            <img src={Search} alt=""/>
                </div>


                   <div className="home__recomand">
                        <div className="recomand__option">
                            <div className="recomand__text">
                                <h1>Recommended</h1>
                            </div>
                            <div className="recomand__style">
                            </div>
                        </div>
                        <div className="recomand__button">
                            <div className="button__style">
                                <div className="button__text">
                                <h1>More</h1>
                                </div>
                            </div> 
                        </div>
                   </div>

                   <div className="home__recomand">
                        <div className="recomand__option">
                            <div className="recomand__text">
                                <h1>Featured Plants</h1>
                            </div>
                            <div className="recomand__style">
                            </div>
                        </div>
                        <div className="recomand__button">
                            <div className="button__style">
                                <div className="button__text">
                                <h1>More</h1>
                                </div>
                            </div> 
                        </div>
                   </div>
               
            
        </div>
    )
}

export default Home
