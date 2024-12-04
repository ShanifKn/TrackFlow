import React, { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface AlertDialogDemoProps {
  open: boolean;
  onClose: () => void;
}

const AddCategory: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Category?</AlertDialogTitle>
          <AlertDialogDescription>
            {" "}
            <div className="grid w-full items-center gap-2 mt-4">
              <Label htmlFor="name" className="text-gray-900">Category Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Category Name"
                className="h-12"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddCategory;
