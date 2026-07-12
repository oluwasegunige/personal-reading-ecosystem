I think this is exactly the right point to bring in an architect.

The PRD tells us **what** to build. The UX document tells us **how users experience it**. The architecture should now answer **how the system is structured so those requirements remain maintainable for years.**

One architectural principle stands out from your documents:

> This is not "an ebook reader with sync."

It is a **distributed system** consisting of three applications sharing a common domain model.  

That distinction affects almost every technical decision.

---

# Architecture Goals

The architecture should optimise for:

* Offline-first operation
* Fast local performance
* Independent desktop and mobile applications
* Cross-platform code reuse
* Easy addition of new book formats
* Scalability to at least 10,000 books
* Future extensibility without rewrites

---

# High-Level Architecture

```
                 ┌─────────────────────────┐
                 │     Cloud Services      │
                 │                         │
                 │ Authentication          │
                 │ Sync API               │
                 │ Metadata API           │
                 │ File Storage           │
                 └──────────┬──────────────┘
                            │
             REST / WebSocket / Background Sync
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
┌───────▼────────┐                     ┌────────▼────────┐
│ Desktop App    │                     │ Mobile App      │
│                │                     │                 │
│ Local DB       │                     │ Local DB        │
│ Reader Engine  │                     │ Reader Engine   │
│ Library Mgmt   │                     │ Reading UI      │
│ Sync Client    │                     │ Sync Client     │
└────────────────┘                     └─────────────────┘
```

Notice that **both applications are peers**.

Neither depends on the other.

The cloud coordinates them.

---

# Layered Architecture

Each application should follow identical layers.

```
Presentation

↓

Application

↓

Domain

↓

Infrastructure
```

---

## Presentation

Everything the user sees.

Desktop

* Library
* Reader
* Metadata Editor
* Settings

Mobile

* Library
* Reader
* Downloads
* Settings

---

## Application Layer

Coordinates user actions.

Examples

```
Import Book

Sync Library

Open Book

Download Book

Update Metadata

Add Highlight

Create Bookmark
```

This layer contains workflows, not business rules.

---

## Domain Layer

This is the heart of the system.

It should know nothing about Flutter, Windows, Android, or cloud APIs.

Core entities might include:

```
Book

Author

Series

Collection

Tag

Library

ReaderState

Bookmark

Highlight

Annotation

SyncRecord

Device

User
```

Every application shares this model.

---

## Infrastructure Layer

Responsible for:

* SQLite
* File system
* Cloud APIs
* Authentication
* PDF rendering
* EPUB rendering
* Background jobs

Nothing above this layer should know how these work.

---

# Modular Architecture

Rather than one large codebase, I would divide the application into feature modules.

```
Core

Library

Reader

Metadata

Synchronization

Storage

Search

Authentication

Settings
```

Each module owns its own models, services, and UI.

---

# Reader Architecture

The reader deserves to be its own subsystem.

```
Reader

├── PDF Engine

├── EPUB Engine

├── Navigation

├── Annotation Manager

├── Bookmark Manager

├── Reader Preferences

└── Reading Progress
```

Notice that adding CBZ later simply means introducing another rendering engine.

```
Reader

PDF

EPUB

CBZ

TXT

Markdown
```

No other code changes.

---

# Library Architecture

```
Library

Import

Metadata

Collections

Tags

Series

Search

Filters

Sorting

Recent

Currently Reading
```

The reader should never manipulate library data directly.

It should request changes through the Library module.

---

# Synchronization Architecture

I would separate synchronization into its own bounded context.

```
Sync

Upload Queue

Download Queue

Conflict Resolver

Sync Scheduler

Sync History

Retry Manager

Connectivity Monitor
```

This dramatically simplifies offline behaviour.

---

## Sync Pipeline

```
User imports book

↓

Local DB updated

↓

File copied into library

↓

Upload task queued

↓

Background worker uploads

↓

Server acknowledges

↓

Other devices notified

↓

Background download begins
```

Nothing waits for the cloud.

---

# Storage Model

Desktop

```
Books/

Metadata/

Covers/

Database/

Logs/
```

Database stores metadata only.

Books remain ordinary files.

This aligns perfectly with your ownership principle. 

---

# Local Database

Every device has its own local database.

Store

```
Books

Authors

Series

Collections

Tags

Bookmarks

Highlights

Reader State

Downloads

Sync Queue

Devices

Preferences
```

This allows every screen to work instantly.

---

# Cloud Responsibilities

The cloud should be intentionally "thin."

Responsible for

Authentication

File storage

Metadata storage

Device registry

Sync coordination

Notification

Not responsible for

Searching

Reading

Metadata editing

Rendering

Filtering

Sorting

Those happen locally.

---

# Event-Based Synchronization

Instead of syncing the whole database every time:

```
Book Imported

↓

Metadata Changed

↓

Bookmark Added

↓

Highlight Added

↓

Reading Progress Updated
```

Each becomes an event.

Events synchronize.

This scales much better.

---

# Offline Strategy

Everything writes locally first.

```
User Action

↓

Local Database

↓

UI Updates

↓

Queue Sync Event

↓

Internet Available?

No

↓

Keep Queue

↓

Internet Returns

↓

Replay Queue
```

This is considerably more reliable than trying to communicate with the server first.

---

# Search Architecture

Version 1

```
Title

Author

Series

Tags
```

Future

```
Full Text

OCR

Semantic Search

AI Search
```

By separating search into its own module now, you avoid a large refactor later.

---

# File Processing Pipeline

```
Import

↓

Hash File

↓

Duplicate Detection

↓

Extract Metadata

↓

Extract Cover

↓

Generate Thumbnail

↓

Save Database

↓

Queue Upload
```

Each step should be independent.

---

# Performance Strategy

The PRD targets libraries of around 10,000 books. 

That means:

* Lazy-load book grids instead of rendering entire libraries.
* Generate and cache cover thumbnails rather than decoding full-size covers repeatedly.
* Use background workers for metadata extraction and file hashing so imports remain responsive.
* Cache recently opened books and reader state for instant resume.
* Incrementally index new or changed books instead of rebuilding search indexes.

---

# Extensibility

The architecture should anticipate future capabilities by defining clear extension points from the beginning.

| Extension Point    | Future Capability                               |
| ------------------ | ----------------------------------------------- |
| Reader Engine      | CBZ, Markdown, MOBI, TXT                        |
| Metadata Providers | Online metadata lookup, ISBN enrichment         |
| Search Providers   | Full-text indexing, OCR, semantic search        |
| Annotation System  | Export, sharing, additional annotation types    |
| Cloud Services     | Multiple providers, self-hosting                |
| Import Pipeline    | Folder monitoring, email imports, watch folders |
| Authentication     | Additional identity providers                   |

Each extension should plug into an existing interface rather than requiring changes across the application.

## Recommended Technology Direction

Without prescribing implementation details, I would organize the solution as:

* **Shared domain and business logic** consumed by both desktop and mobile applications.
* **Desktop application** optimized for library management and metadata workflows.
* **Mobile application** optimized for immersive reading with minimal UI chrome.
* **Cloud backend** focused solely on synchronization, storage, authentication, and device coordination.
* **Independent rendering engines** for each supported document format behind a common reader interface.

This architecture mirrors the product vision in your PRD: the desktop remains the authoritative library manager, the mobile app is the primary reading experience, and the cloud exists to synchronize them rather than becoming the center of the product. It also gives you a foundation that can grow from an MVP into a mature ecosystem without requiring fundamental architectural changes.
