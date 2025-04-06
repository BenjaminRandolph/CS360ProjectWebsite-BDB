import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import Account from './Account'

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
						<h1>Login</h1>
						<p></p>
        			    <form>
        			      <div className="mb-3">
        			        <label className="form-label">Username</label>
        			        <input type="text" className="form-control" />
        			      </div>
        			      <div className="mb-3">
        			        <label className="form-label">Password</label>
        			        <input type="text" className="form-control" />
        			      </div>
        			      <button type="submit" className="btn btn-primary">Submit</button>
        			    </form>
        			  </div>
        			} />
        		<Route path="/signup" element={<Signup />} />
				<Route path="/account" element={<Account />} />
      		</Routes>
	  </div>
	);
}

export default App;