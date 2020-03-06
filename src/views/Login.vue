<template>
  <v-app id="inspire" style="background: #F4A460;">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card
              class="ma-auto"
              max-width="500"
              :elevation="0"
              color="#F4A460"
              light
              rounded
              flat
            >
              <v-card-title class="md">
                <v-img
                  size="300px"
                  class="mx-auto mt-n7"
                  src="../assets/kouvee_logo.png"
                >
                </v-img>
              </v-card-title>
              <v-card-subtitle>
                <v-card
                  light
                  :elevation="0"
                  color="#FFDEAD"
                >
                  <v-card-text>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="ID Pengguna"
                      placeholder="ID Pengguna"
                      solo
                      outlined
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      label="Kata Sandi"
                      placeholder="Kata Sandi"
                      solo
                      outlined
                      required
                    ></v-text-field>
                    <v-btn
                      class="mt-5"
                      color="#D2691E"
                      large
                      block
                      dark
                    >
                      MASUK
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),

  created () {
    this.$vuetify.background = '../assets/background/login'
  }
}
</script>
