import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  articles= [
    {
    "source": {
    "id": "news-com-au",
    "name": "News.com.au"
    },
    "author": null,
    "title": "Chef at Clarke’s ‘last supper’ speaks out",
    "description": "<p>The chef who served Michael Clarke and Jade Yarbrough the night they clashed on video amid claims the cricketer cheated on her has spoken out.</p>",
    "url": "https://www.news.com.au/sport/sports-life/chef-who-served-michael-clarke-and-jade-yarbrough-on-the-night-of-fracas-breaks-silence/news-story/a89df6cd36f1314c86a14cf6ca5edbef",
    "urlToImage": "https://content.api.news/v3/images/bin/8f29d4ed267f95b3b8329bb7b63884bb",
    "publishedAt": "2023-01-20T06:18:00Z",
    "content": "The chef who served Michael Clarke and Jade Yarbrough the night they clashed on video amid claims the cricketer cheated on her has spoken out.\r\nAndrea Ravezzani, the chef and owner of the Noosa Water… [+2971 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
    ]
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a8a3010c43f84d83a94b14d36ae77fe7&page=1pagesize=20";
    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
  }

  
  handleprevclick = async()=>{
    console.log("previous")
    
   
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a8a3010c43f84d83a94b14d36ae77fe7&page= ${this.state.page - 1}&pagSize=20`;
    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  
  }

  handleNextclick = async()=>{
    console.log("Next")
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a8a3010c43f84d83a94b14d36ae77fe7&page= ${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  }


  render() {
    return ( 
      <div className="container my-3">
        <h2> News:Daily Updated  </h2>
        {/* higher order array method */}
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}  newsurl={element.url}/ >
          </div>
        })} 
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; preview</button>
          <button type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
