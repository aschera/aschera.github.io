
    
var MyComponent = React.createClass({
  getInitialState: function () {
    return { input: '' };
  },

  handleChange: function(e) {
    this.setState({ input: e.target.value });
  },

  handleClick: function() {
    let x = document.getElementById('result');
    
    console.log(this.state.input);
  },

  render: function() {
    return (
        <div>
            <input type="text" onChange={ this.handleChange } />
            <input
              type="button"
              value="Show the text input"
              onClick={this.handleClick}
            />

            <div className="result">
              <div>{this.state.input} <br/></div>
            </div>
        </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);
    
