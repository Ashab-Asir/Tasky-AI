import { useState, type PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import TaskForm from "./TaskForm";
import { useFetcher, useLocation } from "react-router-dom";
import { startOfToday } from "date-fns";

const TaskFormDialog: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const fetcher = useFetcher();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-0 !rounded-xl">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <TaskForm
          defaultFromData={{
            content: "",
            due_date:
              location.pathname === "/app/today" ? startOfToday() : null,
            projectId: null,
          }}
          mode="create"
          onCancel={() => setOpen(false)}
          onSubmit={(formData) => {
            fetcher.submit(JSON.stringify(formData), {
              action: "/app",
              method: "POST",
              encType: "application/json",
            });
            setOpen(false);
          }}
        ></TaskForm>
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
