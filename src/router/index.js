import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')

const Owner = () => import('../views/Owner.vue')
const Pegawai = () => import('../components/Owner/Pegawai.vue')
const Produk = () => import('../components/Owner/Produk.vue')
const Layanan = () => import('../components/Owner/Layanan.vue')
const Konsumen = () => import('../components/Owner/Konsumen.vue')
const Hewan = () => import('../components/Owner/Hewan.vue')
const UkuranHewan = () => import('../components/Owner/Hewan/UkuranHewan.vue')
const JenisHewan = () => import('../components/Owner/Hewan/JenisHewan.vue')
const Supplier = () => import('../components/Owner/Supplier.vue')
const PemesananProduk = () => import('../components/Owner/PemesananProduk.vue')
const LaporanProduk = () => import('../components/Owner/Laporan/LaporanProduk.vue')
const LaporanLayanan = () => import('../components/Owner/Laporan/LaporanLayanan.vue')

const CustomerService = () => import('../views/CustomerService.vue')
const ProdukCS = () => import('../components/CustomerService/TransaksiProduk.vue')
const LayananCS = () => import('../components/CustomerService/TransaksiLayanan.vue')
const KonsumenCS = () => import('../components/CustomerService/Konsumen.vue')
const HewanCS = () => import('../components/CustomerService/Hewan.vue')

const Kasir = () => import('../views/Kasir.vue')
const ProdukK = () => import('../components/Kasir/TransaksiProduk.vue')
const LayananK = () => import('../components/Kasir/TransaksiLayanan.vue')
const KonsumenK = () => import('../components/Kasir/Konsumen.vue')
const HewanK = () => import('../components/Kasir/Hewan.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/owner',
    component: Owner,
    children: [
      {
        path: '/owner/pegawai',
        component: Pegawai
      },
      {
        path: '/owner/produk',
        component: Produk
      },
      {
        path: '/owner/layanan',
        component: Layanan
      },
      {
        path: '/owner/konsumen',
        component: Konsumen
      },
      {
        path: '/owner/hewan',
        component: Hewan
      },
      {
        path: '/owner/hewan/ukuran',
        component: UkuranHewan
      },
      {
        path: '/owner/hewan/jenis',
        component: JenisHewan
      },
      {
        path: '/owner/supplier',
        component: Supplier
      },
      {
        path: '/owner/pemesananproduk',
        component: PemesananProduk
      },
      {
        path: '/owner/laporanproduk',
        component: LaporanProduk
      },
      {
        path: '/owner/laporanlayanan',
        component: LaporanLayanan
      }
    ]
  },
  {
    path: '/customerservice',
    component: CustomerService,
    children: [
      {
        path: '/customerservice/konsumen',
        component: KonsumenCS
      },
      {
        path: '/customerservice/hewan',
        component: HewanCS
      },
      {
        path: '/customerservice/produk',
        component: ProdukCS
      },
      {
        path: '/customerservice/layanan',
        component: LayananCS
      }
    ]
  },
  {
    path: '/kasir',
    component: Kasir,
    children: [
      {
        path: '/kasir/konsumen',
        component: KonsumenK
      },
      {
        path: '/kasir/hewan',
        component: HewanK
      },
      {
        path: '/kasir/produk',
        component: ProdukK
      },
      {
        path: '/Kasir/layanan',
        component: LayananK
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
