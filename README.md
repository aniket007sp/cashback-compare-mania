# Project Setup Instructions

## Frontend Setup

1. Install Node.js dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:5173

## Backend Setup

1. Create a Python virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

3. Install Python dependencies:
```bash
cd backend
pip install -r requirements.txt
```

4. Set up environment variables (optional for development):
Create a `.env` file in the `backend` directory with:
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

5. Run database migrations:
```bash
python manage.py migrate
```

6. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

7. Start the development server:
```bash
python manage.py runserver
```

The backend will be available at http://localhost:8000

## Testing the Application

1. Start both frontend and backend servers
2. Open http://localhost:5173 in your browser
3. Try registering a new user:
   - Enter email and phone number
   - Check console for email OTP (development mode)
   - Enter the OTPs and password
   - Complete registration

## Development Notes

- Emails are printed to console in development mode
- SMS functionality requires valid Twilio credentials
- API endpoints are available at http://localhost:8000/api/
- Admin interface is available at http://localhost:8000/admin/