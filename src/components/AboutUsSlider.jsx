import { ImageBackground, View, useWindowDimensions } from "react-native"
import SwiperFlateList from "react-native-swiper-flatlist"

const AboutUsSlider = () => {
    const { width } = useWindowDimensions()
    const sliderArray = [
        `https://img.freepik.com/free-psd/3d-colorful-discount-sale-promotion-banner_125755-689.jpg?w=740&t=st=1707061598~exp=1707062198~hmac=2f8daf5420378bd24cbaab7a100dcdb73518cebc843115ee4a8f954bad84e192`,
        `https://img.freepik.com/free-vector/sales-banner-origami-style_23-2148416908.jpg?w=826&t=st=1707061876~exp=1707062476~hmac=b67fbdf1e6d3f6187d5c41039b1d009cab4619593079930b33efe72748edeb9c`,
        `https://img.freepik.com/free-vector/abstract-sale-promotion-banner-template_23-2148218180.jpg?w=740&t=st=1707061967~exp=1707062567~hmac=3ff8bddc003e643f65b02e3a332d23ea0506bcee6b6708bbf10bd95cb940b9c0`
    ]
    return (
        <View collapsable={false}>
            <SwiperFlateList
                autoplay
                autoplayDelay={2}
                index={2}
                autoplayLoop
                data={sliderArray}
                renderItem={({ item }) => (
                    <ImageBackground
                        source={{ uri: item }}
                        style={{ width: width, height: width / 2 }}
                    />)}
                showPagination
            />
        </View>
    )
}

export default AboutUsSlider