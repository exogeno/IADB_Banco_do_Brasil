
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatelliteHybrid_0": {
            "type": "raster",
            "tiles": ["http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "EsriDarkGray_1": {
            "type": "raster",
            "tiles": ["http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "UnidadfederativadeBrasil_2": {
            "type": "geojson",
            "data": json_UnidadfederativadeBrasil_2
        }
                    ,
        "ProjetosElegvels_3": {
            "type": "geojson",
            "data": json_ProjetosElegvels_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatelliteHybrid_0_0",
            "type": "raster",
            "source": "GoogleSatelliteHybrid_0"
        },
        {
            "id": "lyr_EsriDarkGray_1_1",
            "type": "raster",
            "source": "EsriDarkGray_1"
        },
        {
            "id": "lyr_UnidadfederativadeBrasil_2_0",
            "type": "fill",
            "source": "UnidadfederativadeBrasil_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_ProjetosElegvels_3_0",
            "type": "circle",
            "source": "ProjetosElegvels_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#ffffff', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#000000'}
        }
],
}