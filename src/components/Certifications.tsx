import * as React from "react";
interface Certificate { issuer: string; name: string; credentialId: string; year: string; accentColor: string; num: string }
const certsList: Certificate[] = [
 { issuer: "Amazon Web Services", name: "Solutions Architect Associate", credentialId: "AWS-SAA-849102", year: "2024", accentColor: "text-[#FF4F00] border-[#FF4F00]", num: "01" },
 { issuer: "Meta Certified", name: "Front-End Developer Professional", credentialId: "META-FED-921475", year: "2023", accentColor: "text-[#D5006D] border-[#D5006D]", num: "02" },
 { issuer: "Google Cloud", name: "Associate Cloud Engineer", credentialId: "GCP-ACE-441098", year: "2023", accentColor: "text-[#5D3FD3] border-[#5D3FD3]", num: "03" },
 { issuer: "Linux Foundation", name: "Certified Kubernetes App Developer", credentialId: "CKAD-771234", year: "2024", accentColor: "text-[#00BFFF] border-[#00BFFF]", num: "04" },
];
export function Certifications() {
 return <aside className="bg-[#0a0d14] px-6 py-16 text-[#e9edf3] sm:px-10" data-purpose="certifications-sidebar" id="certifications"><div className="mx-auto max-w-6xl"><h2 className="mb-8 text-4xl font-extrabold tracking-[-0.035em]">Certifications</h2><div className="space-y-6">{certsList.map(cert => <article key={cert.num} className="bg-[#131824] p-5 sm:p-6"><p className="text-lg font-medium">{cert.issuer} <span className="text-[#a4adbc]">· {cert.year}</span></p><h3 className="text-xl font-semibold">{cert.name}</h3><p className="mt-2 text-base text-[#a4adbc]">ID: {cert.credentialId}</p></article>)}</div><a className="mt-8 inline-flex min-h-11 items-center bg-[#5a9bfc] px-5 text-base font-medium text-[#0a0d14]" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Verify All Credentials →</a></div></aside>;
}
