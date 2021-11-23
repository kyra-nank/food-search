import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = function () {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(); //destructure useResults hook

    const filterResultsByPrice = function (price) {
        // price ==== '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.backgroundStyle}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;