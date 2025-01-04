import express from 'express';
import cors from 'cors'; // Import the cors package

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/api/weekly-activity', async (req, res) => {
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


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
