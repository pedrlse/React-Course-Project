import React from "react";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <small>© 2021 Pedro Mota development. All rights reserved.</small>
    </footer>
  );
}
