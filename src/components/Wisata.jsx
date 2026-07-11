import koncer from '../assets/Budaya/koncer.jpg'
import nyadran from '../assets/Budaya/Nyadran.jpg'
import warok from '../assets/Budaya/warok.jpeg'
import panorama from '../assets/Budaya/sawah.jpeg'
const WISATA = [
  // { name: 'Kebun Kopi Lereng Sumbing', type: 'Wisata Alam', desc: 'Menyusuri perkebunan kopi di lereng Gunung Sumbing dengan pemandangan pegunungan yang memukau dan udara sejuk khas dataran tinggi.', tags: ['Wisata Alam', 'Agrowisata'], img: "Kebun Kopi" },
  { name: 'Tradisi Sadranan', type: 'Budaya', desc: 'Upacara adat tahunan warga dusun sebagai bentuk rasa syukur kepada leluhur, diiringi doa bersama, kenduri, dan pertunjukan kesenian tradisional.', tags: ['Budaya', 'Tradisi'], img: nyadran },
  { name: 'Panorama Sawah', type: 'Wisata Alam', desc: 'Pemandangan sawah yang indah terlihat langsung dari dusun, menjadi spot favorit untuk menikmati sunrise dan fotografi.', tags: ['Wisata Alam', 'Fotografi'], img: panorama },
  { name: 'Tarian Koncer', type: 'Budaya', desc: 'Pertunjukan tari tradisional yang diadakan secara rutin, memperkenalkan budaya lokal kepada pengunjung.', tags: ['Budaya', 'Kesenian'], img: koncer },
  { name: 'Warok', type: 'Budaya', desc: ' seni tari tradisional kerakyatan yang menggabungkan tari, musik, dan drama. Melambangkan kesatria pemberani, tarian ini menampilkan adegan pertunjukan yang terkadang diwarnai kondisi trance (kesurupan) yang diiringi irama gamelan', tags: ['Budaya', 'Kesenian'], img: warok }
]

export default function Wisata() {
  return (
    <section id="wisata" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Destinasi Wisata &amp; Budaya</p>
          <h2 className="headline-md">Jelajahi Keindahan Dusun Depok</h2>
          <p className="body-md">
            Nikmati pesona alam, tradisi, dan kesenian yang ditawarkan oleh dusun kami.
          </p>
        </div>
        {WISATA.map((w, i) => (
          <div className={`wisata-item${i % 2 !== 0 ? ' reverse' : ''}`} key={i}>
            <div className="wisata-img">
              <img src={w.img} alt={w.name} loading="lazy" />
            </div>
            <div className="wisata-text">
              <p className="label-caps">{w.type}</p>
              <h3 className="headline-sm">{w.name}</h3>
              <p className="body-md">{w.desc}</p>
              <div className="wisata-chips">
                {w.tags.map(tag => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
