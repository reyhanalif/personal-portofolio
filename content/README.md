# Content Management Guide

This portfolio uses a markdown-based content management system. Each project and story has its own folder with a markdown file and associated images.

## 📁 Folder Structure

```
content/
├── projects/
│   └── 2025-05-01-your-project-slug/
│       ├── index.md          # Project content and metadata
│       ├── main.jpg          # Main project image
│       ├── dashboard.jpg     # Additional images
│       └── analytics.jpg
└── stories/
    └── 2025-01-15-your-story-slug/
        ├── index.md          # Story content and metadata
        └── cover.jpg         # Cover image (optional)
```

**Note**: Folders are prefixed with the date (YYYY-MM-DD) for chronological organization.

## ✍️ Adding a New Project

### Step 1: Create Project Folder

Create a new folder in `content/projects/` with date prefix and slug:

```
content/projects/2025-01-15-my-awesome-project/
```

The folder name format is: `YYYY-MM-DD-slug`

### Step 2: Create index.md

Create `index.md` with frontmatter and content:

```markdown
---
title: "My Awesome Project"
slug: "my-awesome-project"
description: "A brief description of your project"
category: "model"  # or "data-analytics"
tags: ["Python", "Machine Learning", "AWS"]
date: "2025-01-15"
duration: "3 months"
role: "Data Scientist"
featured: true  # Show on homepage
thumbnail: "thumb.jpg"  # Optional dedicated thumbnail
images:
  - "main.jpg"
  - "dashboard.jpg"
  - "results.jpg"
githubUrl: "https://github.com/yourusername/project"
liveUrl: "https://your-demo.com"
---

## The Challenge

Describe the problem you were solving...

## The Solution

Explain your approach and implementation...

## Results & Impact

- Key result 1
- Key result 2
- Key result 3
```

### Step 3: Add Images

Place your images in the same folder:
- `main.jpg` - Main project screenshot
- `dashboard.jpg` - Dashboard or UI screenshot
- `results.jpg` - Results or analytics screenshot

**Image Requirements:**
- Format: JPG, PNG, or WebP
- Recommended size: 1200x800px or similar aspect ratio
- Keep file sizes under 500KB for performance

## 📝 Adding a New Story

### Step 1: Create Story Folder

Create a new folder in `content/stories/` with date prefix and slug:

```
content/stories/2025-01-15-my-story-title/
```

The folder name format is: `YYYY-MM-DD-slug`

### Step 2: Create index.md

```markdown
---
title: "My Story Title"
slug: "my-story-title"
emoji: "🚀"
excerpt: "A brief excerpt that appears in the story list"
category: "Data Science"
date: "2025-01-15"
readTime: 8  # Estimated minutes to read
coverImage: "cover.jpg"  # Optional
---

# My Story Title

Your full story content here with markdown formatting...

## Section 1

Content...

## Section 2

More content...
```

### Step 3: Add Cover Image (Optional)

Place `cover.jpg` in the same folder if you want a cover image.

## 🎨 Markdown Formatting

You can use standard markdown in your content:

- **Bold text**: `**bold**`
- *Italic text*: `*italic*`
- [Links](url): `[text](url)`
- Lists: `- item` or `1. item`
- Code blocks: ` ```language ... ``` `
- Headings: `## Heading`

## 🔄 How It Works

1. **Build Time**: The site reads all markdown files from `content/` folder
2. **Parsing**: Uses `gray-matter` to extract frontmatter metadata
3. **Rendering**: Converts markdown to HTML and displays it
4. **Images**: Served from each project/story's folder

## 📋 Frontmatter Fields

### Project Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| title | ✅ | string | Project title |
| slug | ✅ | string | URL-friendly identifier |
| description | ✅ | string | Short description |
| category | ✅ | "model" \| "data-analytics" | Project category |
| tags | ✅ | string[] | Technology tags |
| date | ✅ | string | Project date (YYYY-MM-DD) |
| featured | ✅ | boolean | Show on homepage |
| images | ✅ | string[] | Image filenames |
| thumbnail | ❌ | string | Dedicated thumbnail image |
| duration | ❌ | string | Project duration |
| role | ❌ | string | Your role |
| githubUrl | ❌ | string | GitHub repository URL |
| liveUrl | ❌ | string | Live demo URL |

### Story Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| title | ✅ | string | Story title |
| slug | ✅ | string | URL-friendly identifier |
| emoji | ✅ | string | Emoji for story card |
| excerpt | ✅ | string | Brief excerpt |
| category | ✅ | string | Story category |
| date | ✅ | string | Publication date (YYYY-MM-DD) |
| readTime | ✅ | number | Minutes to read |
| coverImage | ❌ | string | Cover image filename |

## 🚀 Quick Start

To add a new project:

```bash
# 1. Use the generator script (recommended)
node scripts/new-content.js project "My Project Title"
# Creates: content/projects/2025-01-07-my-project-title/

# 2. Or create manually
mkdir content/projects/2025-01-07-my-project

# 3. Create markdown file
# Edit content/projects/2025-01-07-my-project/index.md

# 4. Add images
# Copy images to content/projects/2025-01-07-my-project/

# 5. Done! The site will automatically pick it up
```

## 💡 Tips

1. **Slug naming**: Use lowercase with hyphens (e.g., `my-awesome-project`)
2. **Image optimization**: Compress images before adding them
3. **Consistent naming**: Use descriptive image names (main.jpg, dashboard.jpg, etc.)
4. **Date format**: Always use YYYY-MM-DD format
5. **Featured projects**: Limit to 3-5 featured projects for homepage

## 🔍 Troubleshooting

**Project not showing up?**
- Check that `index.md` exists in the project folder
- Verify frontmatter syntax (proper YAML format)
- Ensure `slug` matches the folder name
- Check that `featured: true` if you want it on homepage

**Images not loading?**
- Verify image filenames match those in frontmatter
- Check image file extensions (jpg, png, webp)
- Ensure images are in the same folder as index.md

**Build errors?**
- Validate YAML frontmatter syntax
- Check for missing required fields
- Ensure dates are in YYYY-MM-DD format
