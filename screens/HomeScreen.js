import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native"

// For inference results
import { useInferenceResults } from '../contexts/InferenceResultsContext';

// Importing Home Screen Components
import Header from '../HomeScreenComponents/Header';

function HomeScreen(){
    return (
        <ScrollView>
            <View>
                <Header />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default HomeScreen;