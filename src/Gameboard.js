import React from 'react'
import Bean from './Bean'
import killerBean from './killerBean.png'

class Gameboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beansLeft: 0,
      beansRight: 0,
      balancing: false,
      leftBalance: 0,
      rightBalance: 0,
      spilled: false ,
      rulesHidden: false,
      rulesShown: true    
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }


addBeanLeft() {
  //Yes, I should use an array and just add a copy to the array each time; sue me
  let beans = this.state.beansLeft;
  if (beans === 1) {
  return <Bean /> }
  else if (beans === 2) {
  return <div className='beanBucket'><Bean /><Bean /></div> }
  else if (beans === 3) {
    return <div className='beanBucket'><Bean /><Bean /><Bean /></div> }
    else if (beans === 4) {
      return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /></div> }
      else if (beans === 5) {
        return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
        else if (beans === 6) {
          return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
          else if (beans === 7) {
            return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
            else if (beans === 8) {
              return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
              else if (beans === 9) {
                return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
                else if (beans === 10) {
                  return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
}

addBeanRight(){
  let beans = this.state.beansRight;
  if (beans === 1) {
  return <Bean /> }
  else if (beans === 2) {
  return <div className='beanBucket'><Bean /><Bean /></div> }
  else if (beans === 3) {
    return <div className='beanBucket'><Bean /><Bean /><Bean /></div> }
    else if (beans === 4) {
      return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /></div> }
      else if (beans === 5) {
        return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
        else if (beans === 6) {
          return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
          else if (beans === 7) {
            return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
            else if (beans === 8) {
              return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
              else if (beans === 9) {
                return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }
                else if (beans === 10) {
                  return <div className='beanBucket'><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /><Bean /></div> }

}

handleButtonClickLeft = () => {
  const randomBalance = (Math.random() * 0.15);
  this.setState({
    beansLeft: this.state.beansLeft +1,
    leftBalance: randomBalance + this.state.leftBalance +1,
    balancing: true
  })
  
  this.timeout = setTimeout(() => {
    this.setState({balancing: false})
 
  }, 2500)
}

handleButtonClickRight = () => {
  const randomBalance = ((Math.random()+0.15) * 2.2);
  this.setState({
    beansRight: this.state.beansRight +1,
    rightBalance: randomBalance + this.state.rightBalance +1,
    balancing: true
  })
  this.timeout = setTimeout(() => {
    this.setState({balancing: false})
    
  }, 2500)
}


balanceOutcome(){
  if (this.state.balancing === true){
    return `whoa...easy...easy...it's teetering.....is it going to spill?`
  }
  else if (this.state.leftBalance > this.state.rightBalance +3.6){
    this.setState({spilled: true});
    
  }
  else if (this.state.rightBalance > this.state.leftBalance +3.6){
    this.setState({spilled: true});
    
  }
  else {
    return `It's stable!`
  }
}

warning(){
  let rand = Math.ceil(Math.random() * 10)
  if (rand > 3 && this.state.rightBalance > this.state.leftBalance +1.9 && this.state.balancing === false) {
    return(
      <div className='red'></div>
    )
  }
  else if (rand > 3 && this.state.leftBalance > this.state.rightBalance +1.9 && this.state.balancing === false) {
    return(
      <div className='red'></div>
    )
  }
}

hide = () => {
  this.setState({
    rulesHidden: true,
    rulesShown: false
  })
  
}

show = () => {
  this.setState({
    rulesHidden: false,
    rulesShown: true
  })
}

restart = () => {
  this.setState({
    beansLeft: 0,
    beansRight: 0,
    balancing: false,
    leftBalance: 0,
    rightBalance: 0,
    spilled: false ,
    rulesHidden: false,
    rulesShown: true    
  })
}

  render(){
    if (this.state.spilled === false){
    return(
      <div className='buttons'>
        <p className='rules' hidden={this.state.rulesHidden}>This is a simple balance game.  You must add 10 beans to the scale.  
        If either side becomes too heavy, it will spill the beans and you lose.  
        The scale is hidden, although you know where each end of it is.
        Additionally, the scale isn't perfect; beans added to the right seem much heavier to it 
        than beans added to the left.  Another imperfection to the scale is that it sees each bean 
        with some random variance.  There is much more variance for beans put on the right than on 
        the left, but beans put on the right will still almost always seem heavier than those put on the left, 
        and if it does register as lighter from the variance, it will be by the slightest amount.  Usually, beans 
        on the right weight almost thrice as much as beans on the left, but that shouldn't be taken as gospel considering 
        the variance.
        There is a warning light that turns on if one side is getting close to tipping, although it 
        also isn't perfect; sometimes it doesn't turn on when it should.  It also doesn't warn specifically 
        which side is near tipping over.  If 10 beans are balanced at once, you earn a guess.  You may earn 
        an additional guess by placing an eleventh bean.  Should the eleventh bean cause a spill, you lose the 
        originally earned guess as well.
        <button hidden={this.state.rulesHidden} onClick={this.hide}>Hide Rules</button>
        
        </p>
        <p><button hidden={this.state.rulesShown} onClick={this.show}>Show Rules</button></p>
        
          <button id='push' onClick={this.handleButtonClickLeft} disabled={this.state.balancing}>Add Bean Left</button>
          <button id='push' onClick={this.handleButtonClickRight} disabled={this.state.balancing}>Add Bean Right</button>
        <p>
          {this.balanceOutcome()}
        </p>
        <div className='stage'>
        <div className='balanceStage'>
          {this.addBeanLeft()}
        </div>
        <div className='balanceStage'>
          {this.addBeanRight()}
        </div>
        </div>
        <p className='warningText'>Warning Light:</p>
    <div className='Warning'>{this.warning()}</div>
      </div>
    )
    }
    else {
      return(
        <div>
        <p>You spilled the beans!</p>
        <p><button onClick={this.restart}>Try Again</button></p>
        <p><img src={killerBean} alt='how could you' /></p>
        </div>
      )
    }
}
}

export default Gameboard;