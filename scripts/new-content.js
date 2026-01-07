#!/usr/bin/env node

/**
 * Content Generator Script
 * Usage: node scripts/new-content.js project "My Project Title"
 *        node scripts/new-content.js story "My Story Title"
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const type = args[0]; // 'project' or 'story'
const title = args[1];

if (!type || !title) {
    console.error('Usage: node scripts/new-content.js <project|story> "Title"');
    process.exit(1);
}

// Generate slug from title
const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const today = new Date().toISOString().split('T')[0];

// Create folder name with date prefix: YYYY-MM-DD-slug
const folderName = `${today}-${slug}`;

if (type === 'project') {
    const projectDir = path.join(process.cwd(), 'content', 'projects', folderName);

    // Create directory
    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir, { recursive: true });
    }

    // Create index.md
    const projectTemplate = `---
title: "${title}"
slug: "${slug}"
description: "Brief description of your project"
category: "model"
tags: ["Python", "Technology", "Tool"]
date: "${today}"
duration: "X months"
role: "Data Scientist"
role: "Data Scientist"
featured: false
thumbnail: "thumbnail.jpg"
images:
  - "main.jpg"
  - "dashboard.jpg"
  - "analytics.jpg"
githubUrl: ""
liveUrl: ""
---

## The Challenge

Describe the problem you were solving...

## The Solution

Explain your approach and implementation...

## Results & Impact

- Key result 1
- Key result 2
- Key result 3
`;

    fs.writeFileSync(path.join(projectDir, 'index.md'), projectTemplate);

    // Create README for images
    const imageReadme = `# Images for ${title}

Place your project images here:
- main.jpg - Main project screenshot
- dashboard.jpg - Dashboard or UI screenshot
- analytics.jpg - Results or analytics screenshot

Recommended size: 1200x800px
Format: JPG, PNG, or WebP
Max file size: 500KB
`;

    fs.writeFileSync(path.join(projectDir, 'README.md'), imageReadme);

    console.log(`✅ Project created: content/projects/${folderName}/`);
    console.log(`📝 Edit: content/projects/${folderName}/index.md`);
    console.log(`🖼️  Add images to: content/projects/${folderName}/`);

} else if (type === 'story') {
    const storyDir = path.join(process.cwd(), 'content', 'stories', folderName);

    // Create directory
    if (!fs.existsSync(storyDir)) {
        fs.mkdirSync(storyDir, { recursive: true });
    }

    // Create index.md
    const storyTemplate = `---
title: "${title}"
slug: "${slug}"
emoji: "📝"
excerpt: "A brief excerpt that appears in the story list"
category: "Data Science"
date: "${today}"
readTime: 5
coverImage: "cover.jpg"
---

# ${title}

Your story content here...

## Introduction

Start your story...

## Main Content

Continue with your insights...

## Conclusion

Wrap up your story...
`;

    fs.writeFileSync(path.join(storyDir, 'index.md'), storyTemplate);

    // Create README for images
    const imageReadme = `# Images for ${title}

Place your cover image here:
- cover.jpg (optional)

Recommended size: 1200x630px
Format: JPG, PNG, or WebP
Max file size: 300KB
`;

    fs.writeFileSync(path.join(storyDir, 'README.md'), imageReadme);

    console.log(`✅ Story created: content/stories/${folderName}/`);
    console.log(`📝 Edit: content/stories/${folderName}/index.md`);
    console.log(`🖼️  Add cover image to: content/stories/${folderName}/`);

} else {
    console.error('Type must be "project" or "story"');
    process.exit(1);
}
