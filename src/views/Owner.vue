<template>
  <v-app id="inspire">
    <v-app-bar
      color="#FFDEAD"
      app
      clipped-left
    >
      <v-toolbar-title style="font-weight: bold">Owner</v-toolbar-title>
    </v-app-bar>
    <v-sheet
      fluid
      class="fill-height fill-width"
      >
      <v-navigation-drawer
        permanent
        clipped
        app
        color="#F4A460"
        class="mt-auto"
      >
        <v-list dense>
          <v-list-item-group>
            <v-list
              v-for="item in items"
              :key="item.title"
            >
              <v-divider class="mt-n3"></v-divider>
              <v-subheader style="font-weight: bold">{{ item.title }}</v-subheader>
              <v-list-item
                v-for="subitem in item.subItems"
                :key="subitem.title"
                @click="moveMenu(subitem)"
              >
                <v-list-item-icon>
                  <v-icon>{{ subitem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="subitem.title"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-list-item-group>
        </v-list>
        <v-divider/>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn
              block
              dark
              color="#D2691E"
            >
              Keluar
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-content>
        <router-view/>
      </v-content>

    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        {
          title: 'Pengelolaan Akun',
          subItems: [
            {
              path: '/owner/pegawai',
              title: 'Pegawai',
              icon: 'mdi-account-box-multiple-outline'
            }
          ]
        },
        {
          title: 'Produk dan Layanan',
          subItems: [
            {
              path: '/owner/produk',
              title: 'Produk',
              icon: 'mdi-package-variant-closed'
            },
            {
              path: '/owner/layanan',
              title: 'Layanan',
              icon: 'mdi-dog-service'
            }
          ]
        },
        {
          title: 'Konsumen dan Hewan',
          subItems: [
            {
              path: '/owner/konsumen',
              title: 'Konsumen',
              icon: 'mdi-human-handsup'
            },
            {
              path: '/owner/hewan',
              title: 'Hewan',
              icon: 'mdi-paw'
            },
            {
              path: '/owner/hewan/ukuran',
              title: 'Ukuran Hewan',
              icon: 'mdi-format-size'
            },
            {
              path: '/owner/hewan/jenis',
              title: 'Jenis Hewan',
              icon: 'mdi-dog-side'
            }
          ]
        },
        {
          title: 'Pengadaan Produk',
          subItems: [
            {
              path: '/owner/supplier',
              title: 'Supplier',
              icon: 'mdi-truck-fast'
            },
            {
              path: '/owner/pemesananproduk',
              title: 'Pemesanan Produk',
              icon: 'mdi-cart'
            }
          ]
        },
        {
          title: 'Laporan',
          subItems: [
            {
              path: '/owner/laporanproduk',
              title: 'Laporan Produk',
              icon: 'mdi-file-chart'
            },
            {
              path: '/owner/laporanlayanan',
              title: 'Laporan Layanan',
              icon: 'mdi-file-check'
            }
          ]
        }
      ]
    }
  },
  methods: {
    moveMenu (item) {
      this.$router.push(item.path)
    }
  }
}
</script>
