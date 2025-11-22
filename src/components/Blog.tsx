
export default function Blog() {
  const list = [
    {
      title: "Designing Dashboards",
      date: "12 Feb 2025",
      category: "Dashboard",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Vibrant Portraits of 2020",
      date: "12 Feb 2025",
      category: "Illustration",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "36 Days of Malayalam Type",
      date: "12 Feb 2025",
      category: "Typography",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <>
      <h1 style={{ "text-align": "left"}}>Blog</h1>
      {list.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <div class="left">
            <p style={{ margin: 0 }}>
              {item.date}{" "}
              <span style={{ color: "darkgray" }}> | {item.category}</span>
            </p>
          </div>
          <p style={{ "margin-top": "10px" }}>{item.text}</p>
          <hr
            style={{
              border: "1px solid #f3f3f3",
            }}
          />
        </div>
      ))}
    </>
  );
}
