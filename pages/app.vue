<template>
    <div>
        <v-text-field v-model="interval" label="interval"></v-text-field>
        <input type="text">
        <v-btn @click="a">
            DownloadToLocal
        </v-btn>
        <v-btn @click="b">
            Compression
        </v-btn>
        <v-btn @click="c">
            Uploader
        </v-btn>
        <v-btn @click="d">
            DownloadTheCoud
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            interval: '2022-06-03T15:00:00.000Z/2022-06-10T15:00:00.000Z'
        }
    },
    methods: {
        a() {
            axios.get('http://localhost:3000/api/dtl', {
                params: {
                    interval: this.interval
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        b() {
            return fetch('http://localhost:3000/api/comp', { method: 'GET' })
                .then(res => res.json())
                .then(res => {
                    return {
                        title: res.message
                    }
                })
        },
        c() {
            return fetch('http://localhost:3000/api/ul', { method: 'GET' })
                .then(res => res.json())
                .then(res => {
                    return {
                        title: res.message
                    }
                })
        },
        d() {
            return fetch('http://localhost:3000/api/dtc', { method: 'GET' })
                .then(res => res.json())
                .then(res => {
                    return {
                        title: res.message
                    }
                })
        },
    },
}               
</script>