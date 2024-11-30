# RandomAvatars 🎭

A lightweight Express.js server that serves random avatar images and GIFs. Perfect for testing, placeholder images, or creating dynamic avatar systems.

## Features ✨

- Random photo avatar endpoints
- Random GIF avatar endpoints
- Simple and fast response times
- Easy to integrate with any application
- Cross-platform compatible

## Installation 🚀

```bash
# Clone the repository
git clone https://github.com/9de/RandomAvatars.git

# Navigate to the project directory
cd avatarwebsite

# Install dependencies
npm install

# Start the server
npm start
```

## Directory Structure 📁

Make sure to create these directories in your project root:
```
/photos  - For static avatar images
/gifs    - For animated avatar GIFs
```

## Usage 💡

The server runs on port 3000 by default and provides two main endpoints:

```
GET /photo - Returns a random photo avatar
GET /gif   - Returns a random GIF avatar
```

Example usage with curl:
```bash
curl http://localhost:3000/photo
curl http://localhost:3000/gif
```

## Environment Variables 🔧

- `PORT` - Server port (default: 3000)

## Custom Headers �Headers

Each response includes custom headers:
- `X-Powered-By: RandomAvatars`
- `X-Author: Turki`
- `X-Github-Repo: https://github.com/9de/RandomAvatars`

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/9de/RandomAvatars/issues).

## Author ✍️

**Turki**
- GitHub: [@9de](https://github.com/9de)
- Repository: [avatarwebsite](https://github.com/9de/RandomAvatars)

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
