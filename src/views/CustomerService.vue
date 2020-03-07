<template>
  <v-app id="inspire">
    <v-app-bar
      color="#FFDEAD"
      app
      clipped-left
    >
      <v-toolbar-title style="font-weight: bold">Customer Service</v-toolbar-title>
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
          title: 'Pembuatan Transaksi',
          subItems: [
            {
              path: '/customerservice/produk',
              title: 'Transaksi Produk',
              icon: 'mdi-package-variant-closed'
            },
            {
              path: '/customerservice/layanan',
              title: 'Transaksi Layanan',
              icon: 'mdi-dog-service'
            }
          ]
        },
        {
          title: 'Konsumen dan Hewan',
          subItems: [
            {
              path: '/customerservice/konsumen',
              title: 'Konsumen',
              icon: 'mdi-human-handsup'
            },
            {
              path: '/customerservice/hewan',
              title: 'Hewan',
              icon: 'mdi-paw'
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
