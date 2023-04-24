import { blue, grey, red } from "@mui/material/colors";
import { tokens } from "./theme";
import { ways } from "./date1";
import { time, time1 } from "./App";


const LineData = [
  {
    id: "Направление 1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: time1 - time,
        y: getRandomInt(200),
      },
      {
        x: "helicopter",
        y: getRandomInt(200),
      },
      {
        x: "boat",
        y: getRandomInt(200),
      },
      {
        x: "train",
        y: getRandomInt(200),
      },
      {
        x: "subway",
        y: getRandomInt(200),
      },
      {
        x: "bus",
        y: getRandomInt(200),
      },
      {
        x: "car",
        y: getRandomInt(200),
      },
      {
        x: "moto",
        y: getRandomInt(200),
      },
      {
        x: "bicycle",
        y: getRandomInt(200),
      },
      {
        x: "horse",
        y: getRandomInt(200),
      },
      {
        x: "skateboard",
        y: getRandomInt(200),
      },
      {
        x: "others",
        y: getRandomInt(200),
      },
    ],
  },
  {
    id: "Направление 2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: getRandomInt(200),
      },
      {
        x: "helicopter",
        y: getRandomInt(200),
      },
      {
        x: "boat",
        y: getRandomInt(200),
      },
      {
        x: "train",
        y: getRandomInt(200),
      },
      {
        x: "subway",
        y: getRandomInt(200),
      },
      {
        x: "bus",
        y: getRandomInt(200),
      },
      {
        x: "car",
        y: getRandomInt(200),
      },
      {
        x: "moto",
        y: getRandomInt(200),
      },
      {
        x: "bicycle",
        y: getRandomInt(200),
      },
      {
        x: "horse",
        y: getRandomInt(200),
      },
      {
        x: "skateboard",
        y: getRandomInt(200),
      },
      {
        x: "others",
        y: getRandomInt(200),
      },
    ],
  },
  {
    id: "Направление 3",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: getRandomInt(200),
      },
      {
        x: "helicopter",
        y: getRandomInt(200),
      },
      {
        x: "boat",
        y: getRandomInt(200),
      },
      {
        x: "train",
        y: getRandomInt(200),
      },
      {
        x: "subway",
        y: getRandomInt(200),
      },
      {
        x: "bus",
        y: getRandomInt(200),
      },
      {
        x: "car",
        y: getRandomInt(200),
      },
      {
        x: "moto",
        y: getRandomInt(200),
      },
      {
        x: "bicycle",
        y: getRandomInt(200),
      },
      {
        x: "horse",
        y: getRandomInt(200),
      },
      {
        x: "skateboard",
        y: getRandomInt(200),
      },
      {
        x: "others",
        y: getRandomInt(200),
      },
    ],
  },
  {
    id: "Направление 4",
    color: tokens("dark").redAccent[500],
    data: [
      {
        x: "plane",
        y: getRandomInt(200),
      },
      {
        x: "helicopter",
        y: getRandomInt(200),
      },
      {
        x: "boat",
        y: getRandomInt(200),
      },
      {
        x: "train",
        y: getRandomInt(200),
      },
      {
        x: "subway",
        y: getRandomInt(200),
      },
      {
        x: "bus",
        y: getRandomInt(200),
      },
      {
        x: "car",
        y: getRandomInt(200),
      },
      {
        x: "moto",
        y: getRandomInt(200),
      },
      {
        x: "bicycle",
        y: getRandomInt(200),
      },
      {
        x: "horse",
        y: getRandomInt(200),
      },
      {
        x: "skateboard",
        y: getRandomInt(200),
      },
      {
        x: "others",
        y: getRandomInt(200),
      },
    ],
  },
  {
    id: "Направление 5",
    color: tokens("dark").redAccent[300],
    data: [
      {
        x: "plane",
        y: getRandomInt(200),
      },
      {
        x: "helicopter",
        y: getRandomInt(200),
      },
      {
        x: "boat",
        y: getRandomInt(200),
      },
      {
        x: "train",
        y: getRandomInt(200),
      },
      {
        x: "subway",
        y: getRandomInt(200),
      },
      {
        x: "bus",
        y: getRandomInt(200),
      },
      {
        x: "car",
        y: getRandomInt(200),
      },
      {
        x: "moto",
        y: getRandomInt(200),
      },
      {
        x: "bicycle",
        y: getRandomInt(200),
      },
      {
        x: "horse",
        y: getRandomInt(200),
      },
      {
        x: "skateboard",
        y: getRandomInt(200),
      },
      {
        x: "others",
        y: getRandomInt(200),
      },
    ],
  },
];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
  export const dataforline = LineData.filter(function (item) {
    let i = 0;
    if (item.id == ways[i] ) { i++;
      return item;
    }
  });