const newsFeed = document.getElementById("news-feed");

// Pre-set Trading News Articles
const newsArticles = [
    "📈 Stock Market Hits New Highs as Investors Remain Optimistic",
    "🚀 Cryptocurrency Prices Surge Amid Market Volatility",
    "📊 Tech Stocks Lead the Way in Latest Trading Session",
    "🏦 Federal Reserve Announces New Interest Rate Changes",
    "🛢️ Oil Prices Climb as Supply Concerns Grow",
    "💰 Gold Prices Drop as Dollar Strengthens",
    "🌍 Global Markets React to Economic Data Releases",
    "📢 Major Trading Firms Report Record Quarterly Earnings"
];

// Function to update the news feed dynamically
function updateNews() {
    newsFeed.innerHTML = ""; // Clear previous content

    // Pick 3 random news articles
    let shuffled = newsArticles.sort(() => 0.5 - Math.random()).slice(0, 3);

    shuffled.forEach(news => {
        let newsItem = document.createElement("div");
        newsItem.className = "news-item";
        newsItem.innerText = news;
        newsFeed.appendChild(newsItem);
    });
}

// Update news every 5 seconds
setInterval(updateNews, 5000);

// Load initial news on page load
updateNews();
