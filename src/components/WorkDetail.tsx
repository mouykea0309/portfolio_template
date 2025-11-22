import { For } from "solid-js";
import viteLogo from "/vite.svg";

export default function WorkDetail() {
  const list = [
    {
      image: viteLogo,
      title: "Designing Dashboards with usability in mind",
      date: "2023",
      category: "Dashboard, User Experience Design",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      photo: viteLogo,
      photo2: viteLogo,
    },
  ];

  return (
    <>
      <For each={list}>
        {(item) => (
          <div>
            <div class="left" >
              <div style={{ flex: 4, "text-align": "left"}}>
                <h1>{item.title}</h1>
                <div class="left">
                  <button>{item.date}</button>
                  <a href="#">
                    <p class="category-text">{item.category}</p>
                  </a>
                </div>
                <p style={{ "margin-top": "10px" }}>{item.text}</p>
              </div>
            </div>
            <div class="left" >
              <img
                src={item.image}
                alt="Vite logo"
                class="img-full"
              />
            </div>
            <h1 style={{"text-align":"start"}}>dd</h1>
            <h2 style={{"text-align":"start"}}>ddssss</h2>
            <p style={{"text-align":"start"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div class="left"  >
              <img
                src={item.image}
                alt="Vite logo"
                class="img-full"
              />
            </div>
          </div>
        )}
      </For>
    </>
  );
}
