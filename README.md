# Drum Kit Project 🥁

A simple and interactive web-based drum kit application that lets users play drum sounds by clicking buttons or pressing corresponding keyboard keys.

## Features
- Play drum sounds by clicking buttons.
- Use keyboard keys (`w`, `a`, `s`, `d`, `j`, `k`, `l`) to play corresponding drum sounds.
- Visual button animations for an engaging user experience.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For interactivity and sound functionality.

## Project Structure
```
.
├── index.html    # Main HTML file
├── styles.css    # Stylesheet for the project
├── index.js      # JavaScript logic
└── sounds/       # Folder containing drum sound files
    ├── crash.mp3
    ├── kick-bass.mp3
    ├── snare.mp3
    ├── tom-1.mp3
    ├── tom-2.mp3
    ├── tom-3.mp3
    └── tom-4.mp3
```

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drum-kit.git
   ```
2. Open `index.html` in your browser.
3. Click on the drum buttons or press the corresponding keys to play sounds.

## How It Works
1. **Click Events:** Each button is assigned a click event listener that triggers the sound and animation.
2. **Keyboard Events:** Keydown events are captured to play the sounds and animations for corresponding keys.
3. **Sound Playback:** Sounds are played using the `Audio` API.
4. **Button Animations:** Adds a CSS class to the active button and removes it after a short delay for a visual effect.

## Sounds
The following drum sounds are included:
- **w:** Crash
- **a:** Kick Bass
- **s:** Snare
- **d:** Tom 1
- **j:** Tom 2
- **k:** Tom 3
- **l:** Tom 4

## Preview
![Drum Kit Preview](preview-image-url)

## Future Improvements
- Add more drum sounds and buttons.
- Implement a recording and playback feature.
- Optimize for mobile devices.

## License
This project is licensed under the MIT License.

---
Made with ❤️ by [Your Name](https://github.com/your-username).
