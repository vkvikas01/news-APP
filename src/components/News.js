import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country-${this.props.country}&category=${this.props.category}&apiKey=2e69ebe1ea5a431bbab283e9f9932189&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country-${this.props.country}&category=${this.props.category}&apiKey=2e69ebe1ea5a431bbab283e9f9932189&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    handlePrevClick = async () => {
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country-${this.props.country}&category=${this.props.category}&apiKey=2e69ebe1ea5a431bbab283e9f9932189&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    render() {

        return (
            <div className='container my-3'>

                <h1 className="text-center">Daily News HeadLines</h1>
                {/* <h4 className=" mx-4 my-6">{this.props.category}</h4> */}
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 mx-4 my-1" key={element.url}>
                            <Newsitem key={element.url} title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsurl={element.url} Author={element.author} Date={element.publishedAt} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark " onClick={this.handlePrevClick}>&larr;previous</button>
                    <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))} className="btn btn-dark " onClick={this.handleNextClick}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
