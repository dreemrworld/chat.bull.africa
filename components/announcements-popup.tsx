"use client";

import * as React from "react";
import { InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { recentAnnouncements, Announcement } from "@/lib/announcements";

export function AnnouncementsPopup() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
          aria-label="View announcements"
        >
          <InfoIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InfoIcon className="h-5 w-5" />
            Recent Updates
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {recentAnnouncements.map((announcement) => (
              <AnnouncementItem
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AnnouncementItem({ announcement }: { announcement: Announcement }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">
            {announcement.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {announcement.content}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{announcement.date}</span>
      </div>
    </div>
  );
}
