import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/api/weekly-activity", async (req, res) => {
  const randomHeights = [30, 60, 40, 70, 30, 50, 60].map((height) => ({
    deposit: height,
    withdraw: Math.floor(Math.random() * 100),
  }));

  const response = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Deposits",
        data: randomHeights.map((item) => item.deposit),
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Withdrawals",
        data: randomHeights.map((item) => item.withdraw),
        backgroundColor: "#396AFF",
        borderColor: "#396AFF",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  res.json(response);
});

const transactions = [
  {
    id: 1,
    name: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: "/icons/recentTransaction/creditcards_icon.svg",
    bgColor: "bg-orange-50",
  },
  {
    id: 2,
    name: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: "/icons/recentTransaction/ipaypal_icon.svg",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    name: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: "/icons/recentTransaction/dollar_icon.svg",
    bgColor: "bg-cyan-50",
  },
];

// API route to get transactions
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

const expenseData = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  datasets: [
    {
      data: [30, 15, 20, 35],
      backgroundColor: ["#2A3267", "#FF7518", "#4169E1", "#1C1C1C"],
      hoverOffset: 30,
    },
  ],
};

// API route to get the expense chart data
app.get("/api/expense-data", (req, res) => {
  res.json(expenseData);
});

const curveLineData = {
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Balance",
      data: [0, 190, 300, 500, 440, 800, 600, 550],
      fill: true,
      tension: 0.4,
      borderColor: "#1814F3",
      backgroundColor: "rgba(24, 20, 243, 0.2)",
      shadowColor: "rgba(24, 20, 243, 0.5)",
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 5,
      borderWidth: 4,
    },
  ],
};

// API route to get the curve line chart data
app.get("/api/balance-history", (req, res) => {
  res.json(curveLineData);
});

const creditCardData = [
  {
    cardNumber: "3778 **** **** 1234",
    expiry: "12/22",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    color: "black",
  },
  {
    cardNumber: "3778 **** **** 1234",
    expiry: "12/22",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    color: "white",
  },
];

// API route to get the credit card data
app.get("/api/credit-card", (req, res) => {
  res.json(creditCardData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
