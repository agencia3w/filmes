import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #191A30;
`;

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: #191A3080;
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: #E72F49;
    width: 65px;
    height: 65px;
    border-radius: 35px;
    position: absolute;
    top: 314px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 30px;
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`;

export const Rate = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 10px 0;
    height: 40px;
`;


export const Description = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    padding: 0 14px 30px 14px;
`;