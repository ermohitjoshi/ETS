import React from 'react';
import Afaceri from '../../assets/images/afaceri.jpg'
import Nations from '../../assets/images/nations.jpg'
import Photoholic from '../../assets/images/photoholic.jpg'


function ColoEvents() {
  return (
    <>
    <section className="container news mt-3"  id='ColoEvents'>
    <div className="col-12 heading">
            <h1>Events in Colo23'</h1>
            <p>
            These are the events that will take place in Colosseum 2023. Are you participating?"
            </p>
          </div>
    <div className="coloContainer">
{/* ------------------------------------------------------ */}
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Photoholic} alt="Events" style={{ width: '300px', height : '300px' }}/>
    </div>
    <div class="flip-card-back">
      <h1>Photoholic</h1>
      <p>This event will feature a photo scavenger hunt where participants will solve riddles and complete challenges to take photos of specific objects and places.</p>
      <a href="https://forms.gle/sfKHm5y3PdiMk6Pw8" target="_blank" rel="noreferrer"> <button className="regibutton">Register</button> </a>
    </div>
  </div>
</div>

    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Nations} alt="Events" style={{ width: '300px', height : '300px' }}/>
    </div>
    <div class="flip-card-back">
      <h1>N.A.T.I.O.N.S</h1>
      <p>A mock parliamentary session which invites the young politics and critics to take a stand, feel the problem and be part of the solution.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGbcYU0Y13QoWuj44wq5-iVlS7PGA7DW4iB4WVdxdbzyxM0Q/viewform"  target="_blank" rel="noreferrer"> <button className="regibutton">Register</button> </a>
    </div>
  </div>
</div>

{/* ------------------------------------------------  */}

    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Afaceri} alt="Events" style={{ width: '300px', height : '300px' }}/>
    </div>
    <div class="flip-card-back">
      <h1>Afaceri</h1>
      <p>The event focusses on improving the critical thinking abilities, managerial skills and business perspective of an individual. This event is divided inot three rounds</p>
      <a href="https://forms.gle/QmJPbs6WrJAQkfyE8" target="_blank"> <button className="regibutton">Register</button> </a>
    </div>
  </div>
</div>
</div>
</section>
</>
  )
}

export default ColoEvents
