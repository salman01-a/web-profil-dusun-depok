import GulaAren from '../assets/Produk/gula_aren.webp'

const PRODUCTS = [
  // { name: 'Kopi Robusta', desc: 'Kopi robusta pilihan dari lereng Gunung Sumbing, diolah secara tradisional dengan cita rasa khas Temanggung.', category: 'Pangan', imgLabel: 'Foto Kopi Robusta' },
  // { name: 'Tembakau Srinthil', desc: 'Tembakau kualitas premium yang menjadi kebanggaan petani Temanggung, dikenal hingga mancanegara.', category: 'Perkebunan', imgLabel: 'Foto Tembakau' },
  { name: 'Gula Aren', desc: 'Gula aren organik yang diproduksi dari pohon aren di sekitar dusun, manis alami tanpa bahan kimia.', category: 'Pangan', imgLabel: <img src={GulaAren} alt="Gula Aren" /> },
]

export default function Produk() {
  return (
    <section id="produk" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Produk Lokal</p>
          <h2 className="headline-md">Hasil Karya Masyarakat Dusun</h2>
          <p className="body-md">
            Berbagai produk unggulan yang dihasilkan langsung oleh warga Dusun
            Depok dengan kualitas terbaik dan penuh kearifan lokal.
          </p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p, i) => (
            <div className="card" key={i}>
              <div className="card-img">{p.imgLabel}</div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="card-chips">
                  <span className="chip">{p.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
