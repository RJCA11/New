// Function to get the position of a node
const getNodePosition = (node) => {
  return nodePositions[node] || { x: undefined, y: undefined };
};

// Function to get the coordinates of a node
const getNodeCoordinates = (nodeName) => {
  return nodeCoordinates[nodeName] || { x: 0, y: 0 };
};

// Node labels
const nodeLabels = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
  ELEVEN: "11",
  TWELVE: "12",
  THIRTEEN: "13",
  FOURTEEN: "14",
  FIFTEEN: "15",
  SIXTEEN: "16",
  SEVENTEEN: "17",
  EIGHTEEN: "18",
  NINETEEN: "19",
  TWENTY: "20",
  TWENTYONE: "21",

  COED: "A",
  STALL: "B",
  CCIS: "C",
  REGISTRAR: "D",
  RESEARCH: "E",
  SOCIO: "F",
  LIBRARY: "G",
  BDC: "H",
  CEA: "I",
  ASCA: "J",
  TECHNOLOGICAL: "K",
  AGRITOUR: "L",
  CLB: "M",
  AGRITECH: "N",
  COM: "O",
  HOTEL: "P",
  ADMIN: "Q",
  PRESIDENT: "R",
  SAS: "S",
  CAT: "T",
  CCJS: "U",
  POWER: "V",
  BALAY: "W",
};

// Node coordinates
const nodeCoordinates = {
  ONE: { x: 480, y: 538 },
  TWO: { x: 625, y: 525 },
  THREE: { x: 103, y: 538 },
  FOUR: { x: 80, y: 479 },
  FIVE: { x: 80, y: 450 },
  SIX: { x: 825, y: 450 },
  SEVEN: { x: 891, y: 426 },
  EIGHT: { x: 775, y: 285 },
  NINE: { x: 568, y: 570 },
  TEN: { x: 688, y: 570 },
  ELEVEN: { x: 180, y: 538 },
  TWELVE: { x: 158, y: 480 },
  THIRTEEN: { x: 660, y: 235 },
  FOURTEEN: { x: 750, y: 576 },
  FIFTEEN: { x: 855, y: 614 },
  SIXTEEN: { x: 974, y: 640 },
  SEVENTEEN: { x: 1015, y: 605 },
  EIGHTEEN: { x: 994, y: 624 },
  NINETEEN: { x: 1085, y: 545 },
  TWENTY: { x: 1100, y: 533 },
  TWENTYONE: { x: 1130, y: 507 },

  COED: { x: 60, y: 451 },
  CCIS: { x: 310, y: 538 },
  REGISTRAR: { x: 562, y: 531 },
  RESEARCH: { x: 685, y: 502 },
  SOCIO: { x: 770, y: 470 },
  LIBRARY: { x: 865, y: 435 },
  BDC: { x: 940, y: 490 },
  ADMIN: { x: 918, y: 369 },
  HOTEL: { x: 990, y: 446 },
  COM: { x: 1040, y: 473 },
  PRESIDENT: { x: 845, y: 326 },
  AGRITOUR: { x: 1107, y: 559 },
  AGRITECH: { x: 1150, y: 522 },
  SAS: { x: 720, y: 255 },
  CAT: { x: 545, y: 235 },
  ASCA: { x: 862, y: 605 },
  CLB: { x: 1205, y: 590 },
  TECHNOLOGICAL: { x: 1010, y: 633 },
  CEA: { x: 995, y: 595 },
  CCJS: { x: 157, y: 430 },
  POWER: { x: 950, y: 645 },
  BALAY: { x: 157, y: 268 },
};

// Node positions
const nodePositions = {
  ONE: { x: 480, y: 536 },
  TWO: { x: 625, y: 525 },
  THREE: { x: 110, y: 538 },
  FOUR: { x: 81, y: 480 },
  FIVE: { x: 80, y: 453 },
  SIX: { x: 825, y: 450 },
  SEVEN: { x: 890, y: 426 },
  EIGHT: { x: 775, y: 285 },
  NINE: { x: 562, y: 570 },
  TEN: { x: 688, y: 570 },
  ELEVEN: { x: 180, y: 550 },
  TWELVE: { x: 158, y: 480 },
  THIRTEEN: { x: 660, y: 235 },
  FOURTEEN: { x: 750, y: 575 },
  FIFTEEN: { x: 855, y: 615 },
  SIXTEEN: { x: 955, y: 641 },
  SEVENTEEN: { x: 1015, y: 605 },
  EIGHTEEN: { x: 991, y: 620 },
  NINETEEN: { x: 1085, y: 545 },
  TWENTY: { x: 1100, y: 533 },
  TWENTYONE: { x: 1125, y: 505 },

  COED: { x: 40, y: 450 },
  STALL: { x: 47, y: 570 },
  CCIS: { x: 310, y: 550 },
  REGISTRAR: { x: 562, y: 550 },
  RESEARCH: { x: 680, y: 523 },
  SOCIO: { x: 775, y: 495 },
  LIBRARY: { x: 860, y: 456 },
  BDC: { x: 900, y: 505 },
  CEA: { x: 965, y: 578 },
  ASCA: { x: 887, y: 605 },
  TCB: { x: 1075, y: 670 },
  AGRITOUR: { x: 1160, y: 593 },
  CLB: { x: 1224, y: 592 },
  TECHNOLOGICAL: { x: 1071, y: 670 },
  AGRITECH: { x: 1200, y: 535 },
  COM: { x: 1065, y: 457 },
  HOTEL: { x: 1000, y: 425 },
  ADMIN: { x: 935, y: 375 },
  PRESIDENT: { x: 845, y: 322 },
  SAS: { x: 720, y: 250 },
  CAT: { x: 545, y: 217 },
  CCJS: { x: 125, y: 430 },
  POWER: { x: 932, y: 665 },
  BALAY: { x: 165, y: 244 },
};

// Draw edges between nodes on the canvas
const drawEdges = (ctx, graph, sourceNode, endNode, showEdges) => {
  for (let node1 in graph.nodes) {
    for (let node2 in graph.nodes[node1].edges) {
      if (
        showEdges &&
        ((node1 === sourceNode && node2 === endNode) ||
          (node1 === endNode && node2 === sourceNode))
      ) {
        continue;
      }

      let { x: x1, y: y1 } = getNodeCoordinates(node1);
      let { x: x2, y: y2 } = getNodeCoordinates(node2);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
};

// Draw the shortest path between nodes on the canvas
const drawShortestPath = (ctx, shortestPath) => {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();

  for (let i = 0; i < shortestPath.length - 1; i++) {
    const [node1, node2] = [shortestPath[i], shortestPath[i + 1]];
    const { x: x1, y: y1 } = getNodeCoordinates(node1);
    const { x: x2, y: y2 } = getNodeCoordinates(node2);

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }

  ctx.stroke();
};

export {
  drawEdges,
  getNodePosition,
  nodeLabels,
  getNodeCoordinates,
  drawShortestPath,
};
