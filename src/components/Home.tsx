import Card from "./Card";
import Work from "./Work";
import viteLogo from '/vite.svg'
export default function Home(){
      return (
    <>
        <div
          style={{
            display: "flex",
            "align-items": "start",
            "justify-content": "space-between",
            "text-align":"start",
            margin: "20px",
            gap: "20px",
          }}
        >
          <div style={{ flex: 2 }}>
            <h1 style={{ "margin-bottom": "10px" }}>
              Hi, I'm John, Creative Technologist
            </h1>
            <p style={{ color: "#555", "line-height": "1.6" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <button style={{ background: "red", color: "white" }}>Downloaded Resume</button>
          </div>

          <div style={{ flex: 1, display: "flex", "justify-content": "center" }}>
            <img
              src={viteLogo}
              class="logo"
              alt="Vite logo"
              style={{
                width: "120px",
                height: "120px",
                "border-radius": "50%",
                background: "red",
                "object-fit": "cover",
              }}
            />
          </div>
        </div>
        <Card></Card>
        <Work></Work>
    </>)
    
}