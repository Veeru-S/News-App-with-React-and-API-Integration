import React, { Component, useCallback } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor(){
    super();
    console.log("I am constructor from News");
    this.state = {
      articles: [],
      loading:false
    }  
  }

  async componentDidMount(){
    // console.log("veeru");
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b926765c4cc44b739953c2a97a4b9e29&page=1pageSize=${this.state.page + 1}&pageSize=${this.props.pageSize}";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleprevclick= async()=>{
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b926765c4cc44b739953c2a97a4b9e29&page=${this.state.page + 1}&pageSize=${this.props.pageSize}";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false})
  }

  handlenextclick= async()=>{
    if {this.state.page + 1 > Math.cell{this.state.totalResults/5}}
  }

  render() {
    return (
      <div classsName="container my-3">
        <h2 className='text-center'>News - Top Headlines</h2>
        <div class="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url} >
            <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
           </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.cell{this.state.totalResults/5} type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
        <div className="container d-flex justify-content-center">
          <h6>Created by VEERU G</h6>
        </div>
    </div>
    )
  }
}

export default News
