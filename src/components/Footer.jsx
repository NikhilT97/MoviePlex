import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>🎬 MoviePlex App &copy; {new Date().getFullYear()}</p>
      <p>
        Built with ❤️ using <strong>React + OMDb API</strong>
      </p>
    </footer>
  );
}
