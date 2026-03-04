import {
  HouseSimple,
  CheckSquare,
  Users,
  Folder,
  Plugs,
  GearSix,
  ChatTeardropDots,
  Warning,
  SignOut,
  MagnifyingGlass,
} from "@phosphor-icons/react";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
};

function NavBadge({ count }: { count: number }) {
  return (
    <span className="flex items-center justify-center px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-300 text-indigo-600 text-sm font-semibold leading-5">
      {count}
    </span>
  );
}

function NavItem({ icon, label, badge, active }: NavItem) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2.5 rounded-full min-h-12 w-70 cursor-pointer ${
        active ? "bg-indigo-50" : "bg-white hover:bg-slate-50"
      }`}
    >
      <div className="flex flex-1 items-center gap-2">
        <span className={`size-6 flex items-center justify-center ${active ? "text-indigo-600" : "text-slate-800"}`}>
          {icon}
        </span>
        <span className={`flex-1 text-base font-bold leading-snug ${active ? "text-indigo-600" : "text-slate-800"}`}>
          {label}
        </span>
      </div>
      {badge !== undefined && <NavBadge count={badge} />}
    </div>
  );
}

export function AppSidebar() {
  return (
    <aside className="flex flex-col justify-between w-78 h-screen bg-white border-r border-slate-200 px-4 py-8 shrink-0">
      {/* Top section */}
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 px-1">
          <div className="size-8 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-extrabold">N</span>
          </div>
          <span className="text-slate-800 text-base font-extrabold tracking-tight">NXD Files</span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-slate-300 bg-white">
          <MagnifyingGlass size={20} className="text-slate-400 shrink-0" />
          <span className="text-slate-400 text-base font-medium">Search...</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1.5">
          <NavItem icon={<HouseSimple size={24} />} label="Home" badge={10} />
          <NavItem icon={<CheckSquare size={24} />} label="Tasks" />
          <NavItem icon={<Users size={24} />} label="Users" badge={2} />
          <NavItem icon={<Folder size={24} />} label="Files" active />
          <NavItem icon={<Plugs size={24} />} label="Integrations" />
          <NavItem icon={<GearSix size={24} />} label="Settings" />
          <NavItem icon={<ChatTeardropDots size={24} />} label="Chat" badge={5} />
          <NavItem icon={<Warning size={24} />} label="Alerts" />
          <NavItem icon={<SignOut size={24} />} label="Sign Out" />
        </nav>
      </div>

      {/* Bottom: upgrade card + user */}
      <div className="flex flex-col gap-4">
        {/* Upgrade prompt */}
        <div className="bg-slate-50 rounded-3xl p-4 flex flex-col gap-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            Enjoy unlimited access to our app with only a small price monthly.
          </p>
          <div className="flex gap-4">
            <button className="text-slate-600 text-sm font-bold">Dismiss</button>
            <button className="text-indigo-600 text-sm font-bold">Go Pro</button>
          </div>
        </div>

        {/* User row */}
        <div className="flex items-center gap-3 px-1">
          <div className="size-8 rounded-full bg-indigo-200 flex items-center justify-center shrink-0">
            <span className="text-indigo-700 text-xs font-bold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-800 truncate">Jane Doe</p>
            <p className="text-xs text-slate-500 truncate">jane@nxd.io</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
