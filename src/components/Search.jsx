class Search extends React.Component {
  constructor(props) {
    super(props);
    this.throttledSearch = _.throttle(this.props.searchYouTube, 500);
  }

  handleChange(event) {
    let text = this._text;
    this.props.updateSearch(event.target.value);
    this.throttledSearch();
  }

  handleSubmit(event) {
    event.preventDefault();
    let text = this._text;
    this.props.updateSearch(text.value);
    this.throttledSearch();
    text.value = '';
  }

  render() {
    return (
      <div>
        <form className="search-bar form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form-control" type="text" 
                  ref={(input) => this._text = input}
                  onChange={this.handleChange.bind(this)} />
          <button className="btn hidden-sm-down" type="submit">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </form>
      </div> 
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
