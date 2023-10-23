import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class  extends Component {
constructor()
{
    super();
    this.state={
        articles:[],
        loading:false
    }
}
async componentDidMount() { 
    let url= 'https://newsapi.org/v2/top-headlines?country=in&apiKey=88ca9e04bcd44bd5bd5280c5cfa48dd1';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})
 }
  render() 
  {
    return (
        <>
        <h1 className='text-center text-3xl font-semibold mt-5 '>Top Headlines</h1>
        <div className="mt-6 mx-4 grid grid-cols-4 justify-items-stretch gap-2">
            {this.state.articles.map((element)=>{
                return <div key={element.url}>
                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        </>
    )
  }
}
