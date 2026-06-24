import { ExternalLink, X } from 'lucide-react'

const GITHUB_URL = 'https://github.com/Minsecrus/BusyBeaver'
const BUSY_BEAVER_URL = 'https://en.wikipedia.org/wiki/Busy_beaver'

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
            <h2
              id="info-dialog-title"
              className="text-2xl font-semibold tracking-normal text-slate-100"
            >
              BusyBeaver
            </h2>
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
          A one-screen control-room simulator for classic{' '}
          <a
            className="info-inline-link"
            href={BUSY_BEAVER_URL}
            target="_blank"
            rel="noreferrer"
          >
            Busy Beaver
          </a>{' '}
          Turing machines, with playback speeds from 1x to 1,000,000x.
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
