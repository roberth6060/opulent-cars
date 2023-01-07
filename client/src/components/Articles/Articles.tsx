const Articles = ()=> {
    return (  <div id="articles-page">
      <div id="articles-section">
        <div className="container">
          <h2>Articles</h2>
          <div className="row">
            <a href="./article1.html" className="card-container">
              <img
                src="../assets/images/photo-1562522570-86db8cca0f90.avif"
                alt="car"
                width="200"
                height="200"
              />
              <h4>History of Luxury Cars</h4>
              <p>
                The history of luxury cars can be traced back to the early
                1900s, when the first luxury vehicles were....
              </p>
            </a>
            <a href="./article2.html" className="card-container">
              <img
                src="../assets/images/flavien-1WXjoRZeWq4-unsplash.jpg"
                alt="car"
                width="200"
                height="200"
              />
              <h4>Why Luxury Car Are So Expensive</h4>
              <p>
                Luxury cars are expensive for a number of reasons. One of the
                main reasons is the materials and...
              </p>
            </a>
            <a href="./article3.html" className="card-container">
              <img
                src="https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="car"
                width="200"
                height="200"
              />
              <h4>Why People Like Luxury Cars</h4>
              <p>
                People like luxury cars for a variety of reasons. For some, it's
                the prestige and status that comes with owning a...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>)
}

export default Articles; 