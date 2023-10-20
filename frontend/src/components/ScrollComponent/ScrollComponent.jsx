import React, { useEffect, useRef, useState } from "react";
import "./ScrollComponent.css";
function ScrollComponent() {
  const [children, setChildren] = useState([]);
  const [offset, setOffset] = useState(0);

  let containerRef = useRef(null);

  useEffect(() => {
    setChildren(containerRef.current.children);
  }, []);

  //

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    // console.log(offset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (children) {
      var i = 0;
      for (i = 0; i < offset / 100 && i < 37; i++) {
        containerRef.current.children[i].style.opacity = "1";
      }
      for (i; i < 37; i++) {
        containerRef.current.children[i].style.opacity = "0.1";
      }
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, children]);
  return (
    <div className="section1" id="a">
      <div className="p-display">
        <p ref={containerRef}>
          <span>Storecode</span> <span>is</span> <span>an</span>{" "}
          <span>innovative</span> <span>platform</span> <span>that</span>{" "}
          <span>connects</span> <span>products</span> <span>with</span>{" "}
          <span>unique</span> <span>codes</span> <span>offering</span>{" "}
          <span>a,</span> <span>seemless</span> <span>experience</span>{" "}
          <span>for</span> <span>both</span> <span>influencers</span>{" "}
          <span>and</span> <span>shoppers.</span> <span>We</span>{" "}
          <span>aim</span> <span>to</span> <span>redifine</span>{" "}
          <span>how,</span> <span>products</span> <span>are</span>{" "}
          <span>discovered</span> <span>and</span> <span>shared,</span>{" "}
          <span>fostering</span> <span>a</span> <span>community</span>{" "}
          <span>of</span> <span>creativity</span> <span>and</span>{" "}
          <span>innovation.</span>
        </p>
      </div>
    </div>
  );
}

export default ScrollComponent;
