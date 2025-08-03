import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpoolTable from './SpoolTable';

const ProductDetails = ({ productData }) => {
  // Debug: Log what we're receiving
  console.log('ProductDetails received:', productData);
  
      const navigate = useNavigate();

  const data = productData;
  
  if (!data) return <div className="text-center text-gray-500 py-8">Product not found.</div>;

  const { 
    product, 
    name, 
    description, 
    keyFeatures, 
    technicalSpecifications, 
    advantages, 
    applications, 
    image, 
    packagingAndDelivery, 
    complianceAndQuality, 
    customizationOptions, 
    handlingAndStorage, 
    certifications, 
    availableAddOns, 
    note, 
    variants,
    spoolTable 
  } = data;

  const renderSection = (title, content, type = 'list') => {
    if (!content) return null;
    
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">{title}</h2>
        {type === 'list' && Array.isArray(content) && (
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
            {content.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        )}
        {type === 'object' && typeof content === 'object' && !Array.isArray(content) && (
          <div className="grid gap-3">
            {Object.entries(content).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">{key}</h3>
                {typeof value === 'object' && !Array.isArray(value) ? (
                  <div className="space-y-1">
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <p key={subKey} className="text-sm text-gray-600">
                        <span className="font-medium">{subKey}:</span> {String(subValue)}
                      </p>
                    ))}
                  </div>
                ) : Array.isArray(value) ? (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {value.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">{String(value)}</p>
                )}
              </div>
            ))}
          </div>
        )}
        {type === 'text' && typeof content === 'string' && (
          <p className="text-gray-600 leading-relaxed bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            {content}
          </p>
        )}
      </section>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 md:py-8 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button onClick={()=>navigate(-1)} className="mb-6 ml-4 bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
        ← Back
      </button>

      {/* Header Section with Image and Product Info */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-[3rem] p-8 mb-8 text-white shadow-detail-page">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-fit">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img 
                src={image} 
                alt={product || name} 
                className="w-full h-96  object-contain rounded-lg" 
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-xl md:text-4xl font-bold mb-4">{product || name}</h1>
            <div className="text-blue-100 leading-relaxed text-base md:text-base">
              {/* <p className='text-lg bg-white inline-block text-black rounded-md px-2'>Description : </p> */}
                <div className='flex flex-col gap-2' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        
        {/* Key Features */}
        {keyFeatures && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Specifications */}
        {technicalSpecifications && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technical Specifications</h2>
            <div className="overflow-x-auto bg-gray-50 rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(technicalSpecifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-100 w-1/3">{key}</td>
                      <td className="px-6 py-4 text-gray-600">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {spoolTable && <SpoolTable />} 

        {/* Advantages */}
        {advantages && renderSection("Advantages", advantages)}

        {/* Packaging and Delivery */}
        {packagingAndDelivery && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">Packaging & Delivery</h2>
            <div className="overflow-x-auto bg-gray-50 rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(packagingAndDelivery).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-100 w-1/3">{key}</td>
                      <td className="px-6 py-4 text-gray-600">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Compliance and Quality */}
        {complianceAndQuality && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">Compliance & Quality</h2>
            <div className="overflow-x-auto bg-gray-50 rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(complianceAndQuality).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-100 w-1/3">{key}</td>
                      <td className="px-6 py-4 text-gray-600">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Customization Options */}
        {customizationOptions && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">Customization Options</h2>
            <div className="overflow-x-auto bg-gray-50 rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {Array.isArray(customizationOptions) ? 
                    customizationOptions.map((option, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-white transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-100 w-1/3">Option {index + 1}</td>
                        <td className="px-6 py-4 text-gray-600">{String(option)}</td>
                      </tr>
                    )) :
                    Object.entries(customizationOptions).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200 hover:bg-white transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-100 w-1/3">{key}</td>
                        <td className="px-6 py-4 text-gray-600">{String(value)}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Handling and Storage */}
        {handlingAndStorage && renderSection("Handling & Storage", handlingAndStorage, 'object')}

        {/* Certifications */}
        {certifications && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">Certifications</h2>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Available Add-ons */}
        {availableAddOns && renderSection("Available Add-ons", availableAddOns)}

        {/* Applications */}
        {applications && renderSection("Applications", applications)}

        {/* Variants */}
        {variants && renderSection("Product Variants", variants, 'object')}

        {/* Note */}
        {note && renderSection("Important Note", note, 'text')}

        {/* Get Quote Button */}
        <div className="flex justify-between items-center">
          <Link to="/connect  ">
          <button className="bg-blue-900 text-white rounded-lg px-2 py-2 text-sm sm:text-base font-semibold hover:bg-blue-800 transition-colors shadow-lg">
            Get Your Quote
          </button>
          </Link>

           {/* Company Branding */}
        <div className="h-6 sm:h-10">
            <img className='h-full' src='/lovable-uploads/4b08319e-d6ea-4de7-b408-d2e3836e50e1.png' />
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProductDetails;