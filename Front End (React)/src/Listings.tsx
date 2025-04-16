function Listings(){
	return(
	<>
		<header>
			<div className="p-3 text-center bg-white border-bottom">
				<div className="container">
					<div className="row gy-3">
						<div className="col-lg-2 col-sm-4 col-4">
							<a href="https://mdbootstrap.com/" target="_blank" className="float-start">
								<img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
							</a>
						</div>
						<div className="col-lg-5 col-md-12 col-12">
							<div className="input-group float-center position-absolute top-0 start-50">
								<div className="form-outline">
									<input type="search" id="form1" className="form-control" placeholder= "Search"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-primary mb-4">
				<div className="container py-4">
					<h3 className="text-white mt-2">Listings</h3>
				</div>
			</div>
		</header>
		<section className="">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3">
		        <button
		                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
		                type="button"
		                data-mdb-toggle="collapse"
		                data-mdb-target="#navbarSupportedContent"
		                aria-controls="navbarSupportedContent"
		                aria-expanded="false"
		                aria-label="Toggle navigation"
		                >
		          <span>Show filter</span>
		        </button>
		      </div>
		      <div className="col-lg-9">
		        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
		          <strong className="d-block py-2">32 Items found </strong>
		          <div className="ms-auto">
		            <select className="form-select d-inline-block w-auto border pt-1">
		              <option value="0">Best match</option>
		              <option value="1">Recommended</option>
		              <option value="2">High rated</option>
		              <option value="3">Randomly</option>
		            </select>
		            
		          </div>
		        </header>

		        <div className="row">
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/10.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <div className="d-flex flex-row">
		                  <h5 className="mb-1 me-1">$34,50</h5>
		                  <span className="text-danger"><s>$49.99</s></span>
		                </div>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/11.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/12.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/13.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Blazer Suit Dress Jacket for Men, Blue color</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/14.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$510.00</h5>
		                <p className="card-text">Slim sleeve wallet Italian leather - multiple colors</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/10.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$79.99</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/11.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/12.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/9.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$43.50</h5>
		                <p className="card-text">Summer New Men's Denim Jeans Shorts</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>

		        <hr />
		        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
		          <ul className="pagination">
		            <li className="page-item disabled">
		              <a className="page-link" href="#" aria-label="Previous">
		                <span aria-hidden="true">&laquo;</span>
		              </a>
		            </li>
		            <li className="page-item active"><a className="page-link" href="#">1</a></li>
		            <li className="page-item"><a className="page-link" href="#">2</a></li>
		            <li className="page-item"><a className="page-link" href="#">3</a></li>
		            <li className="page-item"><a className="page-link" href="#">4</a></li>
		            <li className="page-item"><a className="page-link" href="#">5</a></li>
		            <li className="page-item">
		              <a className="page-link" href="#" aria-label="Next">
		                <span aria-hidden="true">&raquo;</span>
		              </a>
		            </li>
		          </ul>
		        </nav>
		      </div>
		    </div>
		  </div>            
		</section>
	</>
	)
};

export default Listings;