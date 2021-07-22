var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriDarkGray_1 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UnidadfederativadeBrasil_2 = new ol.format.GeoJSON();
var features_UnidadfederativadeBrasil_2 = format_UnidadfederativadeBrasil_2.readFeatures(json_UnidadfederativadeBrasil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadfederativadeBrasil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadfederativadeBrasil_2.addFeatures(features_UnidadfederativadeBrasil_2);
var lyr_UnidadfederativadeBrasil_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadfederativadeBrasil_2, 
                style: style_UnidadfederativadeBrasil_2,
                interactive: true,
                title: '<img src="styles/legend/UnidadfederativadeBrasil_2.png" /> Unidad federativa de Brasil'
            });
var format_ProjetosElegvels_3 = new ol.format.GeoJSON();
var features_ProjetosElegvels_3 = format_ProjetosElegvels_3.readFeatures(json_ProjetosElegvels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetosElegvels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetosElegvels_3.addFeatures(features_ProjetosElegvels_3);
var lyr_ProjetosElegvels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetosElegvels_3, 
                style: style_ProjetosElegvels_3,
                interactive: true,
                title: '<img src="styles/legend/ProjetosElegvels_3.png" /> Projetos Elegívels'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_EsriDarkGray_1.setVisible(true);lyr_UnidadfederativadeBrasil_2.setVisible(true);lyr_ProjetosElegvels_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_EsriDarkGray_1,lyr_UnidadfederativadeBrasil_2,lyr_ProjetosElegvels_3];
lyr_UnidadfederativadeBrasil_2.set('fieldAliases', {'nome': 'nome', });
lyr_ProjetosElegvels_3.set('fieldAliases', {'id': 'id', 'ESTADO NOM': 'ESTADO NOM', 'ESTADO SIG': 'ESTADO SIG', 'MUNICÍPIO': 'MUNICÍPIO', 'ÁREA DE I': 'ÁREA DE I', 'ÁREA DE_1': 'ÁREA DE_1', 'VALOR TOTA': 'VALOR TOTA', 'Situação': 'Situação', 'Situaç�_1': 'Situaç�_1', 'CAPAG': 'CAPAG', 'Informaç�': 'Informaç�', 'Informa�_1': 'Informa�_1', 'Parecer BI': 'Parecer BI', 'Elegibilid': 'Elegibilid', 'NOME PREFE': 'NOME PREFE', 'CARGO': 'CARGO', 'TELEFONE': 'TELEFONE', 'CELULAR': 'CELULAR', 'CPF': 'CPF', 'EMAIL': 'EMAIL', 'NÚMERO AG': 'NÚMERO AG', 'ENDEREÇO': 'ENDEREÇO', 'STATUS DO': 'STATUS DO', 'DATA INÍC': 'DATA INÍC', 'DATA FIM C': 'DATA FIM C', 'GARANTIAS': 'GARANTIAS', 'PRAZO AMOR': 'PRAZO AMOR', 'PRAZO CAR�': 'PRAZO CAR�', 'PRAZO TOTA': 'PRAZO TOTA', 'LOA': 'LOA', 'Contrato': 'Contrato', 'Parecer T�': 'Parecer T�', 'Licença A': 'Licença A', 'Extratos d': 'Extratos d', 'Notas Fisc': 'Notas Fisc', 'Declaraç�': 'Declaraç�', 'Localizaç': 'Localizaç', 'Linha de B': 'Linha de B', 'Indicadore': 'Indicadore', 'Projeção': 'Projeção', 'Acompanham': 'Acompanham', 'Lista de A': 'Lista de A', });
lyr_UnidadfederativadeBrasil_2.set('fieldImages', {'nome': 'TextEdit', });
lyr_ProjetosElegvels_3.set('fieldImages', {'id': 'TextEdit', 'ESTADO NOM': 'TextEdit', 'ESTADO SIG': 'TextEdit', 'MUNICÍPIO': 'TextEdit', 'ÁREA DE I': 'TextEdit', 'ÁREA DE_1': 'TextEdit', 'VALOR TOTA': 'TextEdit', 'Situação': 'TextEdit', 'Situaç�_1': 'TextEdit', 'CAPAG': 'TextEdit', 'Informaç�': 'TextEdit', 'Informa�_1': 'TextEdit', 'Parecer BI': 'TextEdit', 'Elegibilid': 'TextEdit', 'NOME PREFE': 'TextEdit', 'CARGO': 'TextEdit', 'TELEFONE': 'TextEdit', 'CELULAR': 'TextEdit', 'CPF': 'TextEdit', 'EMAIL': 'TextEdit', 'NÚMERO AG': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'STATUS DO': 'TextEdit', 'DATA INÍC': 'TextEdit', 'DATA FIM C': 'TextEdit', 'GARANTIAS': 'TextEdit', 'PRAZO AMOR': 'TextEdit', 'PRAZO CAR�': 'TextEdit', 'PRAZO TOTA': 'TextEdit', 'LOA': 'TextEdit', 'Contrato': 'TextEdit', 'Parecer T�': 'TextEdit', 'Licença A': 'TextEdit', 'Extratos d': 'TextEdit', 'Notas Fisc': 'TextEdit', 'Declaraç�': 'TextEdit', 'Localizaç': 'TextEdit', 'Linha de B': 'TextEdit', 'Indicadore': 'TextEdit', 'Projeção': 'TextEdit', 'Acompanham': 'TextEdit', 'Lista de A': 'TextEdit', });
lyr_UnidadfederativadeBrasil_2.set('fieldLabels', {'nome': 'header label', });
lyr_ProjetosElegvels_3.set('fieldLabels', {'id': 'no label', 'ESTADO NOM': 'no label', 'ESTADO SIG': 'no label', 'MUNICÍPIO': 'no label', 'ÁREA DE I': 'no label', 'ÁREA DE_1': 'no label', 'VALOR TOTA': 'no label', 'Situação': 'no label', 'Situaç�_1': 'no label', 'CAPAG': 'no label', 'Informaç�': 'no label', 'Informa�_1': 'no label', 'Parecer BI': 'no label', 'Elegibilid': 'header label', 'NOME PREFE': 'no label', 'CARGO': 'no label', 'TELEFONE': 'no label', 'CELULAR': 'no label', 'CPF': 'no label', 'EMAIL': 'no label', 'NÚMERO AG': 'no label', 'ENDEREÇO': 'no label', 'STATUS DO': 'no label', 'DATA INÍC': 'no label', 'DATA FIM C': 'no label', 'GARANTIAS': 'no label', 'PRAZO AMOR': 'no label', 'PRAZO CAR�': 'no label', 'PRAZO TOTA': 'no label', 'LOA': 'no label', 'Contrato': 'no label', 'Parecer T�': 'no label', 'Licença A': 'no label', 'Extratos d': 'no label', 'Notas Fisc': 'no label', 'Declaraç�': 'no label', 'Localizaç': 'no label', 'Linha de B': 'no label', 'Indicadore': 'no label', 'Projeção': 'no label', 'Acompanham': 'no label', 'Lista de A': 'no label', });
lyr_ProjetosElegvels_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});