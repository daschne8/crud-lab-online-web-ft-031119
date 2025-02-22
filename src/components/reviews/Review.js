import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () =>{
    console.log(this.props.review.id);
    console.log(this.props.restaurantId);
    this.props.deleteReview(this.props.review.id)
  }


  render() {
    const { review } = this.props
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
