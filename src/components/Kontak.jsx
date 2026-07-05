export default function Kontak() {
  return (
    <section id="kontak" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="label-caps">Hubungi Kami</p>
            <h2 className="headline-md">Ada Pertanyaan?</h2>
            <p className="body-md">
              Jangan ragu untuk menghubungi kami. Kami siap membantu Anda
              dengan informasi seputar Dusun Depok.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-item">
                <div className="contact-icon">⌂</div>
                <div>
                  <strong>Alamat</strong>
                  <p>Dusun Depok, Desa Tlogowungu, Kec. Kaloran, Temanggung, Jawa Tengah</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">✉</div>
                <div>
                  <strong>Email</strong>
                  <p>info@dusundepok.id</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">☏</div>
                <div>
                  <strong>Telepon</strong>
                  <p>(0274) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input id="name" className="input" type="text" placeholder="Masukkan nama Anda" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="Masukkan email Anda" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" className="input" placeholder="Tulis pesan Anda..." />
            </div>
            <button type="submit" className="btn btn-primary">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  )
}
