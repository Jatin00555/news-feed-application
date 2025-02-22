# 📰 News Aggregator

A modern news aggregation platform built with React.js and TypeScript, designed to fetch and display news from multiple sources in a user-friendly interface.

## 🌟 Overview

News Aggregator is a powerful web application that consolidates news from various sources including NewsAPI, The Guardian, and The New York Times. It offers a seamless news browsing experience with features like advanced search, filtering, and personalized news feeds.

## ✨ Features

### Advanced Search & Filtering
- Full-text search across all articles
- Date range filtering with calendar integration
- Category-based filtering (Technology, Business, Sports, etc.)
- Source-specific searches
- Real-time search suggestions

### Multi-Source Integration
- NewsAPI integration with real-time updates
- The Guardian API support with full article content
- New York Times API integration with archive access
- Unified search across all sources
- Configurable source priorities

### Enhanced User Experience
- Infinite scroll for seamless article browsing
- Responsive design optimized for mobile, tablet, and desktop
- Dark/Light theme with system preference detection
- Bookmark and save articles for offline reading
- Share articles across social media platforms
- Reading time estimates
- Article summarization

### Personalization
- Customizable news feed based on interests
- Source preference management
- Category-based content filtering
- Saved searches and alerts
- Reading history tracking
- Personalized recommendations

## 🛠️ Technical Stack

### Frontend
- React.js 18.x with TypeScript
- Redux Toolkit (RTK) for state management
- Material-UI v5 for components
- React Query for API data fetching
- React Router v6 for navigation
- Axios for HTTP requests

### Development Tools
- Vite for build tooling
- ESLint & Prettier for code quality


## 📋 Prerequisites

Before running the application, ensure you have:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Docker (optional, for containerized deployment)
- API keys from:
  - NewsAPI
  - The Guardian
  - The New York Times

## 🚀 Getting Started

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jatin00555/news-feed-application.git
   cd news-feed-application
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your API keys:
   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   VITE_GUARDIAN_API_KEY=your_guardian_api_key_here
   VITE_NY_TIMES_API_KEY=your_nytimes_key_here
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access the application at `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```

### Docker Deployment

#### Option 1: Pull from Docker Hub (Recommended)
```bash
# Pull the image from Docker Hub
docker pull jatin00555/news-feed-application:latest

# Run the container
docker run -d -p 8080:80 --name news-feed-application \
  -e VITE_NEWS_API_KEY=your_newsapi_key_here \
  -e VITE_GUARDIAN_API_KEY=your_guardian_api_key_here \
  -e VITE_NY_TIMES_API_KEY=your_nytimes_key_here \
  jatin00555/news-feed-application:latest
```

#### Option 2: Build Locally
```bash
# Build the Docker image
docker build -t news-feed-application .

# Run the container
docker run -d \
  -p 3000:3000 \
  --env-file .env \
  news-feed-application
```

#### Using Docker Compose

1. Create or modify `docker-compose.yml`:
```yaml
version: '3.8'
services:
  app:
    image: jatin00555/news-feed-application:latest  # Use Docker Hub image
    # OR build locally:
    # build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
```

2. Run with Docker Compose:
```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Common Docker Commands
```bash
# View container logs
docker logs news-aggregator

# Stop container
docker stop news-aggregator

# Remove container
docker rm news-aggregator

# Update to latest version
docker pull jatin00555/news-aggregator:latest
docker-compose up -d --force-recreate
```

## 📚 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production

## 🔑 API Keys Setup

### NewsAPI
1. Visit [NewsAPI](https://newsapi.org/register)
2. Create an account and get your API key
3. Add the key to your `.env` file

### The Guardian
1. Visit [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
2. Register for an API key
3. Add the key to your `.env` file

### NY Times
1. Visit [NY Times Developer Portal](https://developer.nytimes.com/get-started)
2. Create an account and get your API key
3. Add the key to your `.env` file

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- **Jatin Kumar** - *Initial work* - [GitHub](https://github.com/jatin00555)

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org/) for their comprehensive news API
- [The Guardian Open Platform](https://open-platform.theguardian.com/) for their news content
- [NY Times Developer Network](https://developer.nytimes.com/) for their API access
- The React and TypeScript communities for their excellent documentation
- Open AI, Claude

## 🔧 Troubleshooting

### Docker Issues
- If container fails to start, check logs: `docker logs news-aggregator`
- If port 3000 is in use, change port mapping: `-p 3001:3000`
- For environment issues: `docker exec news-aggregator env`

### API Issues
- Verify API keys are correctly set in `.env`
- Check API rate limits
- Ensure proper API endpoints in configuration
