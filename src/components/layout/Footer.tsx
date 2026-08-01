import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FOOTER_EXPLORE, FOOTER_OTHER, SITE } from '@/constants/site'

export function Footer() {
  return (
    <footer id="site-footer" className="relative border-t border-paper/10 bg-brand text-paper">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr] lg:gap-14 lg:py-14">
        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
            Explore
          </h2>
          <ul className="space-y-3 text-sm text-paper/75">
            {FOOTER_EXPLORE.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-brand-soft">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
            Other
          </h2>
          <ul className="space-y-3 text-sm text-paper/75">
            {FOOTER_OTHER.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-brand-soft">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
            Visit
          </h2>
          <ul className="space-y-4 text-sm text-paper/75">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-soft" aria-hidden="true" />
              <span className="leading-relaxed">{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-brand-soft" aria-hidden="true" />
              <a href={`tel:${SITE.phone}`} className="hover:text-brand-soft">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-brand-soft" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-soft">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 pb-8 md:pb-6">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="tracking-wide">Pandeypur, Varanasi · Explore · Discover · Live</p>
        </div>
      </div>
    </footer>
  )
}
