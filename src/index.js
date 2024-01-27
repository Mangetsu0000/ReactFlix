import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import App from "./App";
import "./index.css";

//TLDR: you can define a state 'movieRating' in parent component 'TEST' and pass it's setter 'setMovieRating'to child component 'STARRATING'to set data in it which in turn you can display in the parent component.
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={7}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>rating: {movieRating}</p>
//     </div>
//   );
// }

// function TextExpander({
//   children,
//   expand = false,
//   btnTextColor = "black",
//   collapsedNumWords = 10,
// }) {
//   const [expandText, setExpandText] = useState(expand);
//   const displayedText = expandText
//     ? children
//     : children.split(" ").splice(0, collapsedNumWords).join(" ") + "...";
//   const handleToggle = () => {
//     setExpandText((_cExpand) => !_cExpand);
//   };
//   return (
//     <div>
//       {displayedText}
//       <button onClick={handleToggle} style={{ color: btnTextColor }}>
//         {expandText ? "Show Less" : "Show More"}
//       </button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={10}
      defaultRating={3}
      ratingNotes={["terrible", "bad", "okay", "good", "amazing!"]}
    />
    <Test /> */}
    {/* <TextExpander btnTextColor="red">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam animi
      ea inventore doloremque numquam nisi assumenda voluptas, obcaecati aliquid
      quisquam.
    </TextExpander>
    <TextExpander expand={true} btnTextColor="blue" collapsedNumWords={20}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium
      repellendus similique reprehenderit eius numquam ratione maxime laborum
      doloribus voluptatibus. Labore ratione eligendi cumque atque soluta.
      Voluptas eum velit at. Dolore distinctio voluptatibus placeat tempora
      quaerat, saepe sequi quod? Dolore at placeat magnam aperiam! Debitis
      voluptatibus laboriosam quae autem quis!
    </TextExpander>
    <TextExpander btnTextColor="purple" collapsedNumWords={60}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam totam
      vero facere dolorum dignissimos sint sapiente, voluptate distinctio magnam
      ex quis sunt voluptates iusto autem maxime saepe dolor nostrum mollitia
      doloremque voluptas quasi, beatae eaque! Tempora ut incidunt error aliquid
      voluptatibus, earum eaque quas, repudiandae quisquam corrupti, dolorum
      dicta exercitationem. Cumque, veritatis possimus, asperiores accusantium
      incidunt consequuntur, expedita rerum architecto illo quidem blanditiis
      reiciendis doloremque saepe repellat a eligendi voluptatem! Praesentium
      deleniti placeat, eligendi commodi ea aliquam mollitia odio?
    </TextExpander> */}
    <App />
  </React.StrictMode>
);
