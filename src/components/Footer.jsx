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
    { label: 'Pemkab Temanggung', href: '#' },
    { label: 'Kec. Kaloran', href: '#' },
    { label: 'Desa Tlogowungu', href: '#' },
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
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Dusun Depok. Hak cipta dilindungi.</p>
          <p>Dibuat dengan dedikasi oleh Tim KKN</p>
        </div>
      </div>
    </footer>
  )
}
