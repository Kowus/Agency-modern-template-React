import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card1-image"
      />
      <h2 className="feature-card1-text">{props.title}</h2>
    </div>
  )
}

FeatureCard1.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
}

FeatureCard1.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard1
