# Product Requirements Document (PRD)

## Product Name

Working title: **Personal Reading Ecosystem**

---

# Vision

Create a cross-platform reading ecosystem that combines the strengths of desktop library managers (such as calibre) with the simplicity and polish of modern reading apps.

The product should allow users to:

* build a personal digital library
* manage books on desktop
* automatically synchronize books and reading progress
* enjoy an excellent reading experience on mobile
* continue reading without internet access
* own all of their books without vendor lock-in

The product is designed primarily for people who own DRM-free books, academic papers, technical books and personal document collections.

---

# Target Users

Primary user:

A heavy reader with hundreds or thousands of ebooks spread across folders and devices.

Typical workflow:

1. Download books on PC
2. Organize library
3. Read primarily on phone
4. Occasionally read on desktop
5. Never worry about manually transferring files

---

# Product Principles

The following principles should guide every feature decision.

## 1. Offline First

The application should remain fully usable without internet.

Synchronization should enhance the experience rather than enable it.

---

## 2. User Owns Their Library

Books remain regular files.

The application never locks users into proprietary formats.

---

## 3. Desktop is the Source of Truth

The desktop application manages the master library.

Mobile devices consume synchronized copies.

---

## 4. Reading Comes Before Library Management

Reading should require as few taps as possible.

Library management should never interrupt reading.

---

# Platforms

Desktop

* Windows (first priority)
* macOS (future)
* Linux (future)

Mobile

* Android (first priority)
* iOS (future)

---

# Supported Formats

## Version 1

Mandatory

* PDF
* EPUB

Future

* CBZ
* CBR
* MOBI
* AZW3
* TXT
* Markdown

---

# Core User Journey

## Desktop

User downloads a book.

↓

Book is imported into library.

↓

Metadata is extracted.

↓

User edits metadata if desired.

↓

Book automatically uploads to cloud.

↓

Phone receives synchronization.

↓

Book appears in mobile library.

↓

User opens book.

↓

Reading position syncs continuously.

---

# Functional Requirements

# Reading

## Supported Formats

Version 1

* PDF
* EPUB

Requirements

* open from library
* open arbitrary local file
* remember recently opened files

---

## Reading Experience

Users should be able to

* change font size (EPUB)
* font family (EPUB)
* line spacing (EPUB)
* margins (EPUB)
* page/background colors
* dark mode
* fullscreen mode
* landscape reading
* portrait reading

PDF

Because PDFs have fixed layouts:

Support

* zoom
* fit width
* fit page
* continuous scroll
* page mode

---

## Reading State

System remembers

* last opened page
* percentage complete
* last opened date
* total reading time (future)

---

## Bookmarks

User can

* create bookmark
* rename bookmark
* delete bookmark

Bookmarks synchronize.

---

## Highlights

User can

* highlight text

Future

* color choices
* highlight export

---

## Notes

Attach notes to

* highlighted text
* bookmarks

Future

Standalone notes.

---

# Library Management

## Import

Desktop supports

* individual files
* folders
* recursive folder import
* drag and drop

Duplicate detection required.

---

## Metadata

Each book contains

Required

* title
* author
* file format
* file size
* page count (if available)
* added date

Optional

* publisher
* publication year
* ISBN
* language
* description

---

## Organization

Books may belong to

* author
* series
* tags
* collections

Definitions

### Series

Reading order.

Example

Mistborn

Book 1

Book 2

Book 3

---

### Collections

User-defined groups.

Examples

* Read Soon
* Favourite Books
* Work
* Theology

---

### Tags

Flexible labels.

Examples

* AI
* Leadership
* Philosophy

A book may have many tags.

---

# Search

Support

* title
* author
* tags
* series

Future

Full-text search.

---

# Sorting

Support

* title
* author
* recently added
* recently opened
* reading progress

---

# Filtering

Support

* unread
* currently reading
* completed
* downloaded
* not downloaded

---

# Synchronization

## Philosophy

Desktop owns the library.

Cloud mirrors desktop.

Phone mirrors cloud.

---

## New Book Flow

When user imports a book on desktop

1. Metadata extracted.
2. Book added.
3. Upload begins automatically.
4. Phone receives notification.
5. Phone downloads eligible books.
6. Library updates.

---

## Reading Progress

Synchronize

* current page
* percentage complete
* last opened timestamp

---

## Bookmarks

Synchronize

* additions
* edits
* deletions

---

## Notes

Synchronize

* note text
* highlight association

---

## Metadata

Synchronize

* title
* author
* tags
* collections
* cover

---

# Download Behaviour

This is currently undefined and should be decided before implementation.

Possible options:

### Option A

Download every book.

Pros

Simple.

Cons

Storage heavy.

---

### Option B (recommended)

User marks books as

* Available Offline

Only those books download automatically.

---

### Option C

Automatic Smart Downloads

Download

* currently reading
* recently opened
* favourites

Remove unused books when storage becomes limited.

---

# Offline Behaviour

Without internet

User should

* open downloaded books
* continue reading
* create bookmarks
* create notes
* create highlights
* edit metadata (desktop)

Synchronization resumes automatically once online.

---

# Conflict Resolution

Potential conflicts

User reads

Desktop to page 50.

Phone to page 65.

Recommended rule

Newest modification timestamp wins.

Bookmarks

Merge.

Highlights

Merge.

Notes

Merge.

Metadata

Desktop wins.

---

# Mobile Requirements

Reading

* keep screen awake while reading
* optional brightness override
* landscape support
* portrait support
* override system rotation lock
* fast startup

Synchronization

* battery-aware
* Wi-Fi only option
* background sync
* manual sync

Storage

User can

* remove local copy
* keep metadata
* redownload later

---

# Desktop Requirements

Import

* drag and drop
* folder monitoring (future)
* bulk import

Metadata

* bulk editing
* cover replacement
* bulk tagging

Performance

Importing thousands of books should not freeze the application.

---

# Non-Functional Requirements

Performance

* Library opens in under two seconds for typical collections.
* Reader opens quickly even for large PDFs.
* Scrolling remains smooth.

Reliability

No reading progress should be lost.

Synchronization retries automatically.

Security

Cloud communication encrypted.

User authentication required.

---

# Out of Scope

Version 1 excludes

* DRM removal
* Kindle store integration
* OCR
* AI summaries
* AI chat
* Text-to-speech
* Audiobooks
* Shared libraries
* Social features
* Reading statistics
* Web reader

---

# MVP (Version 1)

Reading

* PDF
* EPUB
* dark mode
* fullscreen
* bookmarks
* highlights
* notes
* reading progress

Desktop

* import files
* import folders
* search
* metadata editing
* drag and drop

Mobile

* offline reading
* keep screen awake
* rotation override

Sync

* upload books
* download books
* reading progress
* bookmarks
* metadata

---

# Version 2

* collections
* bulk metadata editing
* cover management
* advanced filters
* conflict resolution improvements
* Wi-Fi/background sync controls
* better PDF tools

---

# Version 3

* additional formats
* OCR
* full-text search
* reading statistics
* cloud backup versions
* smart downloads
* annotations export
* plugins/extensions

---

# Other Product Decisions


| Topic                    | Recommended Direction                                                                                                                                      |
| ------------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cloud model**          | Make the desktop library the canonical source initially. It simplifies ownership and aligns with your "desktop-first" vision.                              |
| **Book downloads**       | Default to metadata-only on mobile, with users pinning books for offline use. Add an option to automatically download "Currently Reading" and "Favorites." |
| **File updates**         | Treat newer editions as a new file unless the user explicitly replaces the existing book. Silent replacement risks breaking annotations.                               |
| **Library organization** | One book can belong to multiple collections and have multiple tags. Collections should behave like playlists, while tags remain independent labels.                                                                       |
| **Annotation anchoring** | Scope Version 1 to annotations on unchanged files only. Robust annotation migration across revised PDFs is a complex problem.                              |
| **Reading preferences**  | Sync global preferences (theme, font size, margins, line spacing), but keep zoom level and page view per book.                                             |
| **Sync conflicts**       | Use last-write-wins for Version 1, but surface a conflict indicator for notes to avoid silent data loss.                                                   |
| **Library size target**  | Performance should be designed to handle scale of 10,000 books.                                                    |
