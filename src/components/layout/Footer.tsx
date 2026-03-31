import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full px-8 py-16 max-w-7xl mx-auto text-sm">
        <div>
          <span className="text-xl font-black text-zinc-900 block mb-6">RZAK</span>
          <p className="text-zinc-500 leading-relaxed">
            Sovereign oversight and operational excellence for high-stakes capital.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Services</h4>
          <ul className="space-y-4">
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Operational Oversight</span></li>
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Vendor Management</span></li>
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Contract Review</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
          <ul className="space-y-4">
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Privacy Policy</span></li>
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Terms of Service</span></li>
            <li><span className="text-zinc-500 hover:text-emerald-700 transition-all cursor-pointer">Regulatory Oversight</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Contact</h4>
          <p className="text-zinc-500 mb-4">inquiries@rzak.com</p>
          <div className="flex gap-4 items-center">
            <span className="material-symbols-outlined text-zinc-500">lock</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Encrypted Communication</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-stone-200 text-center md:text-left">
        <p className="text-xs text-zinc-500">
          &copy; 2024 RZAK Financial Operations. All rights reserved. Discretion assured.
        </p>
      </div>
    </footer>
  );
}
