import React, { useState, useEffect, useRef } from "react";

import A from "../assets/A.png"; // Source Node Landmark
import B from "../assets/B.png"; // End Node Landmark
import CCISNEW from "../assets/CCISNEW.mp4"; // CCIS 3D Video
import CCISOLD from "../assets/CCISOLD.mp4"; // CCIS OLD 3D Video
import COED from "../assets/COED.mp4"; // COED 3D Video
import CAT from "../assets/CAT.mp4"; // CAT 3D Video
import CEA from "../assets/CEA.mp4"; // CEA 3D Video
import CCJS from "../assets/CCJS.mp4"; // CCJS 3D Video
import COM from "../assets/COM.mp4"; // COM 3D Video
import BALAY from "../assets/BALAY.mp4"; // BALAY ALUMI 3D Video
import RESEARCH from "../assets/RESEARCH.mp4"; // Research Extension 3D Video
import SOCIO from "../assets/SOCIO.mp4"; //Socio Cultural 3D Video
import LIBRARY from "../assets/LIBRARY.mp4"; // Library 3D Video
import BDC from "../assets/BDC.mp4"; // BDC 3D Video
import ASCA from "../assets/ASCA.mp4"; // ASCA 3D Video
import TECHNOLOGY from "../assets/TECHNOLOGY.mp4"; // Technology Complex Building 3D Video
import COMDEAN from "../assets/COMDEAN.mp4"; // COM DEAN OFFICE Building 3D Video
import SAS from "../assets/SAS.mp4"; // SAS OFFICE Building 3D Video
import PRESIDENT from "../assets/PRESIDENT.mp4"; // President Cottage 3D Video
import ADMIN from "../assets/ADMIN.mp4"; // Admin Office 3D Video
import HOTEL from "../assets/HOTEL.mp4"; // Hotel 3D Video
import {
  drawEdges,
  nodeLabels,
  getNodePosition,
  drawShortestPath,
} from "../components/graphFunction.jsx"; // All the fucntion of the Map
import Graph from "../components/graph.jsx"; // The Algorithm
import Map from "../assets/Map.png"; // 2D MAP
import PopoverComponent from "../components/popOver.jsx"; // Popover Container
import SearchBar from "../components/nwwsuSearchBar.jsx"; // Search Bar Container
import VideoModal from "../components/videoModal.jsx"; // 3D Modal COntainer
import NwssuLegend from "../components/nwssuLegend.jsx";

const NwssuMap = () => {
  // State variables
  const canvasRef = useRef(null); // the Canvas
  const [disableInput, setDisableInput] = useState(false); // Disable the Create Path Button without Input And Endnode Input while Showing Path
  const [endNode, setEndNode] = useState(""); // container of Input endnodes names
  const [endNodeAliases, setEndNodeAliases] = useState([]); //  container of endnode Aliases
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [nodeClicked, setNodeClicked] = useState(false); // State to track if a node is clicked
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [hoverPosition, sethoverPosition] = useState({ x: 0, y: 0 }); // Popover postion depends of the node positon
  const [shortestPath, setShortestPath] = useState([]); // Container of the path
  const [showEdges, setShowEdges] = useState(false); // Container of the edges
  const [showPopover, setShowPopover] = useState(false); // Show Popover when it reach the Endnode
  const [sourceNode, setSourceNode] = useState("REGISTRAR OFFICE"); // Recognize As the Source node
  const [selectedNodeImage, setSelectedNodeImage] = useState(null); // State for selected node image
  const [videoPlaying, setVideoPlaying] = useState(false); // make the 3D video Play
  const [hoveredNodeName, setHoveredNodeName] = useState(""); // hover name container

  // 3D video Container
  const nodeVideo = {
    CCIS: CCISNEW,
    MIS: CCISNEW,
    COED: COED,
    CAT: CAT,
    CEA: CEA,
    CCJS: CCJS,
    COM: COM,
    REGISTRAR: CCISOLD,
    BALAY: BALAY,
    RESEARCH: RESEARCH,
    SOCIO: SOCIO,
    PESO: SOCIO,
    LIBRARY: LIBRARY,
    BDC: BDC,
    ASCA: ASCA,
    TECHNOLOGICAL: TECHNOLOGY,
    AGRITOUR: COMDEAN,
    SAS: SAS,
    PRESIDENT: PRESIDENT,
    ADMIN: ADMIN,
    CASHIER: ADMIN,
    HOTEL: HOTEL,
    "COLLEGE OF EDUCATION": COED,
    "COED DEAN OFFICE": COED,
    "COED FACULTY OFFICE": COED,
    "COLLEGE OF COMPUTING AND INFORMATION SCIENCES": CCISNEW,
    MIS: CCISNEW,
    "CCIS FACULTY OFFICE": CCISNEW,
    "CCIS DEANS OFFICE": CCISNEW,
    "COLLEGE OF AGRICULTURE AND TECHNOLOGY": CAT,
    "CAT DEANS OFFICE": CAT,
    "CAT FACULTY OFFICE": CAT,
    "COLLEGE OF ENGINEERING AND ARCHITECTURE": CEA,
    "CEA FACULTY OFFICE": CEA,
    "CEA DEANS OFFICE": CEA,
    "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES": CCJS,
    "CCJS DEANS OFFICE": CCJS,
    CCJS: CCJS,
    "UNIVERSITY HOTEL": HOTEL,
    "BUSINESS DEVELOPMENT CENTER": BDC,
    "IGP OFFICE": BDC,
    "FLOOR NWSSU AVR": BDC,
    RSU: SOCIO,
    "RSU SOCIO CULTURAL CENTER": SOCIO,
    PESO: SOCIO,
    "RESEARCH EXTENSION OFFICE": RESEARCH,
    "FOOD COURT": RESEARCH,
    "REEA OFFICE": RESEARCH,
    "VICE PRESIDENT FOR RESEARCH": RESEARCH,
    "UNIVERSITY LIBRARY": LIBRARY,
    "INTERNET LIBRARY": LIBRARY,
    "GRADUATE LIBRARY": LIBRARY,
    "COA OFFICE": LIBRARY,
    ASCA: ASCA,
    "TECHNOLOGICAL COMPLEX BUILDING": TECHNOLOGY,
    "AGRI TOURISM BUILDING": COMDEAN,
    "COM DEANS OFFICE": COMDEAN,
    "STUDENT AFFAIRS SERVICE": SAS,
    "ADMISSION OFFICE": SAS,
    ISSC: SAS,
    "UNIVERSITY CLINIC": SAS,
    "UNIVERSITY GYM": SAS,
    "VICE PRESIDENT OFFICE FOR ACADS": SAS,
    "ADMINISTRATION BUILDING": ADMIN,
    COOP: ADMIN,
    CASHIER: ADMIN,
    "VICE PRESIDENT ADMINISTRATIVE AFFAIRS": ADMIN,
    "BUDJET OFFICE": ADMIN,
    HRMO: ADMIN,
    "ACCOUNTING OFFICE": ADMIN,
    "BOARD SECRETRARY OFFICE": ADMIN,
    "PRESIDENT COTTEGE": PRESIDENT,
    "BALAY ALUMNI": BALAY,
  };

  // Hover name Container
  const getNodeDisplayName = (name) => {
    const nodeDisplayNames = {
      CCIS: "COLLEGE OF COMPUTING AND INFORMATION SCIENCES",
      COED: "COLLEGE OF EDUCATION",
      STALL: "STALL",
      CCJS: "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES",
      BALAY: "BALAY ALUMNI",
      CAT: "COLLEGE OF AGRICULTURE AND TECHNOLOGY",
      SAS: "STUDENT AFFAIRS SERVICE",
      PRESIDENT: "OFFICE OF THE PRESIDENT",
      ADMIN: " ADMINISTRATION OFFICE",
      HOTEL: "UNIVERSITY HOTEL AND RESTAURANT",
      COM: "COLLEGE OF MANAGEMENT",
      AGRITECH: "AGRI-TECHNOLOGY BUILDING",
      CLB: "COMPUTER LABORATORY",
      AGRITOUR: "AGRI-TOURISM BUILDING",
      BDC: "BUSINESS DEVELOPMENT CENTER",
      CEA: "COLLEGE OF ENGINEERING AND ARCHITECHTURE",
      TECHNOLOGICAL: "TECHNOLOYGY COMPLEX BUILDING",
      LIBRARY: "UNIVERSITY LIBRARY",
      SOCIO: "RSU-SOCIO CULTURAL CENTER",
      ASCA: "ARTS, SOCIAL AND CULTURAL AFFAIRS BUILDING",
      POWER: "POWER HOUSE",
      RESEARCH: "RESEARCH EXTENSION OFFICE",
    };
    return nodeDisplayNames[name] || name; // Return the custom name or the original name if not found
  };

  // The creator of all the nodes
  const drawNodes = (ctx, graph, sourceNode, endNode) => {
    ctx.clearRect(0, 0, 500, 300);
    ctx.font = "20px Arial";

    const nodesInfo = [];

    Object.keys(graph.nodes).forEach((node) => {
      const { x, y } = getNodePosition(node);
      const isSourceNode =
        node === sourceNode ||
        (graph.nodes[node].aliases &&
          graph.nodes[node].aliases.includes(sourceNode));
      const isEndNode =
        node === endNode || graph.nodes[node].aliases.includes(endNode);
      const isTransparent = [
        "ONE",
        "TWO",
        "THREE",
        "FOUR",
        "FIVE",
        "SIX",
        "SEVEN",
        "EIGHT",
        "NINE",
        "TEN",
        "ELEVEN",
        "TWELVE",
        "THIRTEEN",
        "FOURTEEN",
        "FIFTEEN",
        "SIXTEEN",
        "SEVENTEEN",
        "EIGHTEEN",
        "NINETEEN",
        "TWENTY",
        "TWENTYONE",
      ].includes(node);

      // Push node information to the nodesInfo array
      nodesInfo.push({ name: node, x, y, isTransparent });

      ctx.beginPath();
      ctx.globalAlpha = isTransparent ? 0.0 : ctx.globalAlpha;
      ctx.arc(x, y, 14, 0, 2 * Math.PI);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "13px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(nodeLabels[node], x, y);

      if (isSourceNode || isEndNode) {
        const image = new Image();
        image.src = isSourceNode ? A : B;
        image.onload = () => {
          ctx.drawImage(image, x - 25, y - 50, 50, 50);
        };
      }
      ctx.globalAlpha = isTransparent ? 1.0 : ctx.globalAlpha;

      // Attach onClick event handler to each node if endNode is not set and no node has been clicked
      if (!endNode && !nodeClicked) {
        ctx.canvas.addEventListener("click", handleClick);
      }
    });

    const handleCanvasMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      let isHoveringNode = false;

      nodesInfo.forEach(({ name, x, y, isTransparent }) => {
        if (
          !isTransparent &&
          Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2) <= 14
        ) {
          // Mouse is over this non-transparent node, set the hovered node name
          setHoveredNodeName(name);
          const { x, y } = getNodePosition(name);
          sethoverPosition({ x: x - 50, y: y - 55 });

          isHoveringNode = true;
        }
      });

      // Clear the hovered node name if not hovering over any node
      if (!isHoveringNode) {
        setHoveredNodeName("");
      }
    };

    // Attach mousemove event listener to the canvas
    ctx.canvas.addEventListener("mousemove", handleCanvasMouseMove);

    // Function to handle click event on nodes
    function handleClick(event) {
      const rect = ctx.canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      Object.keys(graph.nodes).forEach((node) => {
        const { x, y } = getNodePosition(node);
        if (
          Math.pow(clickX - x, 2) + Math.pow(clickY - y, 2) <=
          Math.pow(14, 2)
        ) {
          setEndNode(node);
          setNodeClicked(true); // Set nodeClicked state to true
          ctx.canvas.removeEventListener("click", handleClick); // Remove click event listener
        }
      });
    }
  };

  // useEffect hook to handle canvas drawing and updates
  useEffect(() => {
    const graph = new Graph(); // Initialize the graph object
    graph.addNode("ONE", ["ONE"]);
    graph.addNode("TWO", ["TWO"]);
    graph.addNode("THREE", ["THREE"]);
    graph.addNode("FOUR", ["FOUR"]);
    graph.addNode("FIVE", ["FIVE"]);
    graph.addNode("SIX", ["SIX"]);
    graph.addNode("SEVEN", ["SEVEN"]);
    graph.addNode("EIGHT", ["EIGHT"]);
    graph.addNode("NINE", ["NINE"]);
    graph.addNode("TEN", ["TEN"]);
    graph.addNode("ELEVEN", ["ELEVEN"]);
    graph.addNode("TWELVE", ["TWELVE"]);
    graph.addNode("THIRTEEN", ["THIRTEEN"]);
    graph.addNode("FOURTEEN", ["FOURTEEN"]);
    graph.addNode("FIFTEEN", ["FIFTEEN"]);
    graph.addNode("SIXTEEN", ["SIXTEEN"]);
    graph.addNode("SEVENTEEN", ["SEVENTEEN"]);
    graph.addNode("EIGHTTEEN", ["EIGHTEEN"]);
    graph.addNode("NINETEEN", ["NINETEEN"]);
    graph.addNode("TWENTY", ["TWENTY"]);
    graph.addNode("TWENTYONE", ["TWENTYONE"]);

    graph.addNode("COED", [
      "COLLEGE OF EDUCATION",
      "COED DEAN OFFICE",
      "COED FACULTY OFFICE",
    ]);
    graph.addNode("STALL", ["STALL"]);
    graph.addNode("CCIS", [
      "COLLEGE OF COMPUTING AND INFORMATION SCIENCES",
      "MIS",
      "CCIS FACULTY OFFICE",
      "CCIS DEANS OFFICE",
    ]);
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE"]);
    graph.addNode("RESEARCH", [
      "RESEARCH EXTENSION OFFICE",
      "FOOD COURT",
      "REEA OFFICE",
      "VICE PRESIDENT FOR RESEARCH",
    ]);
    graph.addNode("SOCIO", ["RSU SOCIO CULTURAL CENTER", "PESO", "RSU"]);
    graph.addNode("LIBRARY", [
      "UNIVERSITY LIBRARY",
      "INTERNET LIBRARY",
      "GRADUATE LIBRARY",
      "COA OFFICE",
    ]);
    graph.addNode("BDC", [
      "BUSINESS DEVELOPMENT CENTER",
      "IGP OFFICE",
      "FLOOR NWSSU AVR",
    ]);
    graph.addNode("CEA", [
      "COLLEGE OF ENGINEERING AND ARCHITECTURE",
      "CEA FACULTY OFFICE",
      "CEA DEANS OFFICE",
    ]);
    graph.addNode("ASCA", ["ASCA"]);
    graph.addNode("TECHNOLOGICAL", ["TECHNOLOGICAL COMPLEX BUILDING"]);
    graph.addNode("AGRITOUR", ["AGRI TOURISM BUILDING", "COM DEANS OFFICE"]);
    graph.addNode("CLB", [
      "COMPUTER LABORATORY BUILDING",
      "COM FACULTY OFFICE",
    ]);
    graph.addNode("AGRITECH", ["AGRI TECHNOLOGY BUILDING", "MOTORPOOL"]);
    graph.addNode("COM", ["COLLEGE OF MANAGEMENT"]);
    graph.addNode("HOTEL", ["UNIVERSITY HOTEL"]);
    graph.addNode("ADMIN", [
      "ADMINISTRATION BUILDING",
      "CASHIER",
      "VICE PRESIDENT ADMINISTRATIVE AFFAIRS",
      "BUDJET OFFICE",
      "HRMO",
      "COOP",
      "ACCOUNTING OFFICE",
      "BOARD SECRETRARY OFFICE",
    ]);
    graph.addNode("PRESIDENT", ["PRESIDENT COTTEGE"]);
    graph.addNode("SAS", [
      "STUDENT AFFAIRS SERVICE",
      "ADMISSION OFFICE",
      "ISSC",
      "UNIVERSITY CLINIC",
      "UNIVERSITY GYM",
      "VICE PRESIDENT OFFICE FOR ACADS",
    ]);
    graph.addNode("CAT", [
      "COLLEGE OF AGRICULTURE AND TECHNOLOGY",
      "CAT DEANS OFFICE",
      "CAT FACULTY OFFICE",
    ]);
    graph.addNode("CCJS", [
      "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES",
      "CCJS DEANS OFFICE",
      "CCJS FACULTY OFFICE",
    ]);
    graph.addNode("POWER", ["POWER HOUSE"]);
    graph.addNode("BALAY", ["BALAY ALUMNI"]);

    // Drawing on canvas
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      drawNodes(ctx, graph, sourceNode, endNode);
      drawEdges(ctx, graph, sourceNode, endNode, showEdges);
      drawShortestPath(ctx, shortestPath);
    }
  }, [shortestPath, showEdges, sourceNode, endNode]);

  // Generate the Path from source node to endnode
  const generateEdges = () => {
    const graph = new Graph();
    // Add nodes to the graph with their aliases and edges
    graph.addNode("ONE", ["ONE"], { CCIS: 44.4, REGISTRAR: 1 });
    graph.addNode("TWO", ["TWO"], { REGISTRAR: 1, RESEARCH: 5 });
    graph.addNode("THREE", ["THREE"], { CCIS: 4 });
    graph.addNode("FOUR", ["FOUR"], { THREE: 6 });
    graph.addNode("FIVE", ["FIVE"], { FOUR: 7 });
    graph.addNode("SIX", ["SIX"], { SOCIO: 1 });
    graph.addNode("SEVEN", ["SEVEN"], { LIBRARY: 1 });
    graph.addNode("EIGHT", ["EIGHT"], { PRESIDENT: 1 });
    graph.addNode("NINE", ["NINE"], { REGISTRAR: 1 });
    graph.addNode("TEN", ["TEN"], { NINE: 1 });
    graph.addNode("ELEVEN", ["ELEVEN"], { CCIS: 1 });
    graph.addNode("TWELVE", ["TWELVE"], { ELEVEN: 1 });
    graph.addNode("THIRTEEN ", ["THIRTEEN"], { SAS: 1 });
    graph.addNode("FOURTEEN", ["FOURTEEN"], { TEN: 1 });
    graph.addNode("FIFTEEN", ["FIFTEEN"], { FOURTEEN: 1 });
    graph.addNode("SIXTEEN", ["SIXTEEN"], { POWER: 1 });
    graph.addNode("SEVENTEEN", ["SEVENTEEN"], { SIXTEEN: 2 });
    graph.addNode("EIGHTEEN", ["EIGHTEEN"], { SIXTEEN: 1 });
    graph.addNode("NINETEEN", ["NINETEEN"], { SEVENTEEN: 1 });
    graph.addNode("TWENTY", ["TWENTY"], { NINETEEN: 1 });
    graph.addNode("TWENTYONE", ["TWENTYONE"], { TWENTY: 1 });

    graph.addNode(
      "COED",
      ["COLLEGE OF EDUCATION", "COED DEANS OFFICE", "COED FACULTY OFFICE"],
      {
        FIVE: 162.8,
      }
    );
    graph.addNode(
      "CCIS",
      [
        "COLLEGE OF COMPUTING AND INFORMATION SCIENCES",
        "MIS",
        "CCIS FACULTY OFFICE",
        "CCIS DEANS OFFICE",
      ],
      {
        ONE: 2,
      }
    );
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE"], {
      ONE: 1,
      TWO: 1,
    });
    graph.addNode(
      "RESEARCH",
      [
        "RESEARCH EXTENSION OFFICE",
        "FOOD COURT",
        "REEA OFFICE",
        "VICE PRESIDENT FOR RESEARCH",
      ],
      { TWO: 33.82 }
    );
    graph.addNode("SOCIO", ["RSU SOCIO CULTURAL CENTER", "PESO", "RSU"], {
      RESEARCH: 59.82,
    });
    graph.addNode(
      "LIBRARY",
      [
        "UNIVERSITY LIBRARY",
        "INTERNET LIBRARY",
        "GRADUATE LIBRARY",
        "COA OFFICE",
      ],
      { SOCIO: 113.22 }
    );
    graph.addNode(
      "BDC",
      ["BUSINESS DEVELOPMENT CENTER", "IGP OFFICE", "FLOOR NWSSU AVR"],
      { SEVEN: 144.92 }
    );
    graph.addNode("ASCA", ["ASCA"], { FIFTEEN: 100.55 });
    graph.addNode(
      "CEA",
      [
        "COLLEGE OF ENGINEERING AND ARCHITECTURE",
        "CEA FACULTY OFFICE",
        "CEA DEANS OFFICE",
      ],
      {
        SEVENTEEN: 148.56,
      }
    );
    graph.addNode("TECHNOLOGICAL", ["TECHNOLOGICAL COMPLEX BUILDING"], {
      EIGHTEEN: 134.06,
    });
    graph.addNode("AGRITOUR", ["AGRI TOURISM BUILDING", "COM DEANS OFFICE"], {
      NINETEEN: 196.51,
    });
    graph.addNode(
      "CLB",
      ["COMPUTER LABORATORY BUILDING", "COM FACULTY OFFICE"],
      {
        TWENTY: 188.11,
      }
    );
    graph.addNode("AGRITECH", ["AGRI TECHNOLOGY BUILDING", "MOTORPOOL"], {
      TWENTYONE: 178.32,
    });
    graph.addNode("COM", ["COLLEGE OF MANAGEMENT"], { HOTEL: 177.31 });
    graph.addNode("HOTEL", ["UNIVERSITY HOTEL"], { SEVEN: 130.32 });
    graph.addNode(
      "ADMIN",
      [
        "ADMINISTRATION BUILDING",
        "COOP",
        "CASHIER",
        "VICE PRESIDENT ADMINISTRATIVE AFFAIRS",
        "BUDJET OFFICE",
        "HRMO",
        "ACCOUNTING OFFICE",
        "BOARD SECRETRARY OFFICE",
      ],
      {
        SEVEN: 130.17,
      }
    );
    graph.addNode("PRESIDENT", ["PRESIDENT COTTEGE"], { SIX: 127.22 });
    graph.addNode(
      "SAS",
      [
        "STUDENT AFFAIRS SERVICE",
        "ADMISSION OFFICE",
        "ISSC",
        "UNIVERSITY CLINIC",
        "UNIVERSITY GYM",
        "VICE PRESIDENT OFFICE FOR ACADS",
      ],
      { EIGHT: 147.32 }
    );
    graph.addNode(
      "CAT",
      [
        "COLLEGE OF AGRICULTURE AND TECHNOLOGY",
        "CAT DEANS OFFICE",
        "CAT FACULTY OFFICE",
      ],
      {
        THIRTEEN: 186.32,
      }
    );
    graph.addNode(
      "CCJS",
      [
        "COLLEGE OF CRIMINAL JUSTICE AND SCIENCES",
        "CCJS DEANS OFFICE",
        "CCJS FACULTY OFFICE",
      ],
      {
        TWELVE: 92.7,
      }
    );
    graph.addNode("POWER", ["POWER HOUSE"], { FIFTEEN: 125.57 });
    graph.addNode("BALAY", ["BALAY ALUMNI"], { CCJS: 162.8 });

    // Find the actual source node and end node from their aliases
    const actualSourceNode = Object.keys(graph.nodes).find(
      (nodeName) =>
        nodeName === sourceNode ||
        graph.nodes[nodeName].aliases.includes(sourceNode)
    );
    const actualEndNode = Object.keys(graph.nodes).find(
      (nodeName) =>
        nodeName === endNode || graph.nodes[nodeName].aliases.includes(endNode)
    );

    const distances = graph.dijkstra(actualSourceNode, actualEndNode);
    let node = actualEndNode;
    const path = [];
    while (node !== actualSourceNode) {
      path.unshift(node);
      node = Object.keys(graph.nodes[node].edges).reduce((a, b) =>
        distances[a] < distances[b] ? a : b
      );
    }
    path.unshift(actualSourceNode);

    setShortestPath(path);
    setShowEdges(true);
    setDisableInput(true);
    setShowPopover(true);
    setEndNodeAliases(graph.nodes[actualEndNode].aliases);

    const { x, y } = getNodePosition(actualEndNode);
    setPopoverPosition({ x: x - -55, y: y - 200 });
  };

  // Delete the Path
  const deleteEdges = () => {
    // Reset state and clear canvas
    setDisableInput(false);
    setShortestPath([]);
    setShowEdges(false);
    setEndNode("");
    setShowPopover(false);
    setNodeClicked(false);

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  // Search the Every nodes in the Map into UpperCASE
  const handleSearch = (event) => {
    const searchNode = event.target.value;
    const upperCase = searchNode.toUpperCase();
    setEndNode(upperCase);
  };

  // Show 3D Modal
  const handleButtonClick = (node) => {
    setModalVisible(true);
    setSelectedNodeImage(nodeVideo[endNode]);
    setVideoPlaying(true);
  };
  // Close 3D Modal
  const onCancel = () => {
    setModalVisible(false);
    setVideoPlaying(false);
  };

  return (
    <div>
      <div className="absolute">
        {/* Absolute positioning for map */}
        <div className="absolute ">
          <img
            src={Map}
            alt="Map"
            style={{ width: "1306px", height: "775px" }}
          />
        </div>
        <div className="absolute">
          {/* Canvas */}
          <canvas width="1290" height="700" ref={canvasRef} />
          {hoveredNodeName && (
            <div
              className="flex items-center justify-center text-center absolute rounded-xl h-8 text-white "
              style={{
                top: hoverPosition.y,
                left: hoverPosition.x,
                backgroundColor: "#157f3d",
                padding: "5px",
              }}
            >
              {getNodeDisplayName(hoveredNodeName)}
            </div>
          )}
        </div>
      </div>

      {/* Search bar component */}
      <SearchBar
        sourceNode={sourceNode}
        endNode={endNode}
        generateEdges={generateEdges}
        deleteEdges={deleteEdges}
        disableInput={disableInput}
        handleSearch={handleSearch}
      />
      {/* 3D Modal Component */}
      <VideoModal
        visible={modalVisible}
        onCancel={onCancel}
        setVideoPlaying={setVideoPlaying}
        setModalVisible={setModalVisible}
        setSelectedNodeImage={setSelectedNodeImage}
        selectedNodeImage={selectedNodeImage}
        videoPlaying={videoPlaying}
      />
      {/* Node Name Popover */}
      <PopoverComponent
        showPopover={showPopover}
        popoverPosition={popoverPosition}
        endNode={endNode}
        endNodeAliases={endNodeAliases}
        handleButtonClick={handleButtonClick}
      />
      <NwssuLegend />
      <div
        className="flex absolute rounded-lg justify-center space-x-3 border-solid "
        style={{
          left: "255px",
          top: "670px",
          width: "270px",
          height: "40px",
        }}
      >
        <div className="flex items-center">
          <img src={A} alt="" className="w-7" />
          <h3 className=" text-md">LOCATION</h3>
        </div>
        <div className="flex items-center">
          <img src={B} alt="" className="w-7" />
          <h3 className="text-md">DESTINATION</h3>
        </div>
      </div>
    </div>
  );
};

export default NwssuMap;
