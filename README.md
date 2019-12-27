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

- React

```
"dev": "concurrently \"npm run server\" \"npm run client\""
```
