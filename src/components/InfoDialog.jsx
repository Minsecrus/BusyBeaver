import { ExternalLink, X } from 'lucide-react'

const GITHUB_URL = 'https://github.com/Minsecrus/BusyBeaver'

export function InfoDialog({ onClose }) {
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="info-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Project
            </p>
            <a
              id="info-dialog-title"
              className="info-title-link mt-2 inline-flex text-2xl font-semibold tracking-normal text-slate-100"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              BusyBeaver
            </a>
          </div>
          <button
            type="button"
            className="icon-button"
            aria-label="Close info"
            title="Close"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-300">
          A one-screen control-room simulator for classic Busy Beaver Turing
          machines, with playback speeds from 1x to 1,000,000x.
        </p>

        <a
          className="info-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>{GITHUB_URL}</span>
          <ExternalLink aria-hidden="true" />
        </a>
      </section>
    </div>
  )
}
