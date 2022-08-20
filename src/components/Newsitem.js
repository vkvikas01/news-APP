import React, { Component } from 'react'

export class Newsitem extends Component {
   
  render() {
    let {title, description ,imageUrl ,newsurl,Author, Date}=this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width:" 18rem"}}>
            <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2022/08/16/1600x900/2172b890-1c86-11ed-bbe8-9cf972e52f11_1660639896429_1660639896429_1660639904666_1660639904666.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!Author?"unknown":Author} on {Date}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
