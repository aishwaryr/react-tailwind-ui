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

            <section>
              <h2 className="text-lg font-medium">Issue details</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Provide a title, description, and priority.
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter issue heading..."
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select name="priority">
                    <SelectTrigger id="priority" className="w-full">
                      <SelectValue placeholder="Select a priority" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
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

                <div className="mt-6 flex justify-end">
                  <Button type="button">Create issue</Button>
                </div>
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
