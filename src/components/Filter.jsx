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
      chinese: "英超",
      color: "#3D195B",
      icon: "../assets/pl-logo.png",
    },
    { league: "Bundesliga", chinese: "德甲", color: "#D3010C" },
    { league: "La Liga", color: "#F44336", chinese: "西甲" },
    { league: "Serie A", color: "#008fd7", chinese: "意甲" },
    { league: "Ligue 1", color: "#091C3E", chinese: "法甲" },
    { league: "Eredivisie", color: "#002e62", chinese: "荷甲" },
    { league: "Liga Portugal", color: "#6ab444", chinese: "葡超" },
    { league: "Super Lig", color: "#939393", chinese: "土超" },
    { league: "Saudi Pro League", color: "#125B34", chinese: "沙地聯" },
    { league: "Qatar Stars League", color: "#8A1538", chinese: "卡塔爾星級聯" },
    { league: "UAE Pro League", color: "#c7a73b", chinese: "阿聯酋超" },
    { league: "J1 League", color: "#D60032", chinese: "日職" },
    { league: "K League 1", color: "#192340", chinese: "韓職" },
    { league: "A-League", color: "#f06321", chinese: "澳職" },
    { league: "MLS", color: "#E2231A", chinese: "美職" },
    { league: "Hong Kong Premier League", color: "#b2252c", chinese: "港超" },
  ];

  useEffect(() => {
    const tabsBox = tabsBoxRef.current,
      // allTabs = allTabsRef.current,
      arrowIcons = arrowIconsRef.current,
      parent0 = parentRef_0.current,
      parent1 = parentRef_1.current;
    let isDragging = false;
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
            style={{
              backgroundColor: tabName.color,
              color: "#fff",
              opacity: props.filter === tabName.league ? 0.7 : 1,
            }}
            onClick={() => props.selectLeague(tabName.league)}
          >
            {tabName.league} {tabName.chinese}
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
