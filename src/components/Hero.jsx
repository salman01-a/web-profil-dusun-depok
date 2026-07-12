import imgViewDepok from "../assets/background.jpg";

export default function Hero() {
  return (
    <section id="beranda" className="hero" style={{ backgroundImage: `url(${imgViewDepok})` }
    }>
      <div className="hero-content">
        <p className="label-caps">Desa Tlogowungu, Kec. Kaloran, Temanggung</p>
        <h1 className="display-lg">Selamat Datang di Dusun Depok</h1>
        <p className="body-lg">
           Menyatu dengan alam perbukitan Kaloran, tumbuh bersama tradisi.
  Temukan pesona sawah terasering, udara sejuk pegunungan, dan
  kehangatan masyarakat Dusun Depok.
        </p>
        <a href="#tentang" className="btn btn-primary">Jelajahi Dusun Kami</a>
      </div>
    </section>
  )
}
