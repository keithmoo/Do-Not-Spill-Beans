import React from 'react'
import beanPic from './bean.png'

class Bean extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }

  render(){
    return(
      <div className='bean'>
        <img src={beanPic} alt='bean' id='beanpic' />
      </div>
    )
  }
}

export default Bean