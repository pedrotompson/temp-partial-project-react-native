import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import PeColors from './PeColors';
import PeText from './PeText';
import PeModal from './PeModal';
import PeLine from './PeLine';
import { setMarginTop, setMarginRight, setMarginBottom, setMarginLeft } from './PeDefaults';
import { EvilIcons } from '@expo/vector-icons';

export default function PeSelect(props) {

    const [items, setItems] = useState([]);
    const [IsVisibleModal, setModalIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const itensPerPage = 30; 
    const totalPages = props.data.length / itensPerPage;

    let k = 0;

    

    const loadItems = (page) => {
        
        let currentPosition = (page-1)*itensPerPage;
        
        let newItems = props.data.slice(currentPosition, currentPosition + itensPerPage);
        let currentItems = [...items, ...newItems];
        console.log((page-1)*itensPerPage);
        setCurrentPage(++page);
        setItems(currentItems);
    }
    
    const loadMoreItems = () => {

        if (currentPage >= totalPages) return;

        loadItems(currentPage);
    }

    useEffect(() => {
        loadItems(1);
    }, [props.data])

    const cancelModalClick = () => {
        setModalIsVisible(false);
    };


    //Definindo o styled component de acordo com os valores calculados
    const ViewStyled = styled.View`
        height: 50px;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        border-radius: 7px;
        background-color: ${props.disabled ? PeColors.inputBackgroundDisabled : PeColors.inputBackground};
        padding: 0px 10px 0px 10px;
    `;

    const BtnItem = styled.TouchableOpacity`
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        padding: 14px 0px;
    `;


    const itemClick = (item) => {
        cancelModalClick();
        if (props.handleSelect) props.handleSelect(item);
    }

    const renderItem = ({ item }) => (

        <BtnItem onPress={() => itemClick(item)}>
            <PeText>{item[props.textField]}</PeText>
            <EvilIcons name="chevron-right" size={24} color={PeColors.textParagraph} />
        </BtnItem>
    );

    //Criando o componente
    return (
        <>
            <TouchableOpacity
                disabled={props.disabled}
                onPress={() => { setModalIsVisible(true) }}
                style={{ marginTop: setMarginTop(props, 0), marginRight: setMarginRight(props, 0), marginBottom: setMarginBottom(props, 0), marginLeft: setMarginLeft(props, 0) }}>

                <ViewStyled {...props}>
                    {
                        ((props.selectedText == '' || !props.selectedText) || props.disabled) ?

                            <PeText customColor={PeColors.inputLabel}>{props.emptyText}</PeText> :
                            <PeText input>{props.selectedText}</PeText>

                    }
                    <EvilIcons name="chevron-down" size={24} color={PeColors.textParagraph} />
                </ViewStyled>

                {props.errorMessage &&
                    <PeText mt1 error small >{props.errorMessage}</PeText>
                }

            </TouchableOpacity>

            <PeModal noswipe visible={IsVisibleModal} handleCancel={cancelModalClick} title={props.modalTitle} subtitle={props.modalSubtitle}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => (k++) + ''}
                    ItemSeparatorComponent={() => <PeLine />}
                    style={{ marginBottom: 60 }}
                    onEndReachedThreshold={0.5}
                    onEndReached={loadMoreItems}
                />
            </PeModal>
        </>
    )

}