import { Image, ScrollView, Text, View } from "react-native"

const CompaniesList = () => {
    return (
        <View>
            <Text className="text-xl font-[900] px-4">الشركات</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1705410648~exp=1705411248~hmac=d4ce106b910f2dc7dcafcc67e73c84da3d55a154e98c357a4884242f2fb6ceaa" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/abstract-3d-logo-blue-green_1057-2838.jpg?w=740&t=st=1705410765~exp=1705411365~hmac=3037132bfe30afe5d4d103e5a1d29086bf31ca2bf0a12de4be242c76d62ee5dc" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/logo-concept-illustration-vector-template_460848-9763.jpg?w=740&t=st=1705410158~exp=1705410758~hmac=113a6d1e7e4b7f3fa22dbba852a1c518873082225bae0cfe5ec80ccc615ec0b8" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/gradient-printing-house-logo-template_23-2149763504.jpg?w=740&t=st=1705410712~exp=1705411312~hmac=3fcd02b15ff24578569f7adf799e723ec7efd94ae730b4e97bde73327e349bf6" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?w=740&t=st=1705410152~exp=1705410752~hmac=b6b9417d5ec51943f8d338afaaacfb4b1d4a098cbceae35b0045f5daab19370a" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/red-abstract-logo_1043-151.jpg?w=740&t=st=1705410236~exp=1705410836~hmac=26d7471fd2e9c88b8e7fc3d0a9d7958c5603c2fd2c5ed623e39e553bd4ccf50a" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/ribbon-islamic-dome-palace-logo-design-template-arabic-logotype_126523-937.jpg?w=740&t=st=1705410255~exp=1705410855~hmac=78693006b289a85cf6cd18fb00166f5177a2f9e545551790b8074136ff36f689" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
                <View className="rounded-full border-4 border-solid border-slate-100 mx-1 h-[70px] w-[70px] flex items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1705410310~exp=1705410910~hmac=26b50637a3483008393f215e89f952af6c38c286594323610df893f1b661ca28" }}
                        alt="freepik"
                        className="w-full h-full"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default CompaniesList