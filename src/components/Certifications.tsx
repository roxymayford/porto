import * as React from "react";

export function Certifications() {
  return (
    <aside className="lg:col-span-4 bg-brand-lime p-6 sm:p-10 flex flex-col justify-between" data-purpose="certifications-sidebar" id="certifications">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8">Certifications</h2>
        {/* Stack of Certifications Cards */}
        <div className="space-y-4">
          {/* Cert 1 */}
          <div className="btn-brutal bg-[#E9E8E3] border-2 border-black p-6 shadow-brutal">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1">
                  Amazon Web Services
                </span>
                <h3 className="font-black text-xl text-black leading-tight">Cert 1</h3>
                <p className="font-mono text-xs text-gray-700 mt-1">Solutions Architect Associate</p>
              </div>
              <div className="w-8 h-8 bg-brand-lime border-2 border-black flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
            </div>
          </div>

          {/* Cert 2 */}
          <div className="btn-brutal bg-[#E9E8E3] border-2 border-black p-6 shadow-brutal">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1">
                  Meta Front-End
                </span>
                <h3 className="font-black text-xl text-black leading-tight">Cert 2</h3>
                <p className="font-mono text-xs text-gray-700 mt-1">Professional Developer</p>
              </div>
              <div className="w-8 h-8 bg-brand-pink border-2 border-black flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
            </div>
          </div>

          {/* Cert 3 */}
          <div className="btn-brutal bg-[#E9E8E3] border-2 border-black p-6 shadow-brutal">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1">
                  Google Cloud
                </span>
                <h3 className="font-black text-xl text-black leading-tight">Cert 3</h3>
                <p className="font-mono text-xs text-gray-700 mt-1">Cloud Engineer Associate</p>
              </div>
              <div className="w-8 h-8 bg-brand-purple text-white border-2 border-black flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom View All Link */}
      <div className="mt-8">
        <a className="btn-brutal w-full block text-center py-3 bg-white border-2 border-black font-mono font-bold text-xs uppercase tracking-wider shadow-brutal text-black" href="#">
          <span>View All Certifications →</span>
        </a>
      </div>
    </aside>
  );
}
