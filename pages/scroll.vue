<template>
    <div>
        <v-card flat color="transparent">
            <v-subheader>Min and max default slider</v-subheader>

            <v-card-text>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider v-model="slider" class="align-center" :max="max = 10000" hide-details>
                            <template v-slot:append>
                                <v-text-field v-model="slider" class="mt-0 pt-0" hide-details single-line type="number"
                                    style="width: 60px"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-responsive max-width="400" class="mx-auto mb-4">
            <v-text-field v-model="benched" type="number" label="Total Benched" min="0" max="10"></v-text-field>
        </v-responsive>

        <v-card elevation="16" max-width="400" class="mx-auto">
            <v-virtual-scroll :bench="benched" :items="items" height="300" item-height="64">
                <template v-slot:default="{ item }">
                    <v-list-item :key="item">
                        <v-list-item-action>
                            <v-btn fab small depressed color="primary">
                                {{ item }}
                            </v-btn>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                User Database Record <strong>ID {{ item }}</strong>
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon small>
                                mdi-open-in-new
                            </v-icon>
                        </v-list-item-action>
                    </v-list-item>

                    <v-divider></v-divider>
                </template>
            </v-virtual-scroll>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        benched: 0,
        slider: 1
    }),
    computed: {
        items() {
            return Array.from({ length: this.length }, (k, v) => v + 1)
        },
        length() {
            return this.slider
        },
    },
}
</script>