export const pieData = [
    {
      "id": "car",
      "label": "Легковые",
      "value": getRandomInt(500),
      "color": "hsl(103, 70%, 50%)"
    },
    {
      "id": "bike",
      "label": "Мотоц./Велос-ды",
      "value": getRandomInt(500),
      "color": "hsl(293, 70%, 50%)"
    },
    {
      "id": "bus",
      "label": "Автобусы",
      "value": getRandomInt(500),
      "color": "hsl(322, 70%, 50%)"
    },
    {
      "id": "truck",
      "label": "Грузовые",
      "value": getRandomInt(500),
      "color": "hsl(251, 70%, 50%)"
    },
    {
      "id": "train",
      "label": "Автопоезда",
      "value": getRandomInt(500),
      "color": "hsl(245, 70%, 50%)"
    }
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 