# 🤖 Chatbot Flow Builder

## Overview

This project is a Chatbot Flow Builder built using React and the React Flow library. The application allows users to create chatbot flows by connecting multiple text message nodes. The design is extensible to accommodate additional node types in the future.

## Features

1. **Text Node**
    - 📩 Supports multiple text message nodes in a flow.
    - ➕ Nodes are added by dragging and dropping from the Nodes Panel.

2. **Nodes Panel**
    - 🗃️ Houses all types of nodes that the flow builder supports.
    - 🔜 Currently includes only the Message Node but is designed for future expansion.

3. **Edge**
    - 🔗 Connects two nodes together.

4. **Source Handle**
    - 🚀 Origin of a connecting edge.
    - 1️⃣ Only one edge can originate from a source handle.

5. **Target Handle**
    - 🎯 Destination of a connecting edge.
    - ♾️ Multiple edges can connect to a target handle.

6. **Settings Panel**
    - 🛠️ Replaces the Nodes Panel when a node is selected.
    - ✏️ Includes a text field to edit the text of the selected Text Node.

7. **Save Button**
    - 💾 Button to save the flow.
    - ❗ Shows an error if there are multiple nodes and more than one node has empty target handles.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/prajit96/chatbot-flow-builder.git
    cd chatbot-flow-builder
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- 🖱️ Drag and drop a node from the Nodes Panel to the flow area to create a new text node.
- 🔗 Connect nodes by dragging from the source handle of one node to the target handle of another.
- 📝 Click on a node to open the Settings Panel and edit the node's text.
- 💾 Click the "Save Changes" button to save the flow.
- ❗ If there are more than one nodes and more than one node has empty target handles, an error will be shown when trying to save.

## Deployment

The application is deployed on Vercel. You can access the live version [here](https://chatbot-flow-builder-beryl-two.vercel.app/).

## Technologies Used

- ⚛️ React
- 🔄 React Flow
- 🖼️ React Icons

## Directory Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CustomNodes.jsx
│   │   └── SettingsPanel.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```
# Snapshots 📸
![Screenshot 2024-06-02 192634](https://github.com/prajit96/bitespeed-13060/assets/115496998/09b9d552-8346-437c-ad13-4d3098a09687)
![Screenshot 2024-06-02 192749](https://github.com/prajit96/bitespeed-13060/assets/115496998/4f1d596c-351e-4470-b594-dd43f6eb6852)
![Screenshot 2024-06-02 192901](https://github.com/prajit96/bitespeed-13060/assets/115496998/4db0bd66-b138-41d4-a581-538de6d5c4df)
![Screenshot 2024-06-02 192920](https://github.com/prajit96/bitespeed-13060/assets/115496998/218f4485-9e07-43f8-ad7d-88f4d69ca8e6)


# Contact
If you have any questions, concerns, or feedback, please feel free to reach out:

- [Prajit Kumar Santra]
- Email: [santraprajit@gmail.com]
- GitHub: [https://github.com/prajit96]
  
Any contributions or suggestions to improve this project are highly welcome. Let's make it better together!
