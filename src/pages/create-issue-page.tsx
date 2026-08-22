export function CreateIssuePage() {
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

  return (
    <div className="min-h-screen">
      <header className="border-b px-6 py-4">Navbar</header>
      <div className="flex">
        <aside className="w-64 bg-amber-50 border-r-8 border-r-red-200 p-4">
          Sidebar
        </aside>

        <main className="flex-1 p-6">Page Content</main>
      </div>
    </div>
  );
}
