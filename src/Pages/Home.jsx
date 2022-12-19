import React from "react";
import Layout from "../Componets/Layout";
import HomeCategory from "../Componets/HomeCategory";
import products from "../utils/products.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryName: [],
    };
  }

  componentDidMount() {
    const categories = Object.values(products);
    const categoryName = Object.keys(products);

    this.setState({
      categories,
      categoryName,
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <div className="container">
            <div className="row">
              {this.state.categories.map((element, index) => {
                return (
                  <HomeCategory
                    image={element.image}
                    title={element.name}
                    description={element.description}
                    key={index}
                    routeName={this.state.categoryName[index]}
                  />
                );
              })}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Home;
