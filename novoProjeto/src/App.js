import React from "react";
import { View, Text } from 'react-native'

import X, { Comp1, Comp2 } from './componentes/Mult';
import Primeiro from './componentes/Primeiro';

export default () => (
    <View>
        {/* <Text> { 1 + 1 } </Text> => Esta linha faz o calculo e mostra em tela */}
        <Primeiro />
        <X />
        <Comp1 />
        <Comp2 />
    </View>
)