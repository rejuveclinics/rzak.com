import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full px-8 py-20 max-w-7xl mx-auto text-sm">
        <div>
          <span className="text-2xl font-black block mb-6 tracking-tighter">RZAK</span>
          <p className="text-on-primary-container leading-relaxed max-w-xs">
            Sovereign oversight and operational excellence for high-stakes capital.
          </p>
        </div>
        <div>
          <h4 className="text-label-md text-secondary-fixed mb-8">Services</h4>
          <ul className="space-y-4">
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Operational Oversight</span></li>
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Vendor Management</span></li>
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Contract Review</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-label-md text-secondary-fixed mb-8">Company</h4>
          <ul className="space-y-4">
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Privacy Policy</span></li>
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Terms of Service</span></li>
            <li><span className="text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Regulatory Oversight</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-label-md text-secondary-fixed mb-8">Contact</h4>
          <a href="mailto:inquiries@rzak.com" className="text-on-primary-container hover:text-secondary-fixed transition-colors block mb-6">
            inquiries@rzak.com
          </a>
          <div className="flex gap-3 items-center">
            <span className="material-symbols-outlined text-secondary-fixed text-base">lock</span>
            <span className="text-xs text-on-primary-container uppercase tracking-widest">Encrypted Communication</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-primary-container">
          &copy; 2024 RZAK Financial Operations. All rights reserved. Discretion assured.
        </p>
        <div className="flex gap-6">
          <Link href="/contact" className="text-xs text-on-primary-container hover:text-secondary-fixed transition-colors">Cookie Settings</Link>
          <span className="text-xs text-on-primary-container hover:text-secondary-fixed transition-colors cursor-pointer">Security</span>
        </div>
      </div>
    </footer>
  );
}
