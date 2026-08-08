🏥 MedME – Doctors Appointment Platform
<img width="800" height="400" alt="Landing page" src="https://github.com/user-attachments/assets/b2e7c03e-e627-4e9d-ad9d-306e4fc830b3" />
MedME is a full-stack web application that allows patients to seamlessly book doctor appointments, manage health records, and receive consultation reminders. It is designed with usability, security, and efficiency in mind, catering to patients, doctors, and administrators.

Built with Next.js, Prisma, Tailwind CSS, shadcn/ui, and Vonage APIs, MedME offers a smooth, modern healthcare experience.

🚀 Features
👩‍⚕️ For Patients

Browse and search for doctors by specialisation and availability.

Book and manage appointments online.

Video call consultations with doctors.

Receive SMS reminders for upcoming consultations (powered by Vonage).

Credit System:

2 free credits on signup (1 consultation = 1 credit)

Purchase additional credits securely using integrated payment options.

Secure login/signup system powered by Clerk.

🧑‍⚕️ For Doctors

Manage appointment schedules efficiently.

Accept or reject patient requests.

Add notes to patient records and consultations.

View patient details and history.

Receive instant booking notifications.

Earn credits per consultation and request payouts directly from a custom doctor dashboard.

⚙️ For Admin

Manage doctors, patients, and appointments.

View analytics and system logs.

Approve doctors and verify payout requests.

Access a specialized admin dashboard tailored for monitoring the platform, managing users, and overseeing financial transactions.

🌟 Highlights

Tailored Dashboards: Unique dashboards for doctors and admins for improved user experience and operational efficiency.

Secure & Modern: Authentication with Clerk, secure credit-based consultation system, and encrypted data handling.

Scalable Architecture: Built on modern Next.js API routes with Prisma ORM and PostgreSQL for reliability.

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js 14, React, Tailwind CSS, shadcn/ui
Backend	Next.js API Routes, Node.js
Database	PostgreSQL with Prisma ORM and Neon API
Auth & Payments	Clerk
Notifications	Vonage SMS API
Deployment	Vercel

🖼️ Screenshots / Dashboards
<img width="800" height="400" alt="doctor dashboard" src="https://github.com/user-attachments/assets/05b9e36f-bfed-4949-86f6-4ca5429abfd1" />
<img width="800" height="400" alt="admin dashboard" src="https://github.com/user-attachments/assets/d2718f85-2030-4080-99f1-96c05b1423a8" />
<img width="800" height="400" alt="patient's appointments" src="https://github.com/user-attachments/assets/602582f9-38b0-4eb3-853a-6427a886875d" />



⚡ Getting Started
Prerequisites

Node.js v18+

PostgreSQL database (or Neon)

Vercel account (optional for deployment)

Installation
# Clone the repo
git clone https://github.com/YourUsername/medme.git
cd medme

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Update .env with database, Clerk, and Vonage credentials

# Run the development server
npm run dev


Open http://localhost:3000
 to see the app in action.

🔮 Future Enhancements

Integrate insurance claim management for patients.

Add AI-powered health recommendations.

Enable multi-language support for international accessibility.

Mobile app version for iOS and Android.

📌 License

This project is licensed under the MIT License
 © 2025 Harsh Singh.
