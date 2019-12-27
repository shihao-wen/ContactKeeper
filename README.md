# Contact Keeper

- Set up Dependencies
  - npm install express bcryptjs jsonwebtoken config express-validator mongoose
  - npm install nodeman concurrently
- Set up Express Server
  - set up route (users, contacts, auth)
- Set up MongoDB
- Add models (Contact, User)
- Authentication
  - Use express validator for name, password, email..etc
  - Hash password & Register Route
  - JWT (Json Web Token)
  - Modify auth route
  - MiddleWare to build protected route
- Contacts
  - Get Add Update Delete

[API Documentation](API-Doc.md)

```
"dev": "concurrently \"npm run server\" \"npm run client\""
npm install axios react-router-dom uuid react-transition-group
```

- React Frontend
  - Navbar and Route (Link, Route, Router, Switch)
  - Context & Golobal States
  - Contacts & ContactItem & ContactForm (With update of Context) component
  - Add animation of fading using react-transition-group
  - Authentication (Alert and Auth Context)
