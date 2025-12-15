# Memory Wall

Memory Wall is a web application for collecting and displaying shared memories at events. It allows an event organizer to create an event and invite guests to upload photos and optional messages via a shared link — without requiring accounts or logins.

The project was built as a capstone project and focuses on a clearly scoped MVP that demonstrates full-stack development, API integration, database usage, and deployment.

---

## MVP Scope

The MVP of Memory Wall focuses on one simple user flow:

An organizer creates an event and shares a link with guests. Guests can upload photos and optional captions to the event. All uploads are stored externally and linked to the event in a database. The organizer can view the collected memories in a gallery, update basic event details if needed, and delete unwanted uploads.

The memory wall can update automatically to reflect new submissions without requiring a full page reload. The MVP intentionally avoids authentication and real-time technologies to keep the scope manageable and the core functionality reliable.

---

## User Roles

### Organizer

- Creates an event
- Views all uploaded photos and messages
- Updates basic event details (name, date)
- Deletes unwanted uploads

### Guest

- Accesses the event via a shared link
- Uploads photos and optional messages
- No account or login required

---

## Core Features

- Event creation with basic details
- Guest photo uploads via shared event link
- External media storage
- Central memory wall gallery per event
- Automatic gallery updates at regular intervals
- Deletion of uploads by the organizer
- Public deployment

---

## Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **Media Storage:** Cloudinary
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## CRUD Overview

The application demonstrates full CRUD functionality across different entities:

- **Create**
  - Create events
  - Upload photos and messages
- **Read**
  - View event details
  - View memory wall gallery
- **Update**
  - Edit event name and date
- **Delete**
  - Delete uploaded photos and associated metadata

---

## Project Structure

```text
src/
├── pages/
│   ├── index.js
│   ├── api/
│   │   ├── events.js
│   │   └── uploads.js
├── components/
├── styles/
public/
```
