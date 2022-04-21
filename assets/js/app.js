const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Classi interattive richiamate da JS
        Container_Classes: "h_container mt-5 container-xl bg_try",
        Row_Classes: "row h-100 flex-nowrap",
        Col_10_Classes: "col-10 m_p_none h-100 bg_image img_col",
        Col_2_Classes: "col-2 m_p_none h-100 bg_image_2 rel",
        Carousel_img: "col-12 d-flex justify-content-center align-items-center h_col_sm img_col",
        // Active image
        activeImage: 0,
        // Array di Object
        countries: [
            // Object: Svezia
            {
                image: './assets/img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            // Object: Svizzera <3
            {
                image: './assets/img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            // Object: Inghilterra
            {
                image: './assets/img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            // Object: Germania
            {
                image: './assets/img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            // Object: Paradiso
            {
                image: './assets/img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    methods: {
        // Cambio Immagine Previous
        prevImage() {
            console.log('Prev image');
            if (this.activeImage === 0) {
                this.activeImage = this.countries.length - 1
            }
            this.activeImage--
        },
        // Cambio Immagine successiva
        nextImage() {
            console.log('Next image');
            this.activeImage++
            if (this.activeImage === this.countries.length) {
                this.activeImage = 0;
            }
        }
    },
})

