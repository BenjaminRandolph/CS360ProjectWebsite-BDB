function Signup(){
	return(
		<div>
    		<form className="position-absolute top-50 start-50 translate-middle">
    		  <div className="mb-3">
    		    <label htmlFor="exampleInputEmail1" className="form-label">Email address2</label>
    		    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    		  </div>
    		  <div className="mb-3">
    		    <label htmlFor="exampleInputPassword1" className="form-label">Password2</label>
    		    <input type="password" className="form-control" id="exampleInputPassword1"></input>
    		  </div>
    		  <button type="submit" className="btn btn-primary">Submit2</button>
    		</form>
	  </div>
	);
}

export default Signup;