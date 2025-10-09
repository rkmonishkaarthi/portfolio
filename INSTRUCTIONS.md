# PortfolioFlow Setup Instructions

This guide will walk you through setting up and deploying your PortfolioFlow website using Firebase.

## 1. Project Setup

First, install the project dependencies:

```bash
npm install
```

## 2. Firebase Project Setup

1.  **Create a Firebase Project**:
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Click on "Add project" and follow the steps to create a new project. Give it a name like `portfolioflow-yourname`.

2.  **Create a Web App**:
    *   In your new Firebase project dashboard, click the web icon (`</>`) to create a new web app.
    *   Register your app. You don't need to add the SDK scripts to your HTML, we'll use npm.
    *   After registering, Firebase will show you your app's configuration object. It looks like this:

    ```javascript
    const firebaseConfig = {
      apiKey: "AIza...",
      authDomain: "your-project-id.firebaseapp.com",
      projectId: "your-project-id",
      storageBucket: "your-project-id.appspot.com",
      messagingSenderId: "...",
      appId: "1:..."
    };
    ```

3.  **Set up Environment Variables**:
    *   Create a new file in the root of your project named `.env.local`.
    *   Copy the content from `.env.example` into `.env.local`.
    *   Fill in the values using the Firebase config from the previous step.

    Your `.env.local` should look like this:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=1:...
    ```

## 3. Firestore Database Setup

1.  **Create Firestore Database**:
    *   In the Firebase Console, go to "Firestore Database" from the left sidebar.
    *   Click "Create database".
    *   Start in **production mode**. Click "Next".
    *   Choose a Firestore location closest to you. Click "Enable".

2.  **Set up Collections**:
    *   **Projects**:
        *   Go to the "Data" tab in Firestore.
        *   Click "+ Start collection".
        *   Enter `projects` as the Collection ID.
        *   Add your first project document. Click "Auto-ID" for the Document ID.
        *   Add the following fields to your document:
            *   `title` (string): e.g., "E-commerce Website"
            *   `description` (string): "A full-featured e-commerce platform..."
            *   `tags` (array): e.g., ["React", "Node.js", "MongoDB"]
            *   `imageUrl` (string): A URL to the project image. You can use a service like Imgur or Firebase Storage.
            *   `githubUrl` (string): Link to the GitHub repository.
            *   `liveUrl` (string): Link to the live demo.
            *   `order` (number): A number to sort projects, e.g., 1, 2, 3.
        *   Add more project documents as needed.

    *   **Contacts**:
        *   This collection will be created automatically when the first contact form is submitted. The structure will be:
            *   `name` (string)
            *   `email` (string)
            *   `message` (string)
            *   `timestamp` (timestamp)

3.  **Set up Security Rules**:
    *   Go to the "Rules" tab in Firestore.
    *   Replace the default rules with the following to allow reading projects and writing contacts:

    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        // Allow anyone to read the projects collection
        match /projects/{projectId} {
          allow read: if true;
          allow write: if false; // Disallow writing from client-side
        }

        // Allow anyone to create (write) a document in the contacts collection
        match /contacts/{contactId} {
          allow read: if false; // Disallow reading contact messages from client-side
          allow create: if true;
        }
      }
    }
    ```
    *   Click "Publish".

## 4. Running the Project Locally

Now that everything is set up, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 5. Deploying to Firebase Hosting

To deploy your site, you'll need the Firebase CLI.

1.  **Install Firebase CLI**:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase**:
    ```bash
    firebase login
    ```

3.  **Initialize Firebase in your project**:
    This step is usually not needed for App Hosting, but it's good practice. If you haven't already, run:
    ```bash
    firebase init
    ```
    When prompted, select "Hosting" and connect it to the Firebase project you created. Use the default options. This creates `firebase.json` and `.firebaserc`.

4.  **Deploy**:
    Build your Next.js app and deploy it to Firebase.
    ```bash
    npm run build
    firebase deploy
    ```

After deployment, Firebase will give you a URL where your portfolio is live!
