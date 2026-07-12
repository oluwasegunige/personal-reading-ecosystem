# Personal Reading Ecosystem

An offline-first, cross-platform reading ecosystem featuring a desktop library manager, a mobile reader, and seamless cloud synchronization.

> **Status:** 🚧 Early Development (Pre-Alpha)

---

## Vision

Most ebook applications solve only part of the reading experience.

Some are excellent readers but poor library managers.
Others organize books well but provide mediocre reading experiences.
Cloud synchronization is often tied to proprietary ecosystems, and many applications require users to sacrifice ownership of their own library.

Personal Reading Ecosystem aims to provide a cohesive, user-owned experience that combines:

- A powerful desktop library manager
- A distraction-free mobile reading experience
- Seamless synchronization across devices
- Offline-first operation
- Open, non-proprietary file support

The guiding philosophy is simple:

> **You own your books. The software should adapt to your workflow—not the other way around.**

---

## Project Goals

- Support large personal libraries (10,000+ books)
- Prioritize PDF and EPUB reading
- Deliver a first-class mobile reading experience
- Make desktop library management fast and intuitive
- Keep all core functionality available offline
- Synchronize books and reading progress across devices
- Maintain a modular, extensible architecture

---

## Planned Components

### Desktop Application

- Library management
- Metadata editing
- Book importing
- Search and filtering
- Cover management
- Reading

### Mobile Application

- Reading
- Offline downloads
- Bookmarks
- Highlights
- Notes
- Reading progress

### Cloud Services

- Authentication
- Synchronization
- File storage
- Device coordination

---

## Repository Structure

```
.
├── apps/
├── docs/
├── packages/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

As development progresses, additional applications and shared packages will be added to this repository.

---

## Documentation

Project documentation lives inside the `docs/` directory.

- Product Requirements
- UX
- Technical Architecture
- Design System
- Engineering Decisions

---

## Development Roadmap

### Phase 0

- Shared domain model
- Local database
- Import pipeline
- Metadata extraction

### Phase 1

- Desktop library manager

### Phase 2

- Reader

### Phase 3

- Cloud synchronization

### Phase 4

- Mobile application

---

## Current Status

The project is currently focused on establishing the core domain model and architecture before application development begins.

---

## License

This project is licensed under the Mozilla Public License 2.0.

See the LICENSE file for details.
