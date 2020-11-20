import React from 'react';
import './CreateLoadout.css'

// used for testing, remove later
/*import primaryImg from '../img/weapons/ara.png'
import secondaryImg from '../img/weapons/handguna.png'
import perk1Img from '../img/perks_equipment/perks/perk1a.png'
import perk2Img from '../img/perks_equipment/perks/perk2a.png'
import perk3Img from '../img/perks_equipment/perks/perk3a.png'
import lethalImg from '../img/perks_equipment/equipment/lethala.png'
import tacticalImg from '../img/perks_equipment/equipment/tacticala.png'*/

export default function CreateLoadout(props) {
  const {primary, secondary, perk1, perk2, perk3, lethal, tactical} = props;
    return(
      <div> 
        <form>
          <div className='loadout'> 
            <div className='primary'>
              <div>
                <div className='spaceBelow'>Primary: {primary.primaryName}</div>
                <img src={`img/weapons/${primary.primaryImg}`} alt='some value'/>
              </div>
              <div className='child_item'>
                <div>Attachments:</div>
                <ul className='attachments'>
                  {primary.attachments && primary.attachments.map(attachment=><li key={attachment}>{attachment}</li>)}
                </ul>
              </div>
            </div>
            <div className='secondary'>
              <div>
                <div className='spaceBelow'>Secondary: {secondary.secondaryName}</div>
                <img src={`img/weapons/${secondary.secondaryImg}`} alt='some value'/>
              </div>
              <div className='child_item'>
                <div>Attachments:</div>
                <ul className='attachments'>
                  {secondary.attachments && secondary.attachments.map(attachment=><li key={attachment}>{attachment}</li>)}
                </ul>
              </div>
            </div>
            <div className='perks'>
              <div>
                <div>Perk 1: {perk1.perk1Name}</div>
                <img src={`img/weapons/${perk1.perk1Img}`} alt='some value'/>
              </div>
              <div>
                <div>Perk 2: {perk2.perk2Name}</div>
                <img src={`img/weapons/${perk2.perk2Img}`} alt='some value'/>
              </div>
              <div>
                <div>Perk 3: {perk3.perk3Name}</div>
                <img src={`img/weapons/${perk3.perk3Img}`} alt='some value'/>
              </div>
            </div>
            <div className='equipment'>
              <div>
                <div>Lethal: {lethal.lethalName}</div>
                <img src={`img/weapons/${lethal.lethalImg}`} alt='some value'/>
              </div>
              <div>
                <div>Tactical: {tactical.tacticalName}</div>
                <img src={`img/weapons/${tactical.tacticalImg}`} alt='some value'/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}