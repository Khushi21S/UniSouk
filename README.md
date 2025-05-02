How to run the project locally
This guide will help you set up and run a Vite application locally after downloading it as a ZIP file.
🛠️ Prerequisites
Make sure you have the following installed:
- Node.js (v16 or above is recommended)
- npm or yarn
📦 Steps to Run the App Locally
1.	1. Extract the ZIP File
Right-click on the downloaded ZIP file and choose 'Extract All...' or use your preferred unzipping tool.
2.	2. Open the Project Folder in Terminal
Navigate into the extracted project folder using your terminal or command prompt:
```bash
cd path-to-your-extracted-folder
```
3.	3. Install Dependencies
Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```
4.	4. Start the Development Server
Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```
5.	5. Open in Browser
Once the server starts, it will show a local development URL, usually:
http://localhost:5173/
Open this URL in your browser to see the app.
🧱 Build and Preview (Optional)
•	To build for production:
```bash
npm run build
# or
yarn build
```
•	To preview the production build locally:
```bash
npm run preview
# or
yarn preview
```
📄 Notes
- Ensure you are in the root folder where `package.json` is located before running commands.
- If you face permission issues, try running commands with administrative privileges.
