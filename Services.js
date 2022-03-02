import React, { Component } from 'react';
import Schild from './Schild';

import img1 from './pic3.jpg';
import img2 from './pic4.jpg';

export default class Services extends Component {
  render() {
    return (
        <div>
            <h1 className='hd3'>SERVICES</h1>
      <div className="main">
          
               <Schild class name='Utility Payment'
                      image={img1} />
                 <Schild name='Payment Gateway'
                      image={img2} />
            </div>
            </div>    
    )
  }
}
