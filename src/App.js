import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
       <Button>hi</ Button>
       <Button>alo</ Button>
       <Button>lets go</ Button>

    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button"  >
      {children}
    </button>
  );
}
