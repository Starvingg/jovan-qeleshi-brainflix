import './NavBar.scss';
import logo from '../../assets/images/BrainFlix-logo.svg'
import uploadSVG from '../../assets/Icons/upload.svg'
import profileImage from "../../assets/images/Mohan-muruge.jpg"

import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <header>

                <div className='headerParent'>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <div className='headerParent-searchBar'>
                        <form onSubmit={() => { }}>
                            <input type='text' placeholder='Search' />
                        </form>
                        <div className='headerParent-searchBar-img'>
                            <img src={profileImage} />
                        </div>
                    </div>

                    <div className='headerParent-imgTablet'>
                        <img src={profileImage} />
                    </div>

                    <Link to="/upload" className='headerParent-uploadButton'>
                        <button>
                            <img src={uploadSVG} alt='Upload Button' />
                            UPLOAD</button>
                    </Link>

                </div>

                <div className='headerParentTablet'>

                    <Link to="/">
                        <img src={logo} />
                    </Link>

                    <div className='headerParentTablet-searchButtonImage'>

                        <form onSubmit={() => { }}>
                            <input type='text' placeholder='Search'></input>
                        </form>

                        <Link to="/upload" className='headerParentTablet-searchButtonImage-button'>
                            <button>
                                <img src={uploadSVG} alt='Upload Button' />
                                UPLOAD</button>
                        </Link>

                        <div className='headerParentTablet-searchButtonImage-image'>
                            <img src={profileImage} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;