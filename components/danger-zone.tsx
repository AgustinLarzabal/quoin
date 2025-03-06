"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

export function DangerZone() {
  const [open, setOpen] = useState(false);
  const [deleteText, setDeleteText] = useState("");

  return (
    <div className="mb-8">
      <Card className="w-full border-red-500">
        <CardHeader>
          <CardTitle className="text-sm font-normal">Delete Account</CardTitle>
          <p className="text-secondary text-sm">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
        </CardHeader>
        <CardContent>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="mb-4">
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Please type DELETE to confirm.
                </DialogDescription>
              </DialogHeader>

              <Input
                value={deleteText}
                onChange={(e) => setDeleteText(e.target.value)}
                placeholder="Type DELETE to confirm"
              />

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {}}
                  disabled={deleteText !== "DELETE"}
                >
                  Confirm Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
