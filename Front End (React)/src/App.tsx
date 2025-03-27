import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'

function App(){
	return(
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 start-0">
				<div className="container-fluid">
					<nav>
        				<Link to="/" className='navbar-brand'>BDB</Link>
      				</nav>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				 	</button>
				  	<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<nav>
        						<Link to="/signup" className='nav-link'>Signup</Link>
      							</nav>
					  		</li>
						</ul>
				  	</div>
				</div>
	 		</nav>

			<Routes>
				<Route path="/" element={
        			<div className="position-absolute top-50 start-50 translate-middle">
        			    <form>
        			      <div className="mb-3">
        			        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        			        <input type="email" className="form-control" id="exampleInputEmail1" />
        			      </div>
        			      <div className="mb-3">
        			        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        			        <input type="password" className="form-control" id="exampleInputPassword1" />
        			      </div>
        			      <button type="submit" className="btn btn-primary">Submit</button>
        			    </form>
        			  </div>
        			} />
        		<Route path="/signup" element={<Signup />} />
      		</Routes>
	  </div>
	);
}

export default App;