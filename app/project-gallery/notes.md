# [Project Gallery](https://blog.olivierlarose.com/tutorials/project-gallery-mouse-hover)

The project gallery is composed of 3 components:

**Page component (page.tsx)**
This is the parent component that will contain the data and the state.

**Project component (project.tsx)**
This component will be used to display a single project. This will be able to set the state of the modal.

**Modal component (project-list.tsx)**
This will represent the modal that will use the state. It will animate the changes using framer motion 

## How what I would change
- I would use zustand to manage the state of the modal, that way the page could be a server component and the data could be fetched from a database