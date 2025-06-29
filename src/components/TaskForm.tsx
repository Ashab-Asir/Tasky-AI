import {
  CalendarIcon,
  ChevronDown,
  Hash,
  Inbox,
  SendHorizonal,
  X,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Textarea } from "./ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import { Separator } from "./ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ScrollArea } from "./ui/scroll-area";

import type { ClassValue } from "clsx";
import type { TaskForm } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { cn, formatCustomDate, getTaskDueDateColorClass } from "@/lib/utils";

import * as chrono from "chrono-node";
type TaskFormProps = {
  defaultFromData?: TaskForm;
  className?: ClassValue;
  mode: "create" | "edit";
  onCancel?: () => void;
  onSubmit?: (formData: TaskForm) => void;
};

const DEFAULT_FORM_DATA: TaskForm = {
  content: "",
  due_date: null,
  projectId: null,
};
const TaskForm: React.FC<TaskFormProps> = ({
  defaultFormData = DEFAULT_FORM_DATA,
  className,
  mode,
  onCancel,
  onSubmit,
}) => {
  const [taskContent, setTaskContent] = useState(defaultFormData.content);
  const [dueDate, setDueDate] = useState(defaultFormData.due_date);
  const [projectName, setPorjectName] = useState("");
  const [projectId, setProjectId] = useState();
  const [projectColorHex, setProjectColorHex] = useState();
  const [dueDateOpen, setDueDateOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  console.log(taskContent);
  console.log(dueDate);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: taskContent,
      due_date: dueDate,
      projectId: projectId,
    }));
  }, [taskContent, dueDate, projectId]);
  useEffect(() => {
    const chronoParsed = chrono.parse(taskContent);
    console.log(chronoParsed);
    if (chronoParsed.length) {
      const lastDate = chronoParsed[chronoParsed.length - 1];
      setDueDate(lastDate.date());
    }
  }, [taskContent]);
  const handleSubmit = useCallback(() => {
    if (!taskContent) {
      return;
    }
    console.log(formData);
    if (onSubmit) {
      onSubmit(formData);
      setTaskContent("");
    }
  }, [taskContent, onSubmit, formData]);
  return (
    <Card className="focus-within:border-foreground/30">
      <CardContent className="p-2">
        <Textarea
          className="!border-0 !ring-0 mb-2 p-1"
          placeholder="After finishing the project,Take a tour"
          autoFocus
          value={taskContent}
          onInput={(e) => setTaskContent(e.currentTarget.value)}
        ></Textarea>
        <div className="ring-1 ring-border roundedmd max-w-max">
          <Popover open={dueDateOpen} onOpenChange={setDueDateOpen}>
            <PopoverTrigger asChild>
              <Button
                size="sm"
                type="button"
                variant="ghost"
                className={cn(getTaskDueDateColorClass(dueDate, false))}
              >
                <CalendarIcon></CalendarIcon>
                {dueDate ? formatCustomDate(dueDate) : "Due Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
              side="bottom"
              sideOffset={4}
            >
              <Calendar
                mode="single"
                className="rounded-lg border shadow-sm"
                disabled={{ before: new Date() }}
                initialFocus
                onSelect={(selected) => {
                  setDueDate(selected || null);
                  setDueDateOpen(false);
                }}
              ></Calendar>
            </PopoverContent>
          </Popover>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="sm"
                className="px-2 -ms-2 ml-1"
                aria-label="Remove due date"
              >
                <X></X>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Remove due date</TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
      <Separator></Separator>
      <CardFooter className="grid grid-cols-[minmax(0,1fr)_max-content] gap-2 p-2 ">
        <Popover open={projectOpen} onOpenChange={setProjectOpen} modal>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={projectOpen}
              className="max-w-max"
            >
              <Inbox></Inbox> Inbox <ChevronDown></ChevronDown>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[240px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search project"></CommandInput>
              <CommandList>
                <ScrollArea>
                  <CommandEmpty>No project found</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Hash></Hash>Project 1
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 2
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 3
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 4
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 5
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 6
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 7
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 8
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 9
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 10
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 11
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 12
                    </CommandItem>
                    <CommandItem>
                      <Hash></Hash>Project 13
                    </CommandItem>
                  </CommandGroup>
                </ScrollArea>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2">
          <Button onClick={onCancel} variant="secondary">
            <span className="max-md:hidden">Cancel</span>{" "}
            <X className="md:hidden"></X>
          </Button>
          <Button onClick={handleSubmit} disabled={!taskContent}>
            <span className="max-md:hidden">
              {" "}
              {mode === "create" ? "Add task" : "Save"}Add task
            </span>
            <SendHorizonal className="md:hidden"></SendHorizonal>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskForm;
