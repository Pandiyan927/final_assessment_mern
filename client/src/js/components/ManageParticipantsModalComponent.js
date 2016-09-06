var React=require('react');

var ManageParticipantsModalComponent=React.createClass({
  getInitialState:function()
  {
    return({name:""});
  },

  handlechange:function(event)
  {
    this.setState({name:event.target.value});
  },

  save:function()
  {
    var fromVal=this.props.fromValue;
    var subjVal=this.props.subjValue;
    var dateVal=this.props.dateValue;
    var encodedBody = this.props.encodedBody;
    //encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    //encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/save',
          dataType: 'json',
          contentType: "application/json",
          type: 'POST',
          data: JSON.stringify({'from': fromVal,'subject':subjVal, 'date':dateVal, 'message':encodedBody}),
          success: function(data)
          {
            console.log("Success");
          }.bind(this),

          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
    var change=this.props.changeStatusToFalse;
  },

  render:function(){

    return(
      <div>
        <div className="modal fade" id="myModalManageParticipants">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" data-dismiss="modal" onClick={this.props.changeStatusToFalse}>&times;</button>
                <h4 className="modal-title">View Here !!!</h4>
              </div>

              <div className="modal-body">

                <form  className="form-horizontal">

                    <div class="form-group">
                      <label  className="col-sm-2 control-label pull-left" for="name">Name : </label>
                      <div class="col-sm-10">
                        <input type="name" className="form-control" id="name" value={this.state.name} onChange={this.handlechange} placeholder="Name"/>
                      </div>
                    </div>

                 


                </form>
              </div>

              <div className="modal-footer">

                <button className="btn btn-warning" type="button" onClick={this.save}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports=ManageParticipantsModalComponent;
