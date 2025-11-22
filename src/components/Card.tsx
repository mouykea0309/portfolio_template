


import '../App.css';

export default function Card() {
      return (
    <>
     <div class="card" >
        <div style={{ flex: 1 }}>
          <p class="p-left"> Recent posts</p>
          <div class="cd-content">
            <h3>Makeing the Design system from scratch</h3>
            <p> 20 feb 2025 | Design pattern</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <a><p class="p-right" > View All</p></a>
          <div class="cd-content">
            <h3>Creating pixel perfect icons in Figma</h3>
            <p> 20 feb 2025 | Design pattern</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
    </>
    )
    
}