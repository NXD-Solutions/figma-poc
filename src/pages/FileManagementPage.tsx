import { AppSidebar } from "../components/AppSidebar";
import { FileTable } from "../components/FileTable";
import {
  CaretRight,
  MagnifyingGlass,
  Upload,
  BellSimple,
  GridFour,
} from "@phosphor-icons/react";

function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500">
      <span className="hover:text-indigo-600 cursor-pointer font-medium">Home</span>
      <CaretRight size={14} className="text-slate-300" />
      <span className="text-slate-800 font-semibold">My Files</span>
    </nav>
  );
}

function StorageFooter() {
  const usedGb = 17.2;
  const totalGb = 20;
  const pct = Math.round((usedGb / totalGb) * 100);

  return (
    <div className="flex items-center justify-between px-8 py-6 border-t border-slate-200 bg-white">
      <div className="flex flex-col gap-2 w-72">
        <p className="text-sm text-slate-800">
          <span className="font-extrabold">Used Space: </span>
          <span className="font-medium text-slate-600">{usedGb}gb out of {totalGb}gb</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">{pct}%</span>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-bold px-4 py-2.5 rounded-full hover:bg-indigo-700 transition-colors">
        Buy More Space
        <Upload size={16} />
      </button>
    </div>
  );
}

export function FileManagementPage() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <AppSidebar />

      <main className="flex flex-col flex-1 overflow-hidden">
        {/* Page header */}
        <header className="bg-white border-b border-slate-200 px-8 pt-8 pb-0">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumbs />
            <div className="flex items-center gap-2.5">
              <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500">
                <BellSimple size={18} />
              </button>
              <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500">
                <GridFour size={18} />
              </button>
              <div className="size-8 rounded-full bg-indigo-200 flex items-center justify-center">
                <span className="text-indigo-700 text-xs font-bold">JD</span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight pb-4">My Files</h1>
            <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-bold px-4 py-2.5 rounded-full mb-4 hover:bg-indigo-700 transition-colors">
              <Upload size={16} />
              Upload File
            </button>
          </div>
        </header>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-100">
          {/* Tabs */}
          <div className="flex gap-1">
            {["All Files", "Shared", "Recent"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  i === 0
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 border border-slate-300 rounded-full bg-white w-80">
            <MagnifyingGlass size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search files..."
              className="flex-1 text-sm text-slate-600 placeholder:text-slate-400 bg-transparent outline-none font-medium"
            />
          </div>
        </div>

        {/* Table + footer */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <FileTable />
          </div>
          <StorageFooter />
        </div>
      </main>
    </div>
  );
}
