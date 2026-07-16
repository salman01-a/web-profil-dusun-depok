import karangtaruna from '../assets/Kelompok/karangtaruna.webp'

const KELOMPOK = [
  { nama: 'Karang Taruna', peran: 'Kepemudaan', desc: 'Organisasi pemuda dusun yang menggerakkan kegiatan sosial, kesenian, dan pengembangan komunitas warga.', img: karangtaruna },
]

export default function Kelompok() {
  return (
    <section id="kelompok" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Komunitas</p>
          <h2 className="headline-md">Kelompok Masyarakat</h2>
          <p className="body-md">
            Kelompok kepemudaan yang menjadi penggerak kehidupan sosial Dusun Depok.
          </p>
        </div>
        <div className="product-grid">
          {KELOMPOK.map((k, i) => (
            <div className="card" key={i}>
              <div className="card-img">
                {k.img ? <img src={k.img} alt={k.nama} loading="lazy" /> : `Foto ${k.nama}`}
              </div>
              <div className="card-body">
                <h3>{k.nama}</h3>
                <p>{k.desc}</p>
                <div className="card-chips">
                  <span className="chip">{k.peran}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
