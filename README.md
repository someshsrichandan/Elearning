
# 🎓 Full-Stack E-Learning Platform –  Solution

A **scalable**, **secure**, and **real-time enabled** e-learning system built for modern education with complete DRM, payments, role-based access, real-time communication, and Dockerized deployment.

---
## 🔒 Anti-Screen Recording & Screenshot Features for DRM Video

### ✅ 1. **Use VdoCipher DRM – Built-in Protection**

VdoCipher already provides:
- ✅ **Google Widevine + Apple FairPlay DRM**
- ✅ **Encrypted video delivery**
- ✅ **Dynamic watermarking** (email/phone overlay on video)
- ✅ **Device-level screen recording blocking** (on supported browsers)

## 🧱 Full Technology Stack

| Layer          | Technology                                                | Description |
|----------------|------------------------------------------------------------|-------------|
| **Frontend**   | Next.js (TypeScript) + Tailwind CSS                       | Lightning-fast, SEO-friendly UI framework |
| **Backend**    | Express.js + Prisma ORM + MongoDB                         | RESTful API with typed schema and database interaction |
| **Storage**    | MinIO + Cloudinary                                        | Video files in MinIO (S3-compatible), image/docs in Cloudinary |
| **Video DRM**  | VdoCipher                                                 | Secure, encrypted streaming for course videos |
| **Authentication** | Google & GitHub OAuth + JWT Access/Refresh Tokens     | Secure login with social providers, token-based access |
| **Database**   | MongoDB (Local or Atlas)                                  | Stores user, course, and progress data |
| **Real-Time**  | Redis + Socket.IO                                         | Real-time chat and live features using Redis Pub/Sub |
| **Payments**   | Stripe                                                    | Handles subscriptions and one-time course payments |
| **Email**      | Gmail SMTP                                                | Activation, welcome, and password reset emails |
| **Deployment** | Docker + Docker Compose + AWS (EC2, EBS, MinIO, Redis)    | Production-ready infrastructure |
| **Reverse Proxy & SSL** | Nginx + Certbot                                 | HTTPS and load balancing |

---



## 🧑‍🎓 User Roles and Features

### Student
- Sign up/Login with Google/GitHub
- Browse courses
- Watch DRM-protected videos
- Track course & video progress
- Attempt quizzes, submit assignments
- Chat with faculty

### Faculty
- Create/update/delete courses
- Upload DRM videos (VdoCipher iframe or SDK)
- Add quizzes, assignments
- View student submissions
- Message students

### Admin
- Manage all users & content
- Monitor platform activity
- Approve/reject flagged content
- Access full analytics

---

## 🌐 ENV Configuration

### 📁 `client/.env`
```env
NEXT_PUBLIC_SERVER_URI=http://localhost:8000/api/v1
NEXT_PUBLIC_SOCKET_SERVER_URI=http://localhost:8000/

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...

SECRET=super_secret_key
```

### 📁 `server/.env`
```env
PORT=8000
ORIGIN=http://localhost:3000

DB_URL=mongodb://localhost:27017/lms
NODE_ENV=development

CLOUD_NAME=...
CLOUD_API_KEY=...
CLOUD_SECRET_KEY=...

REDIS_URL=redis://localhost:6379

ACCESS_TOKEN=access_secret
REFRESH_TOKEN=refresh_secret
ACCESS_TOKEN_EXPIRE=5m
REFRESH_TOKEN_EXPIRE=59m

SMTP_MAIL=your@gmail.com
SMTP_PASSWORD=app_password

VDOCIPHER_API_SECRET=...

STRIPE_SECRET_KEY=...
STRIPE_PUBLISHABLE_KEY=...
```

---

## 🧪 Feature Highlights

✅ **DRM Video**: Embed VdoCipher iframe using their SDK with access control  
✅ **Real-Time Messaging**: Redis Pub/Sub + Socket.IO for chat  
✅ **Video Progress Tracking**: Track completion and timestamps  
✅ **Assignments & Quizzes**: Auto-scored and manually reviewed  
✅ **Payment Gateway**: Stripe - one-time or subscription  
✅ **OAuth 2.0**: Google + GitHub  
✅ **Rate Limiting & Caching** (Optional): With Redis  
✅ **Email Verification & Activation** via Gmail SMTP  
✅ **Modular Design**: Easily add modules like notifications or forums

---

## 🐳 Docker + AWS Deployment

### Local Setup:
```bash
git clone https://github.com/your-username/elearning-platform.git
cd elearning-platform
docker-compose up --build
```

### Services Included:
- `client`: Next.js app
- `server`: Express API with Prisma
- `minio`: S3-compatible storage
- `redis`: Real-time messaging
- `mongodb`: DB (can switch to Atlas)
- `nginx`: (Optional) reverse proxy

---

## ☁️ AWS Production Tips

- Use **EC2** for deployment (Ubuntu 20.04 LTS)
- Use **EBS volumes** for persistent MinIO storage
- Use **MongoDB Atlas** (Free tier works for POC)
- Secure MinIO, Mongo, and Redis with private subnets
- Set up **Nginx + Certbot** for HTTPS
- Use **PM2** or `docker-compose` with `restart: always`

---

## 📹 VdoCipher Integration

- Sign up at [VdoCipher](https://www.vdocipher.com/)
- Get your **API Key** and **OTP credentials**
- Use SDK or iframe in frontend to stream:
```tsx
<iframe
  src={`https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`}
  width="100%"
  height="500"
  allowFullScreen
/>
```

---

## 📂 Cloudinary Integration

- [Sign up here](https://cloudinary.com/)
- Upload images and documents in the course creation forms
- Use:
```js
cloudinary.v2.uploader.upload(filePath, { folder: "courses" });
```

---

## 📧 Gmail SMTP Setup

1. Enable 2FA in Gmail
2. Go to "Security > App Passwords"
3. Create new app password for "Mail"
4. Use it in `.env` as `SMTP_PASSWORD`

---

## 🔑 OAuth Setup

1. Google Console → Credentials → OAuth
2. GitHub → Developer Settings → OAuth Apps

- Use these redirect URIs:
  - `http://localhost:3000`
  - `https://yourdomain.com`

---

## 💸 Stripe Payments

- [Sign up at Stripe](https://stripe.com/)
- Use test keys for development
- Integrate one-time course purchases
- Future support for subscriptions

---

















