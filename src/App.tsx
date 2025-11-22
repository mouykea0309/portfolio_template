import { A, useLocation } from "@solidjs/router";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer";
import type { ParentProps } from "solid-js";


export default function App(props: ParentProps) {
  const location = useLocation(); // ✅ Must be inside Router
  const linkStyle = (path: string) => ({
    color: location.pathname === path ? "red" : "black",
    "text-decoration": "none",
  });

  return (
    <>
    <header
      style={{
    display: "flex",
    "align-items": "",
    padding: "15px 25px",
    "border-bottom": "1px solid #ddd",
    "justify-content": "flex-end",
  }}
    >
      {/* Navigation */}
      <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <A href="/" style={linkStyle("/")}>Home</A>
        <A href="/work" style={linkStyle("/work")}>Work</A>
        <A href="/blog" style={linkStyle("/blog")}>Blog</A>
        <A href="/contact" style={linkStyle("/contact")}>Contact</A>
      
      </nav>
    </header>
      {/* Routes */}
       <main style={{ padding: "20px" }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}


