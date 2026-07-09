import viewDepok from "../assets/view_depok.webp";

export default function Tentang() {
  return (
    <section id="tentang" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-img">
            <img src={viewDepok} alt="Foto Dusun Depok"/>
          </div>
          <div className="about-text">
            <p className="label-caps">Tentang Kami</p>
            <h2 className="headline-md">Sejarah &amp; Identitas Dusun Depok</h2>
            <p className="body-md">
              Dusun Depok terletak di Desa Tlogowungu, Kecamatan Kaloran,
              Kabupaten Temanggung, Jawa Tengah. Berada di lereng Gunung
              Sumbing dengan ketinggian yang memberikan udara sejuk dan tanah
              subur, dusun ini dikenal sebagai penghasil kopi dan tembakau
              berkualitas.
            </p>
            <p className="body-md">
              Masyarakat Dusun Depok hidup dengan semangat gotong royong,
              memadukan kearifan lokal Jawa dengan kehidupan agraris di
              dataran tinggi Temanggung.
            </p>
            <a href="#wisata" className="btn btn-secondary">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
    </section>
  )
}
