const WISATA = [
  { name: 'Kebun Kopi Lereng Sumbing', type: 'Wisata Alam', desc: 'Menyusuri perkebunan kopi di lereng Gunung Sumbing dengan pemandangan pegunungan yang memukau dan udara sejuk khas dataran tinggi.', tags: ['Wisata Alam', 'Agrowisata'], imgLabel: 'Foto Kebun Kopi' },
  { name: 'Tradisi Sadranan', type: 'Budaya', desc: 'Upacara adat tahunan warga dusun sebagai bentuk rasa syukur kepada leluhur, diiringi doa bersama, kenduri, dan pertunjukan kesenian tradisional.', tags: ['Budaya', 'Tradisi'], imgLabel: 'Foto Sadranan' },
  { name: 'Panorama Gunung Sumbing', type: 'Wisata Alam', desc: 'Pemandangan Gunung Sumbing yang megah terlihat langsung dari dusun, menjadi spot favorit untuk menikmati sunrise dan fotografi.', tags: ['Wisata Alam', 'Fotografi'], imgLabel: 'Foto Gunung Sumbing' },
]

export default function Wisata() {
  return (
    <section id="wisata" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Destinasi Wisata</p>
          <h2 className="headline-md">Jelajahi Keindahan Dusun Depok</h2>
          <p className="body-md">
            Nikmati pesona alam dan budaya yang ditawarkan oleh dusun kami.
          </p>
        </div>
        {WISATA.map((w, i) => (
          <div className={`wisata-item${i % 2 !== 0 ? ' reverse' : ''}`} key={i}>
            <div className="wisata-img">{w.imgLabel}</div>
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
