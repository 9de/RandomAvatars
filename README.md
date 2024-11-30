# RandomAvatars 

[![License](https://img.shields.io/github/license/9de/RandomAvatars)](https://github.com/9de/RandomAvatars/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/9de/RandomAvatars)](https://github.com/9de/RandomAvatars/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/9de/RandomAvatars)](https://github.com/9de/RandomAvatars/issues)
[![GitHub forks](https://img.shields.io/github/forks/9de/RandomAvatars)](https://github.com/9de/RandomAvatars/network)

A lightweight Express.js server that serves random avatar images and GIFs. Perfect for testing, placeholder images, or creating dynamic avatar systems.

## Features ✨

- Random photo avatar endpoints
- Random GIF avatar endpoints
- Rate limiting (100 requests per 15 minutes)
- Simple and fast response times
- Easy to integrate with any application
- Cross-platform compatible

## Installation 🚀

```bash
# Clone the repository
git clone https://github.com/9de/RandomAvatars.git

# Navigate to the project directory
cd RandomAvatars

# Install dependencies
npm install

# Start the server
npm start

# For development with auto-restart
npm run dev
```

## Directory Structure 📁

Make sure to create these directories in your project root:
```
RandomAvatars/
├── node_modules/
├── photos/           # For static avatar images
├── gifs/            # For animated avatar GIFs
├── package.json
├── server.js
└── README.md
```

## Usage 💡

The server runs on port 3000 by default and provides two main endpoints:

```
GET /        - API information and documentation
GET /photo   - Returns a random photo avatar
GET /gif     - Returns a random GIF avatar
```

Example usage with curl:
```bash
curl http://localhost:3000/photo
curl http://localhost:3000/gif
```

## Rate Limiting 🔒

To prevent abuse, the API implements rate limiting:
- 100 requests per 15 minutes per IP address
- Rate limit headers included in responses
- Custom error messages when limit is exceeded

## Environment Variables 🔧

- `PORT` - Server port (default: 3000)

## Custom Headers 📋

Each response includes custom headers:
- `X-Powered-By: RandomAvatars`
- `X-Author: Turki`
- `X-Github-Repo: https://github.com/9de/RandomAvatars`

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author ✍️

**Turki**
- GitHub: [@9de](https://github.com/9de)
- Repository: [RandomAvatars](https://github.com/9de/RandomAvatars)

## License 📝

This project is licensed under the MIT License - see the [LICENSE](https://github.com/9de/RandomAvatars/blob/main/LICENSE) file for details.

## Star History 🌟

[![Star History Chart](https://api.star-history.com/svg?repos=9de/RandomAvatars&type=Date)](https://star-history.com/#9de/RandomAvatars&Date)

## Support 💖

If you find this project helpful, please consider giving it a ⭐️ on [GitHub](https://github.com/9de/RandomAvatars)!
