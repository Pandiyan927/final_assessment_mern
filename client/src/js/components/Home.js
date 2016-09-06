var React = require('react');



var Home = React.createClass({
  getInitialState:function(){
  	return({getData:[],updateData:[],deleteData:[]});
  },

  componentDidMount:function(){
    //this.getData();
  },
  getData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/getData',
          dataType: 'json',
          type: 'GET',
          success: function(data)
          {
            console.log("Success");
            this.setState({getData:data});
          }.bind(this),

          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
  },






  render:function()
  {



    return(
      <div>
        <div className="Home">
          <div className="container-fluid">
            <h1 className="text-center">Home 1111</h1>
            
            <div className="row">
              <div className="col-sm-2">
                <h4 className="text-center">Hey !!!</h4>
              </div>
              <div className="col-sm-10 pull-right">
                <h4 className="text-center">This is Home</h4>
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
 }
 });

module.exports = Home;
