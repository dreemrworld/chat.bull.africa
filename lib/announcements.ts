export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const recentAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Native Web Search",
    content: "You can now receive the latest search results on the web and add URL links to your conversation. No extra setup needed",
    date: "6-Oct-2025",
  },
  {
    id: "2", 
    title: "Text-to-Speech AI",
    content: "We added a client-side AI WebSpeech to read your message out loud for you. The first time you click on it it may take some minutes to load. We are adding more advanced AI soon!",
    date: "6-Oct-2025",
  },
  {
    id: "3",
    title: "Download as a PWA",
    content: "Download the webapp directly on your browser as a modern Progressive Web Application. Offline AI coming soon!",
    date: "6-Oct-2025",
  }
];
