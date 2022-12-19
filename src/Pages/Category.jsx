import React from "react";
import Layout from "../Componets/Layout";
import { useParams } from "react-router-dom";
import CategoryItems from "../Componets/CategoryItems";
import products from "../utils/products.json";

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const CategoryName = this.props.params.categoryName;

    const dataCategory = Object.keys(products).find(
      (el) => el === CategoryName
    );

    const dataUpdate = Object.entries(products).find(
      (el) => el[0] === dataCategory
    );

    dataUpdate
      ? this.setState({ data: dataUpdate[1].items })
      : alert("a aparut o eroare!!!");
  }

  render() {
    return (
      <div className="container">
        <Layout>
          <div className="row">
            <div className="d-flex ">
              {this.state.data.map((element, id) => {
                return (
                  <CategoryItems
                    image={element.image}
                    name={element.name}
                    price={element.price}
                    currency={element.currency}
                    key={id}
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

export default withRouter(Category);
