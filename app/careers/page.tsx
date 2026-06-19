"use client";

import { useState } from "react";
import careersData from "@/data/careers.json";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { CareerApplicationModal } from "@/components/site/career-application-modal";
import { SiteCta } from "@/components/site/site-cta";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openApplication = (title: string) => {
    setSelectedJob(title);
    setModalOpen(true);
  };

  return (
    <PageLayout>
      <PageHero
        tag="CAREERS"
        title="Build Software With A Disciplined Engineering Team"
        description="Join ITX Networks and work on meaningful software projects across web, mobile, cloud, and enterprise domains. We value craftsmanship, accountability, and continuous learning."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">OPEN_POSITIONS</span>
          <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
            Current Openings
          </h2>
          <div className="mt-10 border border-[#1e1e1e]">
            {careersData.map((job, index) => (
              <Stagger key={job.id} index={index}>
                <div className="border-b border-[#1e1e1e] last:border-b-0 p-6 lg:p-8 row-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="sys-tag text-[9px]">{job.department}</span>
                      <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
                        {job.location}
                      </span>
                      <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl text-[#f2ede6]">{job.title}</h3>
                    <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">{job.description}</p>
                    <ul className="mt-4 space-y-2">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="font-mono text-[11px] text-[#5a5a5a] flex items-start gap-2"
                        >
                          <span className="text-[#2196f3] mt-0.5">—</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => openApplication(job.title)}
                    className="shrink-0 bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#42a5f5] transition-colors font-semibold"
                  >
                    APPLY →
                  </button>
                </div>
                </div>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Don't See The Right Role?"
        description="Send us your profile and we will reach out when a suitable opportunity opens."
        primaryHref="/contact/"
        primaryLabel="CONTACT_US"
      />

      <CareerApplicationModal
        open={modalOpen}
        jobTitle={selectedJob || "Open Position"}
        onClose={() => setModalOpen(false)}
      />
    </PageLayout>
  );
}
