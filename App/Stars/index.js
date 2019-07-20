import React, { Component } from 'react'
import {View,Image,TouchableOpacity,ImageBackground} from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import styles from './styles'
 class StarReview extends Component {
  constructor(props) {
    super(props)
    this.displayValue = props.display || props.value
    this.defaultRating = props.default || props.rating
    this.state = {
      rating: this.defaultRating,
    }
    this.isReactElement = React.isValidElement
  }

  componentWillReceiveProps(nextProps) {
    let defaultRating = this.props.rating || this.props.default
    let nextDefaultRating = nextProps.rating || nextProps.default
    if (defaultRating !== nextDefaultRating) {
      this.setState({
        rating: nextDefaultRating,
      })
    }
  }

  createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle) {
    return this.props.opacity ?
      this.isReactElement(this.props.fullStar) ?
        <View style={{opacity: partial}}>
          {this.props.fullStar}
        </View>
        :
        <ImageBackground style={starStyle} source={this.props.emptyStar}>
          <Image style={{
            height: this.props.starSize,
            width: this.props.starSize,
            opacity: partial,
            backgroundColor:'transparent'}} source={this.props.fullStar}/>
        </ImageBackground>
      :
      <ImageBackground style={starStyle} source={this.props.fullStar}>
        <View style={{flexDirection: 'row'}}>
         <View style={emptyBlockStyle}></View>
         <View style={blockStyle}></View>
        </View>
        <Image style={{height: this.props.starSize, width: this.props.starSize, backgroundColor: 'transparent', position: 'absolute'}} source={this.props.emptyStar}/>
      </ImageBackground>
  }

  displayMode() {
    const partial = this.displayValue - Math.floor(this.displayValue)
    const blockStyle = {height: this.props.starSize, width: this.props.starSize * (1.0 - partial), backgroundColor: this.props.backingColor}
    const emptyBlockStyle = {height: this.props.starSize, width: this.props.starSize * partial, backgroundColor: 'transparent'}
    const starStyle = {height: this.props.starSize, width: this.props.starSize, backgroundColor: this.props.backingColor}
    const stars = []
    for (let i = 1; i < this.props.count + 1; i++) {
      if (i == Math.floor(this.displayValue) + 1) {
        //partial star
        const partialStarComponent =
          <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
            {this.createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle)}
          </View>

        stars.push(partialStarComponent)
      } else if (i > Math.floor(this.displayValue) + 1) {
        //empty stars
        const emptyStarComponent = this.isReactElement(this.props.emptyStar) ?
          <View key={i}>{this.props.emptyStar}</View>
          :
          <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
            <Image style={starStyle} source={this.props.emptyStar}/>
          </View>

        stars.push(emptyStarComponent)
      } else {
        //filled stars
        const starComponent = this.isReactElement(this.props.fullStar) ?
          <View key={i}>{this.props.fullStar}</View>
          :
          <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
            <Image style={starStyle} source={this.props.fullStar}/>
          </View>

        stars.push(starComponent)
      }
    }
    return (
      <View>
        <View style={styles.starsprint}>{stars}</View>
      </View>
    )
  }
  createFullStarMember(index, star) {
    const starComponent = this.isReactElement(star) ?
      star
      :
      <Image style={{width: this.props.starSize, height: this.props.starSize}} source={star}/>
    return (
      <View key={index} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
        <TouchableOpacity disabled={this.props.disable} onPress={()=>{
          this.setState({rating: index})
          this.props.update(index)
          // this.props.change(index,this.props.index)
         
        }}>
          {starComponent}
        </TouchableOpacity>
       
      </View>
    )
  }

  fullRatingMode() {
    const stars = []
    for (let i = 1; i < this.props.count + 1; i++) {
      const star = (i <= this.state.rating) ? this.props.fullStar : this.props.emptyStar
      stars.push(
        this.createFullStarMember(i, star)
      )
    }
    return (
          <View style={styles.starsstyle}>
        {stars}
        </View>
    )
  }

  render() {
    const view = this.displayValue == null ? this.fullRatingMode():this.displayMode()
    return (
      <View>
        {view}
      </View>
    )
  }
}


  
  export default StarReview;
StarReview.defaultProps = {
  fullStar: <Icon name="star"  color='black' size={30}/>,
  emptyStar: <Icon name="star-outline"  color='black' size={30}/>,
  disabled: false,
  value: null,
  display: null,
  count: 5,
  rating: 0,
  default: 0,
  starSize: 30,
  update: () => {},
  opacity: false,
  spacing: 0
}