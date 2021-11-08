import React from 'react';
import "./Rating.css"
const Rating = (props) => {
  const { rating } = props;
  return (
      
    <div className="rating">
        {
         rating > 0 ? (
        <div>
            <span>
            <i
              className={
                rating >= 1
                  ? 'fa fa-star'
                  : rating >= 0.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 2
                  ? 'fa fa-star'
                  : rating >= 1.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 3
                  ? 'fa fa-star'
                  : rating >= 2.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 4
                  ? 'fa fa-star'
                  : rating >= 3.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 5
                  ? 'fa fa-star'
                  : rating >= 4.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
              }
            ></i>
          </span>
          </div>
         ): (
             <div className = "no-rating">
                <span>
                    <i class="far fa-star"></i>
                </span>
                <span>
                    <i class="far fa-star"></i>
                </span>
                <span>
                    <i class="far fa-star"></i>
                </span>
                <span>
                    <i class="far fa-star"></i>
                </span>
                <span>
                    <i class="far fa-star"></i>
                </span>
             </div>
         )
        }
     
    </div>
  );
}
export default Rating