import React from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends React.Component {
  render(){
      return(
      <div> 
        <Link to='/loadout'>
          <button className='generate_loadout' type='button' onClick={console.log('Clicked Landing')}>Generate Loadout!</button>
        </Link>
        <div>Landing Page!</div>
      </div>
    );
  }
}

