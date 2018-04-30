import React, { Component } from 'react';
import jsonp from 'jsonp-es6';

const norrisURL = 'https://api.chucknorris.io/jokes/random?category=explicit';
const category = "explicit";

class ShowResult extends Component {

    constructor(props) {

        super(props);
        this.state = { 
            meme: "" 
        };
        // this._fetchResult = this._fetchResult.bind( this );
    }

    // _fetchResult() {

    componentDidMount() {
        fetch(norrisURL, {
            category: category,
        })
            .then(results => results.json())
            .then(results => {
                this.setState({
                    meme: results.value
                })
                console.log(results.category);
            })
    }

        // let outputmeme = fetch(norrisURL).then(results => {console.log(results.json())});    
        // console.log(outputmeme);
        // this.setState({ meme: outputmeme });
        // console.log("entering memfetcher");

        // var categoryList = 'https://api.chucknorris.io/jokes/categories?';
        // // jsonp(norrisURL).then(function (results) {}.bind(this));

        //     // let meme = data.results.map((value) => {
        //     //     console.log(meme);
        //     //     return (
        //     //         <div key={value.results}>
        //     //         </div>

        //     //     )
        //     // })
        //     // this.setState( {meme: meme} );

    render () {
        return (
            <div className = "showresult">
                <p>Hello</p>

                <div>
                    { this.state.meme }
                </div>
            </div>
        );
    }
}

export default ShowResult;