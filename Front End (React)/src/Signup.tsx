function Signup(){
	return(
		<div className="position-absolute top-50 start-50 translate-middle">
				<h1>Signup</h1>
				<p></p>
		        <form>
		        	<div className="mb-3">
		            	<label className="form-label">Username</label>
		                <input type="text" className="form-control" />
		            </div>
		            <div className="mb-3">
		            	<label className="form-label">Email</label>
		                <input type="text" className="form-control" />
		            </div>
					<div className="mb-3">
		            	<label className="form-label">Phone Number</label>
		                <input type="text" className="form-control" />
		            </div>
					<div className="mb-3">
		            	<label className="form-label">Address</label>
		                <input type="text" className="form-control" />
		            </div>
					<div className="mb-3">
		            	<label className="form-label">Password</label>
		                <input type="text" className="form-control" />
		            </div>
		            	<button type="submit" className="btn btn-primary">Submit</button>
		        </form>
		</div>
	);
}

export default Signup;