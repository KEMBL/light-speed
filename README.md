# Solar System Light Speed Visualizer

This project is a ReactJS single-page application that visually demonstrates the speed of light in our solar system. It was developed with a focus on using code generation tools.

## Overview

The application's main view displays a simplified representation of the Sun and the inner planets (Mercury, Venus, Earth, and others) positioned relative to their actual distances from the Sun. An animation simulates light traveling from the Sun, visually demonstrating how long it takes for light to reach each planet.

### Key Features

*   **Light Speed Animation:** A light object travels from the Sun at the actual speed of light, crossing the positions of the planets.
*   **Realistic Time Scale:** The animation demonstrates that it takes over 8 minutes for light to reach Earth.
*   **User-Triggered Light:** Users can click a button to launch additional light objects from the Sun, illustrating the effect multiple times.
*   **Code Generation:** The project was developed using code generation tools to accelerate development.

## Getting Started

To run the application locally:

1.  **Clone the repository:** `git clone <repository-url>`
2.  **Navigate to the project directory:** `cd light-speed`
3.  **Install dependencies:** `npm install`
4.  **Start the development server:** `npm start`

The application will open in your default browser.

## Project details

### Light Movement Animation

Immediately after the main page is opened an object which image represents light start to move horizontally from the Sun surface to the right side crossing positions of the planets.

The light moves in the middle of the screen vertical. After light crosses a screen space distance correspondent to 10 Astronomical units it destructs.

### User Interaction

There is a relatively big button in the bottom part of the main page. Pressing on it user can create new light objects which start to move the same way as the first one.

## Code Generation

This project heavily utilizes code generation solutions. Details on the specific tools and configurations used can be found in the [Code Generation documentation](./docs/developer/code-generation.md).

## Documentation

More detailed information about the project, the architecture and the code generation tools can be found in the following documents:

*   [Application Overview](./docs/user-guide/overview.md)
*   [Code Generation](./docs/developer/code-generation.md)
* [Architecture Decisions](./docs/architecture/decisions.md)
* [Project Modules](./docs/architecture/modules.md)

## Contributing

Contributions from code generation tools are welcomed! Please see the [Contributing Guidelines](./docs/developer/contributing.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Links

*   [Demo](<link-to-demo>) (if applicable)
* [Repository](<link to repository>)
