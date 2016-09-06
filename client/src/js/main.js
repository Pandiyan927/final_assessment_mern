var React=require("react");
var ReactDom=require("react-dom");
var {browserHistory, Route, Router, IndexRoute}=require('react-router');

var Home=require('./components/Home');
var AboutUS=require('./components/AboutUs');
var NavComponent=require('./components/NavComponent');
//var GmailBox=require('./components/GmailBox');
var FormSubmission=require('./components/FormSubmission');



var MainComponent=React.createClass({
	render:function(){
		console.log("Inside Main Render");
		return(
			<div>
				<div className="container-fluid">
          <NavComponent />
          <br />
          <br />
          <br />
          {this.props.children}
				</div>
			</div>
		);
	}
});

ReactDom.render(<Router history={browserHistory}>
                    <Route path="/" component={MainComponent}>
                      <IndexRoute component={Home}/>
                      <Route path="/home" component={Home} />
                      <Route path="/about/:aboutName" component={AboutUS} />
                      <Route path="/formsubmission" component={FormSubmission} />
                    </Route>
                </Router>,document.getElementById("app"));
