import React, { useState, useEffect } from 'react';
import {
    Container,
    ListMovies,
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

import SearchItem from '../../components/SearchItem';

function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                    query: route.params.name
                }
            })

            if (isActive) {
                setMovie(response.data.results);
                setLoading(false);
            }
        }

        if (isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }
    }, []);

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id })
    }

    if (loading) {
        return (
            <Container></Container>
        )
    }

    return (
        <Container>
            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movie}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <SearchItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
            />
        </Container>
    )
}

export default Search;