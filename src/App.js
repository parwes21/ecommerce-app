import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
 import ProductDetail from "./ProductDetail";
 import ProductPage from "./ProductPage";
function App() {
  return (
<>
<Routes>
  <Route exact path="/ecommerce-app" element={<ProductPage />} />
  <Route path="productdetail/:id" element={<ProductDetail />} />
</Routes>

</>
  );
}

export default App;
