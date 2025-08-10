import { useState } from "react";

const products = {
  "Non-Ferrous wire": {
    "EDM Wire": null,
    "Zari Wire": null,
    "Copper extrusions": null,
    "Molly Wire": null,
    "Copper wire": {
      "plain brass wire": null,
      "Diffused wire": null,
      "zinc diffused coated wire": null,
      "Zinc coated wire": null,
    },
  },
  "Brazing And Welding": {
    "Copper Wire for Induction Brazing": null,
    "Brass Brazing Wire": {
      " Induction Brazing Rings": null,
      "Brass Brazing RBCuZn-c": null,
      "Copper Phosphor Brazing Wire": null,
    },
    "Welding Wire": {
      "Copper alloy": {
        "Er Cu Sia": null,
        "Er Cu": null,
        "Er Cu SnC": null,
        "Er Cu Sn A": null,
        "CuAlA1": null,
        "Cu AlA2": null,
        "Soudronic": null,
      },
      "Aluminum": {
        "4043": null,
        "5357": null,
        "4047": null,
      },
    },
  },
  "Consumables": {
    "Resin": null,
    "Ointment oil": null,
    "Filter": null,
    "current pickup": {
      "Diamond edm": null,
      "Current Pickup": null,
    },
    "mineral": null,
    "Rust Remover": null,
    "Tube Electrode": {
      "Copper Tube and Brass tube": {
        "Drill Guide": null,
        "Japenese Drill guide": null,
        "Edm Drill Guide": null,
      },
    },
  },
};

function NestedTabs({ data, level = 0 }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className={`ml-${level * 4}`}>
      <ul className="space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <button
              className="text-left w-full bg-blue-100 hover:bg-blue-200 p-2 rounded"
              onClick={() => setSelected(selected === key ? null : key)}
            >
              {key}
            </button>
            {value && selected === key && (
              <div className="ml-4 mt-2">
                <NestedTabs data={value} level={level + 1} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductNavbar() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <NestedTabs data={products} />
    </div>
  );
}
