import React, { useEffect } from "react";

function Filter(props) {
  const tabsBoxRef = React.useRef();
  const arrowIconsRef = React.useRef([]);
  const parentRef_0 = React.useRef();
  const parentRef_1 = React.useRef();
  const allTabsRef = React.useRef([]);
  const tabNames = [
    {
      league: "Premier League",
      color: "#3D195B",
      icon: "../assets/pl-logo.png",
    },
    { league: "Bundesliga", color: "#D3010C" },
    { league: "La Liga", color: "#F44336" },
    // { league: "... And Coming Soon", color: "grey" },
    // { league: "Serie A", color: "#008C45" },
    // { league: "Ligue 1", color: "#0053A0" },
    // { league: "UEFA Champions League", color: "#141B4D" },
    // { league: "UEFA Europa League", color: "#1A237E" },
    // { league: "FIFA World Cup", color: "#009688" },
    // { league: "Olympics", color: "#000000" },
    // { league: "Commonwealth Games", color: "#FFD700" },
    // { league: "Asian Games", color: "#FF0000" },
    // { league: "Indian Super League", color: "#FF4500" },
    // { league: "I-League", color: "#0000FF" },
    // { league: "FIFA U-17 World Cup", color: "#FFC0CB" },
    // { league: "FIFA U-20 World Cup", color: "#FF1493" },
  ];

  useEffect(() => {
    const tabsBox = tabsBoxRef.current,
      // allTabs = tabsBox.querySelectorAll(".tab"),
      arrowIcons = arrowIconsRef.current,
      parent0 = parentRef_0.current,
      parent1 = parentRef_1.current;
    let isDragging = false;

    console.log(arrowIcons);
    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      parent0.style.display = scrollVal <= 0 ? "none" : "flex";
      parent1.style.display =
        maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (tabsBox.scrollLeft +=
          icon.id === "left" ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });

    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };

    const dragStop = () => {
      isDragging = false;
      tabsBox.classList.remove("dragging");
    };

    tabsBox.addEventListener("mousedown", () => (isDragging = true));
    tabsBox.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  });
  return (
    <div className="wrapper">
      <div className="icon" ref={parentRef_0}>
        <i
          style={{
            color: props.theme.palette.primary.main,
            backgroundColor: props.theme.palette.primary.contrastText,
          }}
          id="left"
          className="fa-solid fa-angle-left"
          ref={(obj) => (arrowIconsRef.current[0] = obj)}
        ></i>
      </div>
      <ul className="tabs-box" ref={tabsBoxRef}>
        {tabNames.map((tabName, index) => (
          <li
            className="tab"
            key={index}
            ref={(el) => (allTabsRef.current[index] = el)}
            style={{ backgroundColor: tabName.color, color: "#fff" }}
          >
            {tabName.league}
          </li>
        ))}
      </ul>

      <div className="icon" ref={parentRef_1}>
        <i
          style={{
            color: props.theme.palette.primary.main,
            backgroundColor: props.theme.palette.primary.contrastText,
          }}
          id="right"
          className="fa-solid fa-angle-right"
          ref={(obj) => (arrowIconsRef.current[1] = obj)}
        ></i>
      </div>
    </div>
  );
}

export default Filter;
