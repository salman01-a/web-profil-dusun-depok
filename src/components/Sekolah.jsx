import paud from '../assets/paud.webp'

export default function Sekolah() {
  return (
    <section id="sekolah" className="section section-alt">
      <div className="container">
        <div className="about-grid sekolah-grid">
          <div className="about-text">
            <p className="label-caps">Pendidikan</p>
            <h2 className="headline-md">Paud Kusuma Indonesia</h2>
            <p className="body-md">
              PAUD Kusuma Indonesia merupakan lembaga pendidikan anak usia dini di bawah
              Yayasan Kusuma Indonesia. Cabang yang berlokasi di Dusun Depok ini dikenal
              sebagai salah satu cabang paling berkembang dari yayasan tersebut, baik dari segi
              jumlah peserta didik maupun kualitas pembelajaran.
            </p>
            <p className="body-md">
              Dengan tenaga pengajar yang berdedikasi dan lingkungan belajar yang mendukung,
              PAUD Kusuma Indonesia cabang Dusun Depok berkomitmen membentuk generasi penerus
              yang cerdas, kreatif, dan berkarakter — sekaligus menanamkan nilai-nilai kearifan
              lokal kepada anak-anak sejak usia dini.
            </p>
          </div>
          <div className="about-img">
            <img src={paud} alt="Paud Kusuma Indonesia" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
