import React, { Component } from "react";

class ShowImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* `currentImage` is a state variable which is used to store the current image name. */
      imageName: "basketball",
      currentImage: "basketball.jpg",
    };
    this.labels = [
      {
        name: "basketball",
        imageUrl: "basketball.jpg",
      },
      {
        name: "pubg",
        imageUrl: "pubg.jpeg",
      },
      {
        name: "tiger",
        imageUrl: "tiger.jpg",
      },
      {
        name: "phone",
        imageUrl: "phone.jpg",
      },
      {
        name: "laptop",
        imageUrl: "laptop.jpg",
      },
      {
        name: "cricket",
        imageUrl: "cricket.jpg",
      },
    ];
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="button-container">
            {this.labels.map((elm) => {
              return (
                <button
                  key={elm.name}
                  type="button"
                  onClick={() => {
                    this.setState({
                      currentImage: elm.imageUrl,
                      imageName: elm.name,
                    });
                  }}
                >
                  {elm.name.toLocaleUpperCase()}
                </button>
              );
            })}
          </div>
          <div className="image-container">
            <img
              className="image"
              src={`/assets/${this.state.currentImage}`}
              alt={this.state.name}
            />
          </div>
        </div>
      </>
    );
  }
}

ShowImage.propTypes = {};

export default ShowImage;
