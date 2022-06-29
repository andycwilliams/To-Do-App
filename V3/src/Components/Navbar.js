import React from "react";

function Navbar() {
  return (
    <div>
      <div class="navbar">
        <a href="../V1/index.html">Version 1</a>
        <a href="../V2/index.html">Version 2</a>
        <a class="disabled">Version 3</a>
        <a href="../V4/src/main/resources/templates/index.html">Version 4</a>
        <a href="">Version 5</a>
      </div>
    </div>
  );
}

export default Navbar;
