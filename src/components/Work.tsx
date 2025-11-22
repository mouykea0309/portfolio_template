import { For } from 'solid-js';
import viteLogo from '/vite.svg';
import { A } from '@solidjs/router';
export default function Work() {
    const list = [
        {
            image: viteLogo,
            title: "Designing Dashboards",
            date: "2023",
            category: "Dashboard",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            image: viteLogo,
            title: "Vibrant Portraits of 2020",
            date: "2020",
            category: "Illustration",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            image: viteLogo,
            title: "36 Days of Malayalam type",
            date: "2025",
            category: "Typography",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];
    return (
        <>
                <h1 style={{ "text-align": "left" }}>Work</h1>
                <For each={list}>
                    {(item) => (
                        <div style={{display:"flex",margin:"20px"}}>
                            <div class="center">
                                <nav> <A href="/workdetail">
                                    <img src={item.image} alt="Vite logo" class="img" />
                                    </A></nav>
                            </div>
                            <div style={{ flex: 4, "text-align": "left", "padding-left": "20px" }}>
                                <h3>{item.title}</h3>
                                <div class="left">
                                    <button>{item.date}</button>
                                    <a href="#">
                                        <p class="category-text">{item.category}</p>
                                    </a>
                                </div>
                                <p style={{ "margin-top": "10px" }}>{item.text}</p>
                            </div>
                        </div>
                    )}
                </For>
            
        </>
    );
}
