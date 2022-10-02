import React from "react";
import HomeApi from "../../api/Home.api";
import { useEffect } from "react";
const useHistory = () => {
  useEffect(() => {
    // HomeApi();
  });
  const data = [
    {
      month: 5,
      day: 20,
      item: [
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },

        {
          time: "18:20",
          name: "정우재",
          money: "-8000",
          amount: "2,445,000",
          type: "minuse",
        },
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
        {
          time: "18:20",
          name: "정우재",
          money: "-8000",
          amount: "2,445,000",
          type: "minuse",
        },
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
      ],
    },
    {
      month: 5,
      day: 20,
      item: [
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
      ],
    },
    {
      month: 5,
      day: 20,
      item: [
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
      ],
    },
    {
      month: 5,
      day: 20,
      item: [
        {
          time: "18:20",
          name: "정우재",
          money: "8000",
          amount: "2,445,000",
          type: "plus",
        },
      ],
    },
  ];

  return { data };
};

export default useHistory;
