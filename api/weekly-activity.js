// api/weekly-activity.js
module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

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
};