import React from 'react';

export default function NewsItem(props) {
    return (
        <div>
            <div className="card m-4" style={{ width: '18rem', height: '100%' }}>
                <img 
                    src={props.article.urlToImage} 
                    className="card-img-top" 
                    alt="..." 
                    style={{ height: '12rem', objectFit: 'cover' }} // Fixes image size
                />
                <div className="card-body d-flex flex-column">
                    
                    <h5 
                        className="card-title" 
                        style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {props.article.title}
                    </h5>
                    <p 
                        className="card-text" 
                        style={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3, // Limits to 3 lines
                        }}
                    >
                        {props.article.description}
                    </p>
                    <a href={props.article.url} className="btn btn-sm btn-primary mt-auto">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
