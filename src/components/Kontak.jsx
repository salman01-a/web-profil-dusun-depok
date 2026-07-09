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
      </div>
    </section>
  )
}
