# 📰 News Aggregator

A modern news aggregation platform built with React.js and TypeScript, designed to fetch and display news from multiple sources in a user-friendly interface.

## 🌟 Overview

News Aggregator is a powerful web application that consolidates news from various sources including NewsAPI, The Guardian, and The New York Times. It offers a seamless news browsing experience with features like advanced search, filtering, and personalized news feeds.

## ✨ Features

- **Advanced Search & Filtering**
  - Search articles by keywords
  - Filter by date ranges
  - Category-based filtering
  - Source-specific searches

- **Multi-Source Integration**
  - NewsAPI integration
  - The Guardian API support
  - New York Times API integration
  - Unified search across all sources

- **Enhanced User Experience**
  - Infinite scroll implementation
  - Responsive design for all devices
  - Dark/Light theme support
  - Bookmark favorite articles

- **Personalization**
  - Customizable news feed
  - Preferred sources selection
  - Category preferences
  - Save search preferences

## 🛠️ Technical Stack

- **Frontend Framework**: React.js 18.x with TypeScript
- **State Management**: Redux Toolkit (RTK)
- **UI Components**: Material-UI v5
- **API Management**: React Query
- **Containerization**: Docker
- **Testing**: Jest & React Testing Library
- **Code Quality**: ESLint & Prettier

## 📋 Prerequisites

Before running the application, ensure you have:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Docker (optional, for containerized deployment)
- API keys from:
  - NewsAPI
  - The Guardian
  - New York Times

## 🚀 Getting Started

### Method 1: Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
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
   REACT_APP_NEWS_API_KEY=your_newsapi_key
   REACT_APP_GUARDIAN_API_KEY=your_guardian_key
   REACT_APP_NYTIMES_API_KEY=your_nytimes_key
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```
   Access the application at `http://localhost:3000`

5. **Run Tests**
   ```bash
   npm test
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

### Method 2: Docker Deployment

1. **Build Docker Image**
   ```bash
   docker build -t news-aggregator .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     -p 3000:3000 \
     -e REACT_APP_NEWS_API_KEY=your_newsapi_key \
     -e REACT_APP_GUARDIAN_API_KEY=your_guardian_key \
     -e REACT_APP_NYTIMES_API_KEY=your_nytimes_key \
     news-aggregator
   ```

   Or using docker-compose:
   ```bash
   docker-compose up -d
   ```

## 📁 Project Structure

```
news-aggregator/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── store/        # Redux store configuration
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
├── tests/           # Test files
└── docker/          # Docker configuration files
```

## 🔧 Configuration

### API Keys

Obtain API keys from:
- [NewsAPI](https://newsapi.org/register)
- [The Guardian](https://open-platform.theguardian.com/access/)
- [NY Times](https://developer.nytimes.com/get-started)

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| REACT_APP_NEWS_API_KEY | NewsAPI access key | Yes |
| REACT_APP_GUARDIAN_API_KEY | Guardian API key | Yes |
| REACT_APP_NYTIMES_API_KEY | NY Times API key | Yes |

## 📚 Available Scripts

- `npm start`: Start development server
- `npm test`: Run test suite
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `npm run storybook`: Start Storybook development server

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Thanks to NewsAPI, The Guardian, and NY Times for providing their APIs
- All contributors who have helped this project grow
- The amazing React and TypeScript communities