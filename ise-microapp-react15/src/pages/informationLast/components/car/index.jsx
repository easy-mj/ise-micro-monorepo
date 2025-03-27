import React from 'react'
import './index.scss'

class InformationLastCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="information-last-car">
        <div className="information-last-car-detail">
          <div className="information-last-car-img">
            <img
              src="https://g.autoimg.cn/@img/www2/chejiahaodfs/g32/M09/6E/6B/720x0_c42_autohomecar__ChxkPWfksseAQQfGAAU619GSiDY37.jpeg"
              alt=""
            />
          </div>
          <div className="information-last-car-price">
            <div>高尔夫</div>
            <div>26.98-55.44万</div>
          </div>
        </div>

        <div className="information-last-car-button">询底价</div>
      </div>
    )
  }
}

export default InformationLastCar
