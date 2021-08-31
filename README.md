# Music Player

This project served as an introduction to building a responsive, single page web app, using React.

Initial functionality includes playing music files (info stored in data.js), play/pause songs, skipping forward/backwards on time bar, change song through library (collapsable navbar), showing song information and an animated song cover.

Following this I will be using the Spotify API to access user playlists, and will include responsive search functionality in the nav. 

## Challenges

    - cross browser compatibility and design
    - storing Spotify API credentials server side as env variables not secure in frontend
    - async functions to avoid NaN and null references upon load
    - keyframes resetting due to conditional classes being used

## File Structure

```
.                  
├── docs                    # Documentation files
├── node modules            # Node files
├── public                  # Public files
├── server                  # Spotify API - in progress
├── src                     # Source files 
│    ├ components           # Component files
│    ├ styles               # Scss files
│    ├ App.js               # Main app
│    ├ data.js              # Music data for non-Spotify use
│    ├ index.js             
│    └ reportWebVitals.js   
├── test                    # Automated tests - in progress
├── package-lock.json
├── package.json
└── README.md
```