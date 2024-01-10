
import { Fragment } from 'react';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return (
      <Fragment>
        <div className="heading">
          <h1>Medicine Inventory</h1>
          <p>hshh shhsh shhsd f hdf e efhf jfjdsjf jfjdf jf</p>
        </div>
            <HeaderCartButton onClick={props.onShowCart}/>
        <div >
            
        </div>
            
      </Fragment>
    );
}

export default Header;