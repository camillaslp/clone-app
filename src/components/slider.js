import React from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet} from "react-native";

// const {width} = 300;//Dimensions.get("window");
// const height = width * 0.6;

export default class Slider extends React.Component {
    state = {
        active: 0
    }

    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active){
            this.setState({active: slide});

        }
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.scroll}
                >

                    {
                        
                        this.props.fotos.map((image, index) =>(
                            <image 
                            key={index}
                            source={{ uri: image}}
                            style={style.image} />
                        ))
                    }
                </ScrollView>
                <View style={style.pagination}>
                    {
                        this.props.fotos.map((i,k) => (
                            <Text key={k} style={k==this.state.active ? style.pagingActiveText : style.pagingText}></Text>
                        ))
                    }
                </View>
            </View> 
        )
    }
}

const style = StyleSheet.create({
    container: {
        width: 300,
        height:250,
    },
    image: { 
        width: 50, 
        height: 50,
        resizeMode: 'cover' },
    pagination: {
        flexDirection:'row',
        position: 'absolute',
        bottom: 0,
        alignSelf:'center'    
    },
    pagingText: {
        fontSize: (300 / 30),
        color: '#888',
        margin:3
    },
    pagingActiveText: {
        fontSize: (300 / 30),
        color: '#fff',
        margin:3
    }
})