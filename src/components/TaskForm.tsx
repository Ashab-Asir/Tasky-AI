import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";

const TaskForm = () => {
  return (
    <Card>
      <CardContent className="focus-within:border-foreground/30">
        <Textarea
          className="!border-0 !ring-0 mb-2 p-1"
          placeholder="After finishing the project,Take a tour"
          autoFocus
        ></Textarea>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="ghost" size="sm">
                <CalendarIcon></CalendarIcon> Due Date
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                disabled={{ before: new Date() }}
              ></Calendar>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskForm;
