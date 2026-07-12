import koncer from '../assets/Budaya/koncer.jpg'
import nyadran from '../assets/Budaya/Nyadran.jpg'
import warok from '../assets/Budaya/warok.jpeg'
import panorama from '../assets/Budaya/sawah.jpeg'
import wayang from '../assets/Budaya/wayang.jpg'
import kali from '../assets/Budaya/sadranan-kali.png'
import makam from '../assets/Budaya/sadranan-makam.png'
import wangan from '../assets/Budaya/sadranan-wangan.png'
const WISATA = [
  { name: 'Panorama Sawah', type: 'Wisata Alam', desc: 'Pemandangan sawah yang indah terlihat langsung dari dusun, menjadi spot favorit untuk menikmati sunrise dan fotografi.', tags: ['Wisata Alam', 'Fotografi'], img: panorama },
  // { name: 'Kebun Kopi Lereng Sumbing', type: 'Wisata Alam', desc: 'Menyusuri perkebunan kopi di lereng Gunung Sumbing dengan pemandangan pegunungan yang memukau dan udara sejuk khas dataran tinggi.', tags: ['Wisata Alam', 'Agrowisata'], img: "Kebun Kopi" },
  { name: 'Tradisi Sadranan', type: 'Budaya', desc: 'Warisan budaya leluhur yang dilaksanakan untuk menyambut bulan suci Ramadan atau pada bulan Ruwah (kalender Jawa). Rangkaian utamanya meliputi ziarah kubur mendoakan leluhur, kirab budaya membawa hasil bumi, dan makan bersama.', tags: ['Budaya', 'Tradisi'], img: nyadran,
    prosesi: [
      { nama: 'Nyadran Wangang', ket: 'Saluran irigasi', desc: 'Syukur atas kelancaran pengairan sawah dan sumber kehidupan agraris warga.', img: wangan },
      { nama: 'Nyadran Punden', ket: 'Makam leluhur', desc: 'Penghormatan kepada para pendahulu dusun, diiringi doa bersama dan tabur bunga.', img: makam },
      { nama: 'Nyadran Kali', ket: 'Sumber air dusun', desc: 'Syukur atas ketersediaan air bersih dan permohonan agar mata air tetap lestari.', img: kali },
    ]
  },
  { name: 'Tarian Koncer', type: 'Budaya', desc: 'Pertunjukan tari tradisional yang diadakan secara rutin, memperkenalkan budaya lokal kepada pengunjung.', tags: ['Budaya', 'Kesenian'], img: koncer },
  { name: 'Warok', type: 'Budaya', desc: ' seni tari tradisional kerakyatan yang menggabungkan tari, musik, dan drama. Melambangkan kesatria pemberani, tarian ini menampilkan adegan pertunjukan yang terkadang diwarnai kondisi trance (kesurupan) yang diiringi irama gamelan', tags: ['Budaya', 'Kesenian'], img: warok },
  {name: 'Wayang', type: 'Budaya', desc: 'Pertunjukan wayang kulit tradisional yang menggabungkan cerita rakyat dengan seni tari dan musik.', tags: ['Kesenian', 'Budaya'], img: wayang}
]

export default function Wisata() {
  return (
    <section id="wisata" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Wisata &amp; Wisaya</p>
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
              {w.prosesi && (
                <div className="prosesi-grid">
                  {w.prosesi.map(p => (
                    <div className="prosesi-item" key={p.nama}>
                      <div className="prosesi-thumb">
                        {p.img ? <img src={p.img} alt={p.nama} loading="lazy" /> : `Foto ${p.nama}`}
                      </div>
                      <p className="prosesi-nama">{p.nama}</p>
                      <p className="prosesi-ket">{p.ket}</p>
                      {p.desc && <p className="prosesi-desc">{p.desc}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
