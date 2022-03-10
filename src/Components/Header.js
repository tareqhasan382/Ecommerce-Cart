import React from 'react';

function Header(props) {
    const {countCartItems} = props;
  return (
    <header className='row block center'>
        <div className='header'>
            <a href="#/"><h1>Small Shoping Cat</h1></a>
      </div>
      <div className='header'>
          <a href="#/cart">
              Cart{' '}
              {countCartItems? (
                  <button className='badge'>{countCartItems}</button>
              ):(
                  ''
                  )}
              
              <i class="fa-solid fa-cart-shopping"></i>
              
              </a>
          <a href="#/singin">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
