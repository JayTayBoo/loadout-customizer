import React from 'react';
import {Link} from 'react-router-dom';
import CreateLoadout from '../CreateLoadout/CreateLoadout.js'
import config from '../config.js'

export default class LoadoutScreen extends React.Component {
  state = {
    primary: {primaryName: 'Kilo 141', primaryImg: 'ara.png', attachments: ['Tac Laser', 'Operator Reflex Sight', 'No Stock', '60 Round Mags', 'Fast Melee']},
    secondary: {secondaryName: 'X16', secondaryImg: 'handguna.png', attachments: ['Tac Laser', 'Operator Reflex Sight', 'Lightweight Trigger', '21 Round Mags', 'Fast Melee']},
    perk1: {perk1Name: 'Double Time', perk1Img: 'perk1a.png'},
    perk2: {perk2Name: 'Restock', perk2Img: 'perk2a.png'},
    perk3: {perk3Name: 'Tune Up', perk3Img: 'perk3a.png'},
    lethal: {lethalName: 'Claymore', lethalImg: 'lethala.png'},
    tactical: {tacticalName: 'Flash Grenade', tacticalImg: 'tacticala.png'}
  }

  handleLoadout = (e) => {
    fetch(`${config.API_ENDPOINT}/loadout`, {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      if (!res.ok) return res.json().then(() => Promise.reject());
      return res.json()
    })
    .then((res) => {
      /*this.setState({
        primary: {primaryName: res.primary.primaryName, primaryImg: res.primary.primaryImg, attachments: [res.primary.attachments]},
        secondary: {secondaryName: res.secondary.secondaryName, secondaryImg: res.secondary.secondaryImg, attachments: [res.secondary.attachments]},
        perk1: {perk1Name: res.perk1.perk1Name, perk1Img: res.perk1.perk1Img},
        perk2: {perk2Name: res.perk2.perk2Name, perk2Img: res.perk2.perk2Img},
        perk3: {perk3Name: res.perk3.perk3Name, perk3Img: res.perk3.perk3Img},
        lethal: {lethalName: res.lethal.lethalName, lethalImg: res.lethal.lethalImg},
        tactical: {tacticalName: res.tactical.tacticalName, tacticalImg: res.tactical.tacticalImg}
      })*/
      this.setState({...res})
    })
  }
  
  componentDidMount() {
    this.handleLoadout()
  }

  render(){
      return(
      <div> 
        <Link to='/loadout'>
          <button className='generate_loadout' type='button' onClick={console.log('yeee')}>Generate a New Loadout!</button>
        </Link>
          <div>Loadout Screen!</div>
          <CreateLoadout 
            primary={this.state.primary}
            secondary={this.state.secondary}
            perk1={this.state.perk1}
            perk2={this.state.perk2}
            perk3={this.state.perk3}
            lethal={this.state.lethal}
            tactical={this.state.tactical}
          />
      </div>
    );
  }
}

