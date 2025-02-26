# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



📌 Problem Statement   1  
In traditional video calling applications, when a user rotates their phone, the other person sees them rotated. This can be confusing and uncomfortable, especially if the person on the other side doesn’t want to rotate their device to adjust.

🔹 Example:
Imagine User A (Harsh) and User B (Ayush) are on a video call.

Harsh rotates his phone to landscape mode.
Ayush now sees Harsh sideways and has no option to fix it unless he physically rotates his own phone.
This makes the video call experience frustrating and less user-friendly.
💡 Solution – Our Video Calling App
This project introduces a unique "Rotate Screen" feature that allows the user to rotate the incoming video feed manually on their screen without affecting the other person.

✨ Key Features
✅ Manual Screen Rotation – Each user can rotate the remote video to their preferred angle (90°, 180°, 270°, or back to normal).
✅ Modern UI & Responsive Design – Clean and stylish interface for a smooth user experience.
✅ Mute & Video Toggle – Users can easily mute/unmute their audio and turn their camera on/off.
✅ Full-Screen Mode – Remote video can expand to 75% of the screen, while the local video becomes draggable for flexibility.
✅ Unique Room Codes – Users can create a room, get a unique code, and invite others for a secure video call.
✅ Call Notification – When a user receives a call, they get an alert and can choose to accept or decline.

🚀 How It Works
1️⃣ User A enters a name and clicks on "Create Room".
2️⃣ A unique room code is generated, which User A can share with User B.
3️⃣ User B enters the code and joins the call.
4️⃣ Once connected, both users can:
