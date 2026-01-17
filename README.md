# 🏥 CarePulse


## 📋 Overview

CarePulse is a comprehensive healthcare patient management application designed to streamline the entire patient care workflow. From initial registration to appointment scheduling and medical records management, CarePulse provides an intuitive platform for both patients and healthcare administrators.

**Live Demo:** [carepulse-jade.vercel.app](https://carepulse-jade.vercel.app)

---

## ✨ Features

### 👤 Patient Features
- **Easy Registration** - Quick onboarding process with essential patient information
- **Appointment Booking** - Schedule appointments with preferred doctors at convenient times
- **Medical Records** - Securely store and manage personal health information
- **Multiple Appointments** - Book and track multiple appointments simultaneously
- **SMS Notifications** - Receive instant confirmation and updates via SMS
- **Document Upload** - Upload and store identification and medical documents securely

### 👨‍⚕️ Admin Features
- **Dashboard Overview** - Comprehensive view of all scheduled appointments
- **Appointment Management** - Efficiently handle, confirm, and schedule appointments
- **Patient Records Access** - View detailed patient information and medical history
- **Appointment Scheduling** - Set and confirm appointment times
- **Cancellation Management** - Cancel appointments with proper documentation
- **Performance Monitoring** - Track application performance using Sentry

### 🎨 Technical Features
- **Fully Responsive Design** - Seamless experience across all devices and screen sizes
- **Complex Form Handling** - Advanced forms with validation and error handling
- **Real-time Updates** - Instant synchronization of appointment statuses
- **Secure File Storage** - Protected document storage using Appwrite
- **Error Tracking** - Comprehensive monitoring with Sentry integration
- **Type Safety** - Full TypeScript implementation for robust code

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** - React framework for production-grade applications
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library

### Backend & Database
- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service for authentication and database
- **Node Appwrite SDK** - Server-side integration

### Additional Services
- **[Twilio](https://www.twilio.com/)** - SMS notification service
- **[Sentry](https://sentry.io/)** - Error tracking and performance monitoring
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SwaroopDangal/carepulse.git
   cd carepulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
   PROJECT_ID=your_project_id
   API_KEY=your_api_key
   DATABASE_ID=your_database_id
   PATIENT_COLLECTION_ID=your_patient_collection_id
   APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
   NEXT_PUBLIC_BUCKET_ID=your_bucket_id

   # Admin Access
   NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey

   # Twilio Configuration (for SMS)
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number

   # Sentry Configuration (Optional)
   SENTRY_AUTH_TOKEN=your_sentry_auth_token
   ```

4. **Set up Appwrite**
   - Create an account at [Appwrite](https://cloud.appwrite.io/)
   - Create a new project
   - Set up the required collections (Patient, Appointment)
   - Create a storage bucket for document uploads
   - Copy the credentials to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
carepulse/
├── public/                 # Static assets
│   └── assets/            # Images, icons, and other media
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── admin/         # Admin dashboard pages
│   │   ├── patients/      # Patient-related pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── forms/         # Form components
│   │   ├── table/         # Table components
│   │   └── ui/            # UI components (Shadcn)
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── .gitignore
├── components.json        # Shadcn UI configuration
├── next.config.ts         # Next.js configuration
├── package.json
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🔧 Configuration

### Appwrite Collections

You'll need to create the following collections in your Appwrite database:

#### Patient Collection
- userId (string)
- name (string)
- email (string)
- phone (string)
- birthDate (datetime)
- gender (string)
- address (string)
- occupation (string)
- emergencyContactName (string)
- emergencyContactNumber (string)
- primaryPhysician (string)
- insuranceProvider (string)
- insurancePolicyNumber (string)
- allergies (string, optional)
- currentMedication (string, optional)
- familyMedicalHistory (string, optional)
- pastMedicalHistory (string, optional)
- identificationType (string, optional)
- identificationNumber (string, optional)
- identificationDocument (string, optional)
- privacyConsent (boolean)

#### Appointment Collection
- patientId (string, relationship to Patient)
- schedule (datetime)
- status (string)
- primaryPhysician (string)
- reason (string)
- note (string)
- userId (string)
- cancellationReason (string, optional)

---

## 🎯 Usage

### For Patients

1. **Register**: Navigate to the home page and fill out the registration form
2. **Complete Profile**: After registration, complete your medical information
3. **Book Appointment**: Select a doctor, preferred date/time, and reason for visit
4. **Receive Confirmation**: Get SMS notification with appointment details
5. **Manage Appointments**: View and track your upcoming appointments

### For Administrators

1. **Access Admin Panel**: Navigate to `/admin` and enter the admin passkey
2. **View Dashboard**: See all scheduled, pending, and cancelled appointments
3. **Manage Appointments**: Confirm, reschedule, or cancel appointments
4. **View Patient Details**: Access comprehensive patient information
5. **Send Notifications**: Automatically send SMS updates to patients

---



## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy CarePulse is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

For detailed deployment instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👨‍💻 Author

**Swaroop Dangal**

- GitHub: [@SwaroopDangal](https://github.com/SwaroopDangal)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---



<div align="center">
  Made by Swaroop Dangal
</div>
