import { createSlice } from "@reduxjs/toolkit"


const publicStatesSlice = createSlice({
    name: "publiceStatesSlice",
    initialState:{
        companiesList: [
            {
                "_id": "1",
                "title": "فتح الله",
                "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSww7c1o4i3CTDPBMY8h8RP7q_nedD4KoYCEtj8BFTWeOYC4j_UlmkFKf30ixoR0ufDnXw&usqp=CAU"
            },
            {
                "_id": "2",
                "title": "nike",
                "pic": "https://www.muraldecal.com/en/img/asfs364-jpg/folder/products-listado-merchant/stickers-nike-on-your-logo.jpg"
            },
        ]
    },
    reducers:{}
})

export default publicStatesSlice.reducer