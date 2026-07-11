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
              Dusun Depok terletak di Desa Tlogowungu, Kecamatan Kaloran, Kabupaten Temanggung, Jawa Tengah. 
              Berada di kawasan perbukitan Kaloran dengan ketinggian rata-rata sekitar 715 mdpl, dusun ini memiliki udara sejuk dan tanah yang subur. 
              Seperti sebagian besar wilayah Kaloran, warga dusun menggantungkan hidup dari pertanian.</p>
            <p className="body-md">
              Ciri khas Dusun Depok adalah panorama sawah terasering dengan sistem irigasi tradisional, 
              serta tradisi budaya yang masih hidup hingga kini seperti tradisi Nyadran sebagai wujud syukur atas hasil bumi, 
              dan kesenian Warok yang diiringi gamelan. Masyarakat Dusun Depok hidup dengan semangat gotong royong, 
              memadukan kearifan lokal Jawa dengan kehidupan agraris di dataran tinggi Temanggung.
            </p>
            <a href="#wisata" className="btn btn-secondary">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
    </section>
  )
}
