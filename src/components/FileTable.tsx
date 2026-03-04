import {
  FileText,
  FolderOpen,
  DotsThreeOutlineVertical,
  Eye,
  PencilSimpleLine,
  ChatDots,
  ShareFat,
  TrashSimple,
} from "@phosphor-icons/react";

type FileRow = {
  id: string;
  name: string;
  type: "file" | "folder";
  size: string;
  modified: string;
  sharedWith: string[];
  actions?: boolean;
};

const FILES: FileRow[] = [
  { id: "1", name: "accounts.txt", type: "file", size: "12 KB", modified: "2026/02/15", sharedWith: ["JD", "AB", "CD"] },
  { id: "2", name: "Q1 Report.pdf", type: "file", size: "1.4 MB", modified: "2026/02/10", sharedWith: ["JD"] },
  { id: "3", name: "Design Assets", type: "folder", size: "88.2 MB", modified: "2026/02/08", sharedWith: ["JD", "AB"] },
  { id: "4", name: "budget_2026.xlsx", type: "file", size: "340 KB", modified: "2026/01/30", sharedWith: [] },
  { id: "5", name: "Secret Folder", type: "folder", size: "22 MB", modified: "2026/01/22", sharedWith: ["JD", "AB", "CD", "EF"] },
  { id: "6", name: "meeting_notes.docx", type: "file", size: "84 KB", modified: "2026/01/18", sharedWith: ["AB"] },
  { id: "7", name: "Public Files", type: "folder", size: "15 MB", modified: "2026/01/05", sharedWith: [] },
  { id: "8", name: "invoice_jan.pdf", type: "file", size: "210 KB", modified: "2026/01/01", sharedWith: ["JD"] },
];

function AvatarStack({ initials }: { initials: string[] }) {
  if (initials.length === 0) return <span className="text-slate-400 text-sm">—</span>;
  return (
    <div className="flex -space-x-1.5">
      {initials.slice(0, 3).map((init, i) => (
        <div
          key={i}
          className="size-7 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center"
        >
          <span className="text-indigo-700 text-[10px] font-bold">{init}</span>
        </div>
      ))}
      {initials.length > 3 && (
        <div className="size-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
          <span className="text-slate-500 text-[10px] font-semibold">+{initials.length - 3}</span>
        </div>
      )}
    </div>
  );
}

function ActionMenu() {
  return (
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500" title="View">
        <Eye size={16} />
      </button>
      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500" title="Edit">
        <PencilSimpleLine size={16} />
      </button>
      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500" title="Comment">
        <ChatDots size={16} />
      </button>
      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500" title="Share">
        <ShareFat size={16} />
      </button>
      <button className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-500" title="Delete">
        <TrashSimple size={16} />
      </button>
      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500" title="More">
        <DotsThreeOutlineVertical size={16} />
      </button>
    </div>
  );
}

export function FileTable() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_2fr_1.5fr_auto] bg-white border-b border-slate-200">
        {["Name", "Size", "Modified", "Shared With", ""].map((col, i) => (
          <div key={i} className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {col}
          </div>
        ))}
      </div>

      {/* Rows */}
      {FILES.map((file) => (
        <div
          key={file.id}
          className="group grid grid-cols-[2fr_1fr_2fr_1.5fr_auto] items-center border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
        >
          {/* Name */}
          <div className="flex items-center gap-3 px-6 py-4">
            {file.type === "folder" ? (
              <FolderOpen size={20} weight="fill" className="text-indigo-400 shrink-0" />
            ) : (
              <FileText size={20} weight="fill" className="text-slate-400 shrink-0" />
            )}
            <div>
              <p className="text-sm font-bold text-slate-800">{file.name}</p>
              <p className="text-xs text-slate-500 capitalize">{file.type}</p>
            </div>
          </div>

          {/* Size */}
          <div className="px-6 py-4 text-sm text-slate-600">{file.size}</div>

          {/* Modified */}
          <div className="px-6 py-4 text-sm text-slate-600">{file.modified}</div>

          {/* Shared With */}
          <div className="px-6 py-4">
            <AvatarStack initials={file.sharedWith} />
          </div>

          {/* Actions */}
          <div className="px-6 py-4">
            <ActionMenu />
          </div>
        </div>
      ))}
    </div>
  );
}
