const FOOTER_NAV = [
  { title: 'Navigasi', links: [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Produk', href: '#produk' },
    { label: 'Wisata', href: '#wisata' },
  ]},
  { title: 'Informasi', links: [
    { label: 'Kegiatan', href: '#kegiatan' },
    { label: 'Kontak', href: '#kontak' },
    { label: 'Peta Lokasi', href: '#' },
  ]},
  { title: 'Tautan', links: [
    { label: 'Instagram', href: 'https://www.instagram.com/dusun_depok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'instagram-icon' },
  ]},
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-brand">Dusun Depok</span>
            <p>
              Desa Tlogowungu, Kecamatan Kaloran, Kabupaten Temanggung,
              Jawa Tengah.
            </p>
          </div>
          {FOOTER_NAV.map(col => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(link => (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {link.icon && (
                    <svg className="footer-icon" width="18" height="18" aria-hidden="true">
                      <use href={`/icons.svg#${link.icon}`} />
                    </svg>
                  )}
                  {link.label}  
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Dusun Depok. Hak cipta dilindungi.</p>
          <p>Dibuat dengan dedikasi oleh Tim KKN.84.379</p>
        </div>
      </div>
    </footer>
  )
}
