import { BarraVertical, Container } from "../../styles/GlobalStyles";

import { Botao, DivBotoes, DivCentral, ParagrafoInfo, SectionMenu, TituloInfo, VersaoInfo } from "./styled";

const Index = () => {
    return (
        <Container>
            <DivCentral>
                <SectionMenu>
                    <TituloInfo>FUTEBOL GAME</TituloInfo>
                    <VersaoInfo>Versão 0.0.1</VersaoInfo>
                    <ParagrafoInfo>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies libero fermentum lacinia cursus. 
                        Etiam ornare ante sed ligula accumsan consectetur. Nullam eu elementum sapien. Integer nulla tellus, 
                        cursus ac augue a, pellentesque congue urna. Suspendisse sollicitudin ante in vestibulum scelerisque. 
                        Maecenas scelerisque tellus consectetur risus vestibulum eleifend. Maecenas turpis odio, vehicula a ultrices 
                        sit amet, cursus at dui. Pellentesque cursus massa diam, at gravida lacus faucibus non. Nulla a nunc eleifend 
                        nibh consectetur pretium ut maximus sem.
                    </ParagrafoInfo>
                </SectionMenu>
                <BarraVertical />
                <SectionMenu>
                    <DivBotoes>
                        <Botao />
                        <Botao />
                        <Botao />
                    </DivBotoes> 
                </SectionMenu>
            </DivCentral>
        </Container>
    )
};

export default Index;