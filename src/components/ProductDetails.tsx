import React from 'react';

const ProductDetails = ({ productData }) => {
  if (!productData) return <div className="text-center text-gray-500">Product not found.</div>;
 console.log(productData)
  const { product,name, description, keyFeatures, technicalSpecifications, advantages, applications, image } = productData;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10 bg-b">
      {/* Section 1: Image + Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className='w-full md:max-w-fit h-96'>
        <img src={image} alt={product} className="h-full p-2 w-full rounded-xl shadow-md  object-cover md:object-contain" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product ?? name}</h1>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Description</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Section 2: Description */}
      <section>

         <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 p-2">
            {keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
      </section>

      {/* Section 3: Technical Specifications Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Technical Specifications</h2>
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <tbody>
              {Object.entries(technicalSpecifications).map(([key, value]) => (
                <tr key={key} className="even:bg-gray-50">
                  <td className="border px-4 py-2 font-medium text-gray-700">{key}</td>
                  <td className="border px-4 py-2 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Advantages */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Advantages</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {advantages.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 5: Applications */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Applications</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {applications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetails;
