import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function News(props) {
  const [Arr, setArr] = useState([]);
  const [PageNo, setPageNo] = useState(1);
  const [TotalResults, setTotalResults] = useState(0);
  const [loading, setloading] = useState(false);


  async function fetchNews() {
    setloading(true);
    let country = 'us';
    let category =props.cat;
    let apiKey = 'b684dce335194e43a6821dfafec2b3b9';
    console.log(apiKey) ; 

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=6&page=${PageNo}`);
    let data = await response.json();
    setArr(data.articles || []);
    setTotalResults(data.totalResults);
    console.log(data.totalResults) ;
    setloading(false);
  }

  useEffect(() => {
    fetchNews(); 
  }, [props.cat, PageNo]); 

  return (
    
    loading ? (<Spinner/>) : (
      <>
      
    <h1 className='text-center'>TOP - {props.cat.toUpperCase()} - NEWS</h1>
    <div className="container">
      <div className="row">
        { 
          Arr.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem article={article} />
            </div>
          ))
        }
      </div>
      <div className='container d-flex justify-content-between'>
        <div>
        <button disabled={PageNo<=1} onClick={()=>{setPageNo(PageNo-1);}} type="button" class="btn btn-dark m-4">Prev</button>
        </div>
        <div>
        <button disabled={PageNo>=Math.ceil(TotalResults/6)} onClick={()=>{setPageNo(PageNo+1);}} type="button" class="btn btn-dark m-4">Next</button>
        </div>
      </div>
    </div>
      </>
    )
    
  );
}
