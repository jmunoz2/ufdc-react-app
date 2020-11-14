import React, { useState, useEffect } from "react";
import { getPartners } from "../api/partnerApi";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class InfiniteScrollingPage extends React.Component {
  state = {
      partners: [],
      hasMore: true
  };

  fetchMoreData = () => {
    
    setTimeout(() => {
      this.setState({
        partners: this.state.partners.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  componentDidMount() {
    getPartners().then(partners => this.setState({partners: partners}));
  }

  render() {
    return (
      <div>
      <h1>We have a total of {this.state.partners.length} Partners</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.partners.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.partners.map( (partner, i) => {
            return (
              <div style={style} key={i}>
                div - #{partner.slug}
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteScrollingPage;