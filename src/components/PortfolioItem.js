import React from 'react'

const PortfolioItem = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.content.img} alt='Paris' width='400px' height='300px' />
                <p><strong>{props.content.title}</strong></p>
                <p>{props.content.desc}</p>
            </div>
        </div>
    )
}

export default PortfolioItem