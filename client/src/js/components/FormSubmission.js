var React=require("react");
var FormSubmissionGetValues=require('./FormSubmissionGetValues')
var FormSubmission=React.createClass({


	getInitialState:function(){
  		return({dropdown:"",name:"",email:"",phone:"",giturl:"",empcode:"",empdept:"",empdesig:"",skills:"",exp:"",getData:[]});
    },

    handleDropdown:function(event){
    	this.setState({dropdown:event.target.value})
    },	

    handleName:function(event){
    	this.setState({name:event.target.value})
    },	

    handleEmail:function(event){
    	this.setState({email:event.target.value})
    },	
    handlePhone:function(event){
    	this.setState({phone:event.target.value})
    },
    handleGitUrl:function(event){
    	this.setState({giturl:event.target.value})
    },
    handleEmpCode:function(event){
    	this.setState({empcode:event.target.value})
    },
    handleEmpDept:function(event){
    	this.setState({empdept:event.target.value})
    },
    handleEmpDesig:function(event){
    	this.setState({empdesig:event.target.value})
    },    
    handleSkills:function(event){
    	this.setState({skills:event.target.value})
    },
    handleExp:function(event){
    	this.setState({exp:event.target.value})
    },

    componentDidMount:function(){
    	this.getData();
  	},


	postData:function()
	  {

	    $.ajax({
	          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
	          url: '/save',
	          dataType: 'json',
	          contentType: "application/json",
	          type: 'POST',
	          data: JSON.stringify({'wave_dropdown': this.state.dropdown,'inputname':this.state.name, 'inputemail':this.state.email, 'inputphone':this.state.phone,inputgiturl:this.state.giturl,inputempcode:this.state.empcode,inputempdept:this.state.empdept,inputempdesig:this.state.empdesig,inputskills:this.state.skills,inputexp:this.state.exp}),
	          success: function(data)
	          {
	            console.log("Success");
	            this.setState({dropdown:"",name:"",email:"",phone:"",giturl:"",empcode:"",empdept:"",empdesig:"",skills:"",exp:""});

	          }.bind(this),

	          error: function(xhr, status, err) {
	            console.error("Error.."+err.toString());
	          }.bind(this)
	        });


	    this.getData();

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


	render:function(){

		var getdata=this.state.getData.map(function(data) {
      		console.log("Inside Form Submission.js render inside map");
      		return(
        		<FormSubmissionGetValues waveValue={data.wave_dropdown} nameValue={data.inputname} emailValue={data.inputemail} docId={data._id}/>
      		);
    	});
		return(

			<div>
				<div className="ManageParticipants">
		            <div className="container-fluid">
			            <div className="row">

				            <div className="col-md-2">
				            </div>

				            <div className="col-md-8">
				            	<h1 className="text-center">Manage Participants</h1>
								<form action="/saveee" method="POST">
									<div className="form-group">
						               	<label>Wave :</label>
						                <select onChange={this.handleDropdown} name="wave_dropdown" className="form-control">
						                   <option type="text" value="wave3">Wave 3</option>
						                   <option type="text" value="wave4">Wave 4</option>
						                   <option type="text" value="wave5">Wave 5</option>
						                   <option type="text" value="wave6">Wave 6</option>
						                </select>
						            </div>

								    <div className="form-group">
								      <label for="name">Name:</label>
								      <input value={this.state.name} onChange={this.handleName} name="inputname" type="text" className="form-control" id="name" placeholder="Enter name"></input>
								    </div>

								    <div className="form-group">
								      <label for="email">Email:</label>
								      <input value={this.state.email} onChange={this.handleEmail} name="inputemail" type="text" className="form-control" id="email" placeholder="Enter email"></input>
								    </div>

							 		<div className="form-group">
								      <label for="phone">Phone No. :</label>
								      <input value={this.state.phone} onChange={this.handlePhone}  name="inputphone" type="text" className="form-control" id="phone" placeholder="Enter phone number"></input>
								    </div>

								    <div className="form-group">
								      <label for="giturl">GIT URL:</label>
								      <input value={this.state.giturl} onChange={this.handleGitUrl} name="inputgiturl" type="text" className="form-control" id="giturl" placeholder="Enter GIT URL"></input>
								    </div>

								    <div className="form-group">
								      <label for="empcode">Employee Code:</label>
								      <input value={this.state.empcode} onChange={this.handleEmpCode}  name="inputempcode" type="text" className="form-control" id="empcode" placeholder="Enter Employee code"></input>
								    </div>

								    <div className="form-group">
								      <label for="empdept">Employee Department:</label>
								      <input value={this.state.empdept} onChange={this.handleEmpDept} name="inputempdept" type="text" className="form-control" id="empdept" placeholder="Enter Employee Department"></input>
								    </div>

								    <div className="form-group">
								      <label  for="empdesig">Employee Designation:</label>
								      <input value={this.state.empdesig} onChange={this.handleEmpDesig} name="inputempdesig" type="text" className="form-control" id="empdesig" placeholder="Enter Employee Designation"></input>
								    </div>

								    <div className="form-group">
								      <label for="skills">Skills:</label>
								      <textarea value={this.state.skills} onChange={this.handleSkills} name="inputskills" type="text" className="form-control" id="skills" rows="3" placeholder="Enter The Skills"></textarea>
								    </div>

								    <div className="form-group">
								      <label for="exp">Experience:</label>
								      <input value={this.state.exp} onChange={this.handleExp} name="inputexp" type="text" className="form-control" id="exp" placeholder="Enter Employee Experience"></input>
								    </div>


								    <button type="button" className="btn btn-warning" onClick={this.postData}>Submit</button>
								</form>


							</div>

							<div className="col-md-2">

				            </div>

					    </div>
					    <div className="row">
					    	<div className="col-md-2">
				            </div>
				            <div className="col-md-8">
				            {getdata}
				            </div>
				            <div className="col-md-2">
				            </div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports=FormSubmission;