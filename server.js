const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const rateLimit = require('express-rate-limit');

// Create Express app
const app = express();

// Configuration
const config = {
    port: process.env.PORT || 3000,
    photoDir: path.join(__dirname, 'photos'),
    gifDir: path.join(__dirname, 'gifs'),
    author: {
        name: 'Turki',
        github: 'https://github.com/9de/avatarwebsite'
    }
};

// Custom headers middleware
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'RandomAvatars');
    res.setHeader('X-Author', config.author.name);
    res.setHeader('X-Github-Repo', config.author.github);
    next();
});

// Configure rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again after 15 minutes'
    },
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiter to all routes
app.use(limiter);

// Middleware to handle file serving errors
const handleFileError = (err, res) => {
    console.error('Error serving file:', err);
    res.status(500).json({ error: 'Failed to serve media file' });
};

// Helper function to get random file from directory
async function getRandomFile(directory) {
    try {
        const files = await fs.readdir(directory);
        if (!files.length) {
            throw new Error('No files found in directory');
        }
        return files[Math.floor(Math.random() * files.length)];
    } catch (err) {
        throw new Error(`Failed to read directory: ${err.message}`);
    }
}

// Helper function to check if directories exist
async function ensureDirectoriesExist() {
    try {
        await fs.access(config.photoDir);
        await fs.access(config.gifDir);
    } catch (err) {
        console.error('Required directories do not exist. Creating them...');
        try {
            await fs.mkdir(config.photoDir, { recursive: true });
            await fs.mkdir(config.gifDir, { recursive: true });
            console.log('Directories created successfully');
        } catch (err) {
            console.error('Failed to create directories:', err);
            process.exit(1);
        }
    }
}

// Route: Home
app.get('/', (req, res) => {
    res.json({
        name: 'RandomAvatars API',
        version: '1.0.0',
        endpoints: {
            photo: '/photo - Get random photo avatar',
            gif: '/gif - Get random GIF avatar'
        },
        rateLimit: {
            maxRequests: 100,
            windowMs: '15 minutes'
        },
        author: config.author
    });
});

// Route: Random Photo
app.get('/photo', async (req, res) => {
    try {
        const randomPhoto = await getRandomFile(config.photoDir);
        res.sendFile(path.join(config.photoDir, randomPhoto), err => {
            if (err) handleFileError(err, res);
        });
    } catch (err) {
        handleFileError(err, res);
    }
});

// Route: Random GIF
app.get('/gif', async (req, res) => {
    try {
        const randomGif = await getRandomFile(config.gifDir);
        res.sendFile(path.join(config.gifDir, randomGif), err => {
            if (err) handleFileError(err, res);
        });
    } catch (err) {
        handleFileError(err, res);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Initialize server
async function startServer() {
    try {
        // Ensure required directories exist
        await ensureDirectoriesExist();

        // Start server
        app.listen(config.port, () => {
            console.log(`
🎭 RandomAvatars Server is running!
🌐 Server: http://localhost:${config.port}
📸 Photo directory: ${config.photoDir}
🎥 GIF directory: ${config.gifDir}
🔒 Rate limit: 100 requests per 15 minutes
👤 Author: ${config.author.name}
🔗 GitHub: ${config.author.github}
            `);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

// Handle uncaught exceptions
process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Start the server
startServer();
