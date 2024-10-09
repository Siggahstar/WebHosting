import React from "react";

function CenteredBoxes() {
    return(
        <div className="bg-gray-100 flex items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-fit">
        {/* Box 1 */}
        <div 
          className="shadow-md rounded-lg w-80 h-48 py-2 px-8 text-center" 
          style={{ backgroundColor: 'whitesmoke' }}
        >
          <h2 className="text-2xl font-bold mb-4">Box 1</h2>
          <p>This is the content of the first box.</p>
        </div>

        {/* Box 2 */}
        <div 
          className="shadow-md rounded-lg w-80 h-48 py-2 px-8 text-center" 
          style={{ backgroundColor: 'whitesmoke' }}
        >
          <h2 className="text-2xl font-bold mb-4">Box 2</h2>
          <p>This is the content of the second box.</p>
        </div>

        {/* Box 3 */}
        <div 
          className="shadow-md rounded-lg w-80 h-48 py-2 px-8 text-center" 
          style={{ backgroundColor: 'whitesmoke' }}
        >
          <h2 className="text-2xl font-bold mb-4">Box 3</h2>
          <p>This is the content of the third box.</p>
        </div>
      </div>
    </div>
  );
};

export default CenteredBoxes;