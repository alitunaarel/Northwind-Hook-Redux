import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import {Route,Switch} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard}/>
        <Route path="/product"  component={DashBoard}/>
        <Route path="/saveproduct:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route path="/cart" component={CartDetail}/>
        <Route component={NotFound}/>
      </Switch>
      
    </Container>
  );
}

export default App;
