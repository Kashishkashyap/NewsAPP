import React from 'react'

const NewsItem =(props)=> {
    let {title, description,imageUrl,newsUrl,author,date,source} = props;
    return (
     
      <div>
          <div className="card" >
            <div style={{display:'flex ', justifyContent:'flex-end',position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger ">
              {source}
            </span>
            </div>
          
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* target= blank opens news item in new tab */}
            <p className="card-text"><small className="text-body-secondary">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
        </div>
         )
}

export default NewsItem
