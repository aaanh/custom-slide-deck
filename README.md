# GCES UpStart 2024 Workshop on UI/UX

This is a custom React Nextjs web application for building highly customized with low-level (more like source code level) manipulation slide decks.

## Raison d'etre

I did not choose PowerPoint or any other presentation software to build my slide deck for the event because I want to have a programmatically ([not that PowerPoint can't be used as a programming language](https://www.youtube.com/watch?v=_3loq22TxSc)) themed, styled, and rendered content display system that does not trouble me with configuring layouts, alignments, or any of those point and click or drag and drop shenanigans.

I WANT TO LOOK COOL AS SHxT MAKING A POWERPOINT. THAT'S WHY, OK?

## Features

- Backward and Forward navigation
  - Using left-right arrow keys
  - Using your Thinkpad nipple (or touchpad, or mouse, whatever)
- Script (file) page for all of you goldfish-brained like me out there
- Basically you can code and style your slides using TSX and Tailwind
- Responsive design with support for like 90% of screen sizes on all laptop/desktop systems and 5% of all mobile devices
- Quickly access your script so you don't look like a fool in front of everyone
- Instrinsics:
  - Have your slides source controlled with git ✅
  - Share it anywhere (by hosting on whatever platform you want) ✅

## How to use

### Prerequisites

- Install node >= v20
- Install git

### Run locally

On Mac or Linux

```sh
# Clone this repo
git clone https://github.com/aaanh/gces-upstart-uiux-slidedeck.git myNotPowerpointProject # replace this with a name you vibe with
cd [myNotPowerpointProject] && npm i && npm run dev
```

On Windows (powershell)

```powershell
git clone https://github.com/aaanh/gces-upstart-uiux-slidedeck.git myNotPowerpointProject # replace this with a name you vibe with
cd [myNotPowerpointProject]; npm i; npm run dev
```

### Editing

You can add slides in the `slides` array in `src/slides.tsx`.

You can write your script in Markdown in `pages/script.mdx`.

### Previewing

Your slides are shown at `localhost:3000/`

Your script is rendered at `localhost:3000/script`

Note: Replace `localhost:3000` if an IP address or domain name when you have it deployed somewhere.
