import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CreateIssuePage() {
  return (
    <div className="dark min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b px-6 py-4 border-violet-900 bg-violet-950/60">
        <h3 className="text-lg font-bold">Issue Tracker</h3>
      </header>

      <div className="flex">
        <aside className="w-64 border-r border-violet-900 bg-violet-950/30 p-4">
          <p>Sidebar</p>
        </aside>

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create issue
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Add the information needed to describe the issue.
              </p>
            </div>

            <section className="max-w-2xl">
              <form>
                <Card>
                  <CardHeader>
                    <CardTitle>Issue details</CardTitle>
                    <CardDescription>
                      Provide a title, description and priority
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter issue heading..."
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>

                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe the issue..."
                        className="min-h-32 resize-y"
                      ></Textarea>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select name="priority">
                        <SelectTrigger id="priority" className="w-full">
                          <SelectValue placeholder="Select a priority" />
                        </SelectTrigger>

                        <SelectContent className="dark">
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-3">
                      <p id="issue-type-label" className="text-sm font-medium">
                        Issue type
                      </p>

                      <RadioGroup
                        name="issueType"
                        aria-labelledby="issue-type-label"
                        className="grid-cols-1 sm:grid-cols-3"
                      >
                        <div className="flex items-center gap-2 rounded-lg border p-3">
                          <RadioGroupItem id="type-bug" value="bug" />
                          <Label htmlFor="type-bug">Bug</Label>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg border p-3">
                          <RadioGroupItem id="type-feature" value="feature" />
                          <Label htmlFor="type-feature">Feature</Label>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg border p-3">
                          <RadioGroupItem id="type-task" value="task" />
                          <Label htmlFor="type-task">Task</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border p-3">
                      <Checkbox
                        id="notifyTeam"
                        name="notifyTeam"
                        aria-labelledby="notify-team-description"
                      />
                      <div className="grid gap-1">
                        <Label htmlFor="notifyTeam">
                          Notify team members
                          <span className="text-muted-foreground">
                            (optional)
                          </span>
                        </Label>

                        <p
                          id="notify-team-description"
                          className="text-sm text-muted-foreground"
                        >
                          Send a notification when this issue is created.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="estimate">Estimate</Label>
                        <Input
                          id="estimate"
                          name="estimate"
                          type="number"
                          min="0"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="dueDate">Due date</Label>
                        <Input id="dueDate" name="dueDate" type="date" />
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="justify-end">
                    <Button type="button">Create issue</Button>
                  </CardFooter>
                </Card>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

// TODO:
// Eventually this page will contain:
//
// - page heading
// - Card
// - controlled form
// - shadcn Input
// - Textarea
// - Select
// - RadioGroup
// - Checkbox
// - Switch
// - Button
