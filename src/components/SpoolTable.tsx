import React from 'react';

const SpoolTable = () => {
  const spoolData = [
    {
      "Spool Type": "DIN-125",
      "D (MM)": 125,
      "d (MM)": 80,
      "L (MM)": 125,
      "W (MM)": 100,
      "H (MM)": 16,
      "Net Wt/SPOOL (KG)": 3.5
    },
    {
      "Spool Type": "P-5",
      "D (MM)": 160,
      "d (MM)": 90,
      "L (MM)": 115,
      "W (MM)": 90,
      "H (MM)": 20,
      "Net Wt/SPOOL (KG)": 5
    },
    {
      "Spool Type": "DIN-160",
      "D (MM)": 160,
      "d (MM)": 100,
      "L (MM)": 160,
      "W (MM)": 130,
      "H (MM)": 28,
      "Net Wt/SPOOL (KG)": 8
    },
    {
      "Spool Type": "DIN-200",
      "D (MM)": 200,
      "d (MM)": 125,
      "L (MM)": 200,
      "W (MM)": 160,
      "H (MM)": 36,
      "Net Wt/SPOOL (KG)": 16
    },
    {
      "Spool Type": "JAPAX",
      "D (MM)": 130,
      "d (MM)": 50,
      "L (MM)": 30,
      "W (MM)": 28,
      "H (MM)": 10,
      "Net Wt/SPOOL (KG)": 1.5
    }
  ];

  const columns = [
    "Spool Type",
    "D (MM)",
    "d (MM)",
    "L (MM)",
    "W (MM)",
    "H (MM)",
    "Net Wt/SPOOL (KG)"
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Spool Specifications
      </h1>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wide border-r border-blue-800 last:border-r-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spoolData.map((spool, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`
                  ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  hover:bg-blue-50 transition-colors duration-200
                  border-b border-gray-200
                `}
              >
                {columns.map((column, colIndex) => (
                  <td 
                    key={colIndex}
                    className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0"
                  >
                    {column === "Spool Type" ? (
                      <span className="font-medium text-blue-800">
                        {spool[column]}
                      </span>
                    ) : (
                      spool[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpoolTable;