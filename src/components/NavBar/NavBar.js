import './NavBar.scss';
import logo from '../../assets/images/BrainFlix-logo.svg'
import uploadSVG from '../../assets/Icons/upload.svg'

import profileImage from "../../assets/images/Mohan-muruge.jpg"

function NavBar() {
    return (
        <>
            <header>
                <div className='headerParent'>
                    <img src={logo} />
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

                    <div className='headerParent-uploadButton'>
                        <button>
                            <img src={uploadSVG} alt='Upload Button'/>
                            UPLOAD</button>
                    </div>

                </div>

                <div className='headerParentTablet'>
                    <img src={logo} />

                    <div className='headerParentTablet-searchButtonImage'>

                        <form onSubmit={() => { }}>
                            <input type='text' placeholder='Search'></input>
                        </form>

                        <div className='headerParentTablet-searchButtonImage-button'>
                        <button>
                            <img src={uploadSVG} alt='Upload Button'/>
                            UPLOAD</button>
                        </div>

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