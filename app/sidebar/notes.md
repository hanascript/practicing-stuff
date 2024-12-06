# Sidebar

This is the sidebar component from shadcn

### Structure

A Sidebar component is composed of the following parts:

- SidebarProvider - Handles collapsible state. This is located outside the sidebar bar itself

- Sidebar - The sidebar container.
- SidebarHeader and SidebarFooter - Sticky at the top and bottom of the sidebar.
- SidebarContent - Scrollable content.
- SidebarGroup - Section within the SidebarContent.
- SidebarTrigger - Trigger for the Sidebar.

### Usage

1. Wrap the part of the app you want to be in the sidebar with the SidebarProvider component.
2. Add the Sidebar component inside the SidebarProvider, separate from the content.
3. Add the SidebarTrigger component somewhere inside the sidebar provider also, but outside the Sidebar component. This is the button that will open the sidebar.

Creating the sidebar itself is similar to how you create other shadcn components