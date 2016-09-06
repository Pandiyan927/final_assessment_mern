var React=require("react");



console.log("Inside Left Panel");
var FormSubmissionGetValues=React.createClass({
	 getInitialState: function()
  	{
    	return({status:false});
  	},

	changeStatusOfViewModalToTrue:function(){

  		this.setState({status:true});
  		console.log("inside change status of modal");
  		console.log(status);
  	},
	changeStatusOfViewModalToFalse:function(){

  		this.setState({status:false});
  	},

	render:function(){
		return(

				<div>
				  <table className="table table-responsive table-bordered table-hover col-md-12 test ">
					<tbody>
					  <tr>

							<td className="col-md-4">{this.props.docId}</td>
							<td className="col-md-4">{this.props.waveValue}</td>
							<td className="col-md-4">{this.props.nameValue}</td>
							<td className="col-md-4">{this.props.emailValue}</td>

					  </tr>
					</tbody>
				  </table>
				</div>
		);
	}
});

module.exports=FormSubmissionGetValues;
