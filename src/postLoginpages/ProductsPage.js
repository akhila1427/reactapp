import NavBar from "../navbar/NavBar";
import reactImage from "./5.jpg";
import { DataShare } from "../navigation/navigation";
import { useContext } from "react";

const ProductPage = () => {
  const{darkTheme} =useContext(DataShare)
  const numberOfRows = 4;
  const cardsPerRow = 3;

  const cardArray = Array.from({ length: numberOfRows * cardsPerRow }, (_, index) => index + 1);

  return (
    <>
      <h1>Welcome to the product page on my website</h1>
      <NavBar />
      <div style={{ height:100,width:100,backgroundColor:darkTheme?"black":"red"}}></div>

      {/* =================== */}
      <div className="container mt-3">
        <h2>Card Images</h2>
        {[...Array(numberOfRows)].map((row, rowIndex) => (
          <div key={rowIndex} className="row mb-3">
            {cardArray
              .slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow)
              .map((cardNumber) => (
                <div key={cardNumber} className="col-md-4">
                  <div className="card" style={{ marginBottom: "20px" }}>
                    <img
                      className="card-img-top"
                      src={reactImage}
                     
                      style={{ width: "100%" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title">John Doe</h4>
                      <p className="card-text">
                        Some example text some example text. John Doe is an architect and engineer
                      </p>
                      <a href="#" className="btn btn-primary">
                        See Profile
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
