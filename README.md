[![License: MIT license](https://img.shields.io/badge/License-MIT_license-success)](https://opensource.org/licenses/MIT)  
![Project status](https://img.shields.io/badge/Status-In_Progress-yellow)

<p align="center"><img src="./public/logo.png" alt="AlgoVisualizer"/></p>

## General Information

AlgoVisualizer is a web application that allows users to see a visual representation of popular data sortings algorithims in action in order to gain/demonstrate an understanding of how they operate. Users can change the size of the dataset, generate a new one, and pick from a series of sorting algorithims to sort with.

## Table of Contents

- [General Information](#general-information)
- [Deployed Site](#deployed-site)
- [Description](#description)
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Deployed Site

The deployed site can be found [here](https://kevrev.github.io/AlgoVisualizer/).

## Description

Users are given the ability to generate new random arrays along with the ability to change the size of the array they wish to sort. Each value in the array corresponds to the height of a 'block' shown in the visual representation. The currently included sorting algorithims are Bubble Sort, Insertion Sort, Selection Sort, Heap Sort, Quick Sort, and Merge Sort. The sorting operation is executed when one of the sort buttons is pressed.

When a sorting operation is in progress, the 'Stop Sorting' button will appear and all other buttons will be disabled until either the operation completes or the 'Stop Sorting' button is pressed. The array is maintained in its current orientation after sorting and can continue to be sorted once a sorting operation is selected again.

---

## Demo

---

## Dependencies

- [react v18.3.1](https://reactjs.org/) - JavaScript library for building reactive websites and user interfaces.
- [node.js v20.12.0](https://nodejs.org/en) - A scalable server-side JavaScript runtime. Used for installing dependencies and running the application locally.
- [fontawesome v6.5.2](https://fontawesome.com/) - A large icon library/toolkit. 
- [mdb-react-ui-kit v8.0.0](https://mdbootstrap.com/docs/react/) - A UI Kit containing many different components, such as buttons and sliders, and allows them to be imported as React components.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) - Node is necessarry to install the required dependencies as well as run/build the application locally. 

### Clone

Clone the [repository](https://github.com/Kevrev/AlgoVisualizer) to your local machine.

### Setup

1. Navigate to the root directory of the cloned repository in your terminal.
2. Run `npm install` to install all of the required dependencies.
3. Start the full stack application by running `npm start` from the root directory.
4. Navigate to `http://localhost:3000` in your browser to view the site.

---

## Usage

### Slider

<p align="center"><img src="./src/assets/slider.png" alt="Array Slider"  width="200"/></p>

### Regenerate


<p align="center"><img src="./src/assets/generate.png" alt="Stop Sorting Button"  width="200"/></p>

### Stop Sorting

<p align="center"><img src="./src/assets/stop.png" alt="Stop Sorting Button"  width="200"/></p>

### Sorting Algorithims


<p align="center"><img src="./src/assets/sorts.png" alt="Stop Sorting Button"/></p>

---

## Credits

### Resources

The following resources and individuals made invaluable contributions to the project:

#### Fonts

- [Roboto](https://fonts.google.com/specimen/Roboot?query=roboto) by 

#### Images

- [Shields.io](https://shields.io/) provides the badges for the README.

#### Templates / Libraries


#### Data

### Educational

## Contact

- Kevin Small - [kevrev](https://github.com/Kevrev) / [LinkedIn](https://www.linkedin.com/in/kevin-small-a77152285/)

---

## License

This project is open source and available under the [MIT License](./LICENSE).

---