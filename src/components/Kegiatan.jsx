import SekolahMinggu from '../assets/Rutinitas/sklh_minggu.JPG'
import Selapanan from '../assets/Rutinitas/Selapanan.JPG'
import LatihanKoncer from '../assets/Rutinitas/koncer.jpg'
import KerjaBakti from '../assets/Rutinitas/KerjaBakti.JPG'

const KEGIATAN = [
  { title: 'Kerja Bakti Dusun', jadwal: 'Setiap Jumat', category: 'Sosial', desc: 'Gotong royong membersihkan lingkungan dusun, perbaikan jalan, dan perawatan fasilitas umum bersama seluruh warga.', imgLabel: <img src={KerjaBakti} alt="Kerja Bakti" /> },
  { title: 'Latihan Koncer', jadwal: 'Malam Jumat & Minggu', category: 'Kesenian', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', imgLabel: <img src={LatihanKoncer} alt="Latihan Koncer" /> },
  { title: 'Sekolah Minggu', jadwal: 'Setiap Minggu', category: 'Pendidikan', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', imgLabel: <img src={SekolahMinggu} alt="Sekolah Minggu" /> },
  {title: 'Selapanan', jadwal: 'Malam Selasa Kliwon', category: 'Sosial', desc: 'Di wilayah Kaloran dan Temanggung pada umumnya, tradisi selapanan atau pertemuan rutinan yang diadakan khusus setiap Selasa Kliwon (atau malam Selasa Kliwon) biasanya berupa Jagongan Selapanan, Mujahadah (Doa Bersama), atau Kliwonan.', imgLabel: <img src={Selapanan} alt="Selapanan" /> },
  // { title: 'Karang Taruna', jadwal: 'Rutin Bulanan', category: 'Kepemudaan', desc: 'Organisasi pemuda dusun yang menggerakkan kegiatan sosial, kesenian, dan pengembangan komunitas warga.', imgLabel: 'Foto Karang Taruna' }
]

export default function Kegiatan() {
  return (
    <section id="kegiatan" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="label-caps">Kegiatan Rutin</p>
          <h2 className="headline-md">Rutinitas Masyarakat Dusun</h2>
          <p className="body-md">
            Berbagai kegiatan yang rutin dilaksanakan warga Dusun Depok
            sebagai wujud kebersamaan dan gotong royong.
          </p>
        </div>
        <div className="news-grid">
          {KEGIATAN.map((k, i) => (
            <div className="card" key={i}>
              <div className="card-img">{k.imgLabel}</div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="chip chip-date">{k.jadwal}</span>
                  <span className="chip">{k.category}</span>
                </div>
                <h3>{k.title}</h3>
                <p>{k.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
