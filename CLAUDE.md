# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Hugo using the Typo theme. The site is configured to be deployed at https://jaredstewart.io/ and focuses on content-centered design.

## Commands

### Development
- `hugo server` - Start local development server with live reload
- `hugo server -D` - Include draft content in development server
- `hugo` - Build the site for production (outputs to `public/` directory)

### Content Management
- `hugo new posts/my-post.md` - Create a new blog post
- `hugo new about.md` - Create a new page

## Architecture

### Site Structure
- **hugo.toml** - Main Hugo configuration file containing site settings, theme parameters, menu configuration, and social links
- **content/** - Markdown content files for pages and posts
- **themes/typo/** - Git submodule containing the Typo theme
- **static/** - Static assets served directly (images, files, etc.)
- **public/** - Generated site output (not tracked in git)

### Theme Configuration
The site uses the Typo theme with these key configurations:
- Auto theme switching (light/dark mode)
- Homepage displays posts collection
- Breadcrumbs enabled
- Social icons for LinkedIn and GitHub
- Syntax highlighting with 'algol' style
- Giscus comments disabled

### Content Organization
- Posts should be placed in `content/posts/`
- Main navigation includes: home, posts, about
- Pagination set to 100 items per page
- List pages show summaries with date format '2 Jan 2006'

### Theme Customization
The Typo theme supports extensive customization through hugo.toml parameters including:
- Color palettes
- Header visibility
- Home page intro content
- Social media links
- Menu structure
- Comment system integration