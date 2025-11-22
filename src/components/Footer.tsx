export default function Footer() {
  return (
    <>
      <footer
        class="footer"
      >
        <div
          style={{
            display: "flex",
            "justify-content": "center",
            gap: "20px",
            "margin-bottom": "15px",
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            style={{ color: "#3b5998" }}
          >
            <i class="fab fa-facebook-f" style={{ "font-size": "20px" }}></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            style={{ color: "#E1306C" }}
          >
            <i class="fab fa-instagram" style={{ "font-size": "20px" }}></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            style={{ color: "#1DA1F2" }}
          >
            <i class="fab fa-twitter" style={{ "font-size": "20px" }}></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            style={{ color: "#0077b5" }}
          >
            <i class="fab fa-linkedin-in" style={{ "font-size": "20px" }}></i>
          </a>
        </div>
        <p
          style={{
            margin: 0,
            "font-weight": "500",
            "font-size": "14px",
            color: "#555",
          }}
        >
          Copyright © 2020 All rights reserved
        </p>
      </footer>

    </>
  )
}