import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3'],
  };
  styles = {
    fontSize: 50,
    fontWeight: 'bold',
  };
  renderTags() {
    if (!this.state.tags.length) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(
          (
            tag //render each element in array
          ) => (
            <li key={tag}>{tag}</li>
          )
        )}
      </ul>
    );
  }
  constructor() {
    super(); //inherits everthing from Counter into this constructor func. in this case, we can access 'this' variable
    console.log('constructor', this);
  }
  render() {
    return (
      <div>
        {/* <img alt="Nice" src={this.state.imageUrl} /> */}
        {/* <React.Fragment> */}
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement} //only references func, not calls
        >
          Increment
        </button>
        {!this.state.tags.length && 'Please create a new tag!'}
        {this.renderTags()}
        {/* </React.Fragment> */}
      </div>
    );
  }
  handleIncrement() {
    console.log('Increament Clicked', this.state.count);
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { count } = this.state; //object destructuring
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    return count === 0 ? 'Zero' : count;
  }
}
