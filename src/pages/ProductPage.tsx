import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products_pro';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id} = useParams();
  console.log(id)
  const product = products.find((p) => p.id.toString() == id);
  console.log(product)
//   const product = {
//   id: "product_001",
//   name: "Plain Brass Wire",
//   description: "Plain Brass Wire is a high-precision wire primarily composed of copper and zinc ",
//   keyFeatures: [
//     "Smooth surface with uniform diameter",
//     "Excellent tensile strength and flexibility",
//     "High electrical and thermal conductivity",
//     "Superior corrosion resistance"
//   ],
//   technicalSpecifications: {
//     "Material": "CuZn37 (63% Cu, 37% Zn)",
//     "Diameter Range": "0.10 mm to 1.60 mm",
//     "Tensile Strength": "500–900 MPa",
//     "Elongation": ">10%",
//     "ElectricalConductivity": "~23% IACS"
//   },
//   advantages: [
//     "Ideal for precise wire cutting",
//     "Longer lifespan during machining operations",
//     "Easy to handle and bend",
//     "Suitable for electroplating"
//   ],
//   applications: [
//     "EDM machining",
//     "Electrical connectors",
//     "Jewelry manufacturing",
//     "Decorative items"
//   ],
//   image: "/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png"
// };

  return (
    <div className="pt-14 bg-gray-50">
      <ProductDetails productData={product} />
    </div>
  );
};

export default ProductPage;
