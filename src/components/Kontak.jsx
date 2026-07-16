import petaMataAir from '../assets/depok tlogowungu.webp'

const AGAMA = [
  { nama: 'Islam', persen: 49, warna: 'var(--secondary)' },
  { nama: 'Buddha', persen: 49, warna: 'var(--accent-orange)' },
  { nama: 'Kristen', persen: 2, warna: 'var(--primary-container)' },
]

export default function Kontak() {
  return (
    <section id="kontak" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Lokasi</p>
          <h2 className="headline-md">Temukan Kami</h2>
          <p className="body-md">Dusun Depok, Desa Tlogowungu, Kec. Kaloran, Temanggung, Jawa Tengah</p>
        </div>
        <div className="lokasi-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d110.2542774!3d-7.268213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707f1fff7b2afb%3A0xc5ed76ae954e8600!2sDepok%2C+Tlogowungu%2C+Kec.+Kaloran%2C+Kabupaten+Temanggung%2C+Jawa+Tengah!5e0!3m2!1sid!2sid!4v1"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 'var(--rounded-lg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Dusun Depok"
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <a href="https://maps.app.goo.gl/RbbvJHYE7Q6Dudhu8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Buka di Google Maps</a>
        </div>

        <div className="demografi">
          <p className="label-caps">Geografi</p>
          <h3 className="headline-sm">Peta Mata Air &amp; Pemukiman</h3>
          <p className="body-md">
            Pemetaan lokasi mata air dan area pemukiman Dusun Depok hasil survei
            Program Studi Teknik Geologi UPN Veteran Yogyakarta.
          </p>
          <div className="peta-img">
            <img src={petaMataAir} alt="Peta Mata Air dan Pemukiman Dusun Depok" loading="lazy" />
          </div>
          <div className="survey-ringkasan">
            <h4 className="headline-sm">Hasil Survei Kualitas Mata Air</h4>
            <p className="body-md">
              Berdasarkan survei yang dilakukan oleh MahasiswaProgram Studi Teknik Geologi
              UPN Veteran Yogyakarta, terdapat dua titik mata air di Dusun Depok
              dengan kualitas air yang baik dan layak konsumsi.
            </p>
            <div className="survey-grid">
              <div className="survey-card">
                <h5>Mata Air 1</h5>
                <table className="survey-table">
                  <tbody>
                    <tr><td>pH</td><td>7,15</td></tr>
                    <tr><td>DHL</td><td>436 μS/cm</td></tr>
                    <tr><td>Suhu</td><td>25,8°C</td></tr>
                    <tr><td>TDS</td><td>218 ppm</td></tr>
                    <tr><td>Salinitas</td><td>0,02%</td></tr>
                    <tr><td>Debit</td><td>1,6 L/s</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="survey-card">
                <h5>Mata Air 2</h5>
                <table className="survey-table">
                  <tbody>
                    <tr><td>pH</td><td>7,30</td></tr>
                    <tr><td>DHL</td><td>436 μS/cm</td></tr>
                    <tr><td>Suhu</td><td>24°C</td></tr>
                    <tr><td>TDS</td><td>201 ppm</td></tr>
                    <tr><td>Salinitas</td><td>0,02%</td></tr>
                    <tr><td>Debit</td><td>3,8 L/s</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="body-md survey-note">
              Berdasarkan Peraturan Menteri Kesehatan No. 492/MENKES/PER/IV/2010
              tentang Persyaratan Kualitas Air Minum, kedua mata air memenuhi
              standar baku mutu: pH dalam rentang 6,5–8,5 (Mata Air 1: 7,15; Mata Air 2: 7,30),
              TDS jauh di bawah ambang batas maksimum 500 mg/L (218 dan 201 ppm),
              serta suhu sesuai standar ±3°C dari suhu udara sekitar.
              Kedua sumber air dinyatakan layak sebagai air bersih bagi kebutuhan
              sehari-hari warga Dusun Depok.
            </p>
          </div>
        </div>

        <div className="demografi">
          <p className="label-caps">Demografi</p>
          <h3 className="headline-sm">Keberagaman Agama</h3>
          <p className="body-md">
            Masyarakat Dusun Depok hidup rukun berdampingan dalam keberagaman keyakinan.
          </p>
          <div className="donut-grid">
            {AGAMA.map(a => (
              <div className="donut-item" key={a.nama}>
                <div
                  className="donut"
                  style={{ background: `conic-gradient(${a.warna} ${a.persen * 3.6}deg, var(--surface-container-high) 0)` }}
                >
                  <div className="donut-hole">
                    <span className="donut-value">{a.persen}%</span>
                  </div>
                </div>
                <p className="donut-label">{a.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
