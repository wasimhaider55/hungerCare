// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className=" left-0 right-0 w-full bg-gray-800   py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="text-white">
            <h3 className="font-bold text-lg">NavLinks</h3>
            <div>
              <p>Content for column 1</p>
              <p>Content for column 1</p>
              <p>Content for column 1</p>
              <p>Content for column 1</p>
              <p>Content for column 1</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-white">
            <h3 className="font-bold text-lg">Column 2</h3>
            <p>Content for column 2</p>
          </div>

          {/* Column 3 */}
          <div className="text-white">
            <h3 className="font-bold text-lg">Column 2</h3>
            <p>Content for column 2</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
