I think we should treat this as a UX project, not a screen-design project.

One mistake many engineers make is jumping straight into Figma. The result is a collection of attractive screens that don't fit together into a coherent product.

Instead, I'd recommend we work through five stages:

1. Product IA (Information Architecture)
2. User journeys
3. User flows
4. Low-fidelity wireframes
5. High-fidelity interface design

Your PRD is already strong enough to begin Stage 1.

---

# Stage 1 — Information Architecture

Your product is actually **three connected applications**, not one.

```
                ┌────────────────────┐
                │   Cloud Sync Core  │
                └─────────┬──────────┘
                          │
          ┌───────────────┴───────────────┐
          │                               │
 ┌────────▼────────┐             ┌────────▼────────┐
 │ Desktop Manager │             │ Mobile Reader   │
 └─────────────────┘             └─────────────────┘
```

Notice something interesting.

The Desktop app is a **library management product**.

The Mobile app is a **reading product**.

Those are completely different mental models.

Trying to make them identical would hurt both.

---

# Desktop Information Architecture

```
Library
│
├── Home
│
├── All Books
│
├── Authors
│
├── Series
│
├── Collections
│
├── Tags
│
├── Recently Added
│
├── Currently Reading
│
├── Finished
│
├── Downloads
│
└── Trash (optional)
```

Global actions

```
Import Book

Import Folder

Search

Sync Status

Settings
```

---

Every book has its own page.

```
Book Detail

Cover

Title

Author

Series

Tags

Collections

Metadata

Reading Progress

Devices

Sync Status

Open Book
```

Notice that **metadata editing belongs here**, not in the reader.

---

# Mobile Information Architecture

This should be dramatically simpler.

```
Library

Currently Reading

Downloaded

Collections

Search

Settings
```

Opening a book immediately transitions into Reader Mode.

There should not be a "Book Details" page unless the user explicitly requests it.

Reading is the primary task.

---

# Reading Mode

The reader is almost an entirely separate application.

```
Reader

┌────────────────────┐
│                    │
│                    │
│      Content       │
│                    │
│                    │
└────────────────────┘

Top Bar

← Back

Title

Progress

Menu

Bottom

Page Slider
```

Toolbar

```
Appearance

Bookmarks

Highlights

Notes

Search

Table of Contents
```

No library controls belong here.

---

# Primary User Flows

I think there are **six primary workflows**.

---

## Flow 1

Import a Book

```
Open Desktop

↓

Import File

↓

Metadata extracted

↓

User reviews metadata

↓

Save

↓

Book appears in Library

↓

Upload starts automatically

↓

Phone receives metadata

↓

Book appears on Mobile
```

---

## Flow 2

Open Book

```
Launch App

↓

Continue Reading

↓

Reader opens

↓

Resume exact location
```

This should literally require one tap.

---

## Flow 3

Find a Book

```
Open Library

↓

Search

↓

Filter

↓

Sort

↓

Open Book
```

---

## Flow 4

Offline Reading

```
Internet disappears

↓

User opens downloaded book

↓

Reads normally

↓

Creates notes

↓

Creates bookmarks

↓

Progress stored locally

↓

Reconnect

↓

Background sync
```

The user should barely notice they went offline.

---

## Flow 5

Sync

Desktop

```
Import

↓

Upload

↓

Metadata sync

↓

Book sync
```

Phone

```
Notification

↓

Metadata arrives

↓

Auto-download?

YES → Download

NO → Metadata only
```

---

## Flow 6

Manage Library

```
Open Desktop

↓

Select Books

↓

Bulk Edit

↓

Save

↓

Metadata sync

↓

Phone updates automatically
```

---

# Desktop Wireframe

```
 -----------------------------------------------------------
| Search____________________________________ Sync ✓  User |
------------------------------------------------------------
|            |                                           |
| Library    |            Book Grid                      |
|------------|                                           |
| Home       |  □ □ □ □ □ □ □ □ □ □                      |
| All Books  |  □ □ □ □ □ □ □ □ □ □                      |
| Authors    |                                           |
| Series     |                                           |
| Tags       |                                           |
| Collections|                                           |
|            |                                           |
------------------------------------------------------------
```

---

Book page

```
 ----------------------------------------------------
| Cover |  Title                                    |
|       |  Author                                   |
|       |  Series                                   |
|       |-------------------------------------------|
|       |  Metadata                                |
|       |                                           |
|       |  Tags                                    |
|       |                                           |
|       |  Collections                             |
|       |                                           |
|       | [Open Book]                              |
------------------------------------------------------
```

---

# Mobile Wireframe

Library

```
 ------------------------
 Search...

 Continue Reading

 ┌───────────────┐
 │ Cover         │
 │ Book          │
 │ 74%           │
 └───────────────┘

 Downloaded

 □ Book

 □ Book

 □ Book
```

---

Reader

```
────────────────────────
Back

Book Title

────────────────────────


(Page)


────────────────────────

24%

────────────────────────
```

Tap once

```
←

Book Title

Appearance

Bookmarks

Highlights

Notes

Contents

Search

More

```

---

# Interaction Model

One design principle I would add to your PRD is **progressive disclosure**.

The reader should initially expose almost nothing except the content. Controls appear only when needed.

For example:

* Single tap → show reader controls
* Double tap (PDF) → zoom
* Long press → highlight
* Swipe left/right → page navigation (page mode)
* Vertical scroll → continuous mode
* Pinch → zoom PDF
* Two-finger tap → quick bookmark (optional, later)

The goal is to maximize reading space while keeping common actions within easy reach.

---

# Biggest UX Improvement I'd Make

The PRD frames the app around **books**, but users are really thinking in terms of **tasks**. The home screen should reflect that by surfacing actions rather than folders.

Instead of landing on "All Books," the desktop home could answer questions like:

* Continue reading
* Recently added
* Recently imported
* Sync activity
* Books needing metadata
* Storage usage
* Reading across devices

Likewise, the mobile home should open directly to "Continue Reading," with the rest of the library one tap away. This reduces friction for the most common workflow and reinforces the principle from your PRD that *reading comes before library management*.
