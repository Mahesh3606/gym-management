
# 💪 Gym Management System
A responsive, web-based Gym Management System built using HTML, CSS, JavaScript, and Firebase to simplify and digitize gym operations such as login, billing, diet planning, and member notifications.





## 📌 Features
### 🔐 Authentication
- Firebase Authentication (Email & Password)

- Role-based access: Admin and Member

### 🧾 Admin Panel
- Manage billing records

- Upload/view diet plans

- Send notifications to members

- View supplement information

### 👤 Member Panel
- View billing history

- Access personalized diet plans

- Read gym notifications

## 💻 Tech Stack
| Layer        | Technology                                        |
| ------------ | ------------------------------------------------- |
| Frontend     | HTML5, CSS3, JavaScript                           |
| Backend/Auth | Firebase Authentication                           |
| Database     | Firebase Firestore                                |
| Hosting      | Local (Live Server) / Firebase Hosting (optional) |



## 📂 Project Structure


/project-root
│

├── index.html              # Login landing page

├── signup.html             # User registration (optional)

├── dashboard.html          # Admin dashboard

├── billing.html            # Admin billing entry

├── diet.html               # Diet plan management

├── notifications.html      # Send/view notifications

├── member.html             # Member dashboard

├── supplements.html        # Supplement information

│
├── css/

│   └── style.css           # Responsive styling
│

├── js/

│   ├── auth.js             # Login authentication

│   ├── firebase.js         # Firebase setup

│   ├── dashboard.js        # Admin logic

│   ├── billing.js          # Billing logic

│   ├── diet.js             # Diet plan logic

│   ├── notifications.js    # Notifications logic

│
└── README.md               # Project documentation




## 🚀 Firebase Setup Instructions
- Go to Firebase Console

- Create a new project

- Enable Authentication → Email/Password

- Enable Cloud Firestore in test mode

- Replace the Firebase config in firebase.js with your own

## 📸 Screenshot

![1](https://github.com/user-attachments/assets/3bacc0b4-93db-44c4-8948-54486298c376)

![2](https://github.com/user-attachments/assets/b4a51045-2ff9-4e0c-86b2-5991bcf5d544)

![3](https://github.com/user-attachments/assets/4589f1f3-2f3c-4658-af3d-b86f5f2d23a6)

![4](https://github.com/user-attachments/assets/353a7d97-0947-4f42-b4e5-7f5c74ccb319)

![5](https://github.com/user-attachments/assets/503cca30-daaf-48a4-a9b4-e1c791887737)


✅ Future Improvements
- Add online payment integration

- Profile image upload for members

- Admin analytics dashboard

- Member attendance tracking