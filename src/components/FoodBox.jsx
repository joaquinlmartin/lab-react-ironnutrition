import React from 'react';


export default function FoodBox ({name, calories, image, quantity}) {
    return(
        <div>
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt="img"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" defaultValue={quantity} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
        </div>
    )
}