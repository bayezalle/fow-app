import React from 'react'
import img1 from '../../images/ad1.png';
import img2 from '../../images/ad2.png';
import img3 from '../../images/ad3.png';

const Test = () => {
  return (
    <div>
      <div class="banner container-fluid pt-4">
          <div class="container-xl">
              <div class="row">
                <div class="col-md-12 d-slider">
                  <div id="loop" class="owl-carousel owl-theme flex">
                      <div class="item"><img src={img1} alt=""/></div>
                      <div class="item"><img src={img2} alt=""/></div>
                      <div class="item"><img src={img3} alt=""/></div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Test
