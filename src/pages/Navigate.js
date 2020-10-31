import React from "react";
import ReactDOM from "react-dom"
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Polyline } from "react-naver-maps";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Toast from 'react-bootstrap/Toast'

const YOUR_CLIENT_ID = "pzvby0c802a";

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
);

class Navigate extends React.Component {
    constructor (props) {
      super(props)

      const navermaps = window.naver.maps;
  
      this.state = {
        // min max zoom
        minZoom: 13,
        maxZoom: 20,
  
        // interaction
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        keyboardShortcuts: true,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false,
  
        // kinetic
        disableKineticPan: false,
  
        // tile transition
        tileTransition: true,
  
        // controls
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        zoomControlOptions: { //줌 컨트롤의 옵션
            position: navermaps.Position.TOP_RIGHT
        },
        mapTypeControl: true,
      }
    }
  
    render () {
      const navermaps = window.naver.maps;
  
      var polylinePath = [
        new navermaps.LatLng(37.4526437, 126.49236),
        new navermaps.LatLng(37.4768068, 126.4847975),
        new navermaps.LatLng(37.4988237, 126.4960839),
        new navermaps.LatLng(37.5176422, 126.5392841),
        new navermaps.LatLng(37.5398154, 126.5708743),
        new navermaps.LatLng(37.5457857, 126.5968815),
        new navermaps.LatLng(37.5646413, 126.6502792),
        new navermaps.LatLng(37.5708896, 126.7197823),
        new navermaps.LatLng(37.5710499, 126.7444216),
        new navermaps.LatLng(37.5770001, 126.7733532),
        new navermaps.LatLng(37.5817724, 126.799401),
        new navermaps.LatLng(37.5841817, 126.8167752),
        new navermaps.LatLng(37.5808037, 126.8313027),
        new navermaps.LatLng(37.5716637, 126.8473288),
        new navermaps.LatLng(37.56136, 126.8619116),
        new navermaps.LatLng(37.5487926, 126.8852035),
        new navermaps.LatLng(37.540747, 126.8910651),
        new navermaps.LatLng(37.5303713, 126.8925982),
        new navermaps.LatLng(37.5164746, 126.8825719),
        new navermaps.LatLng(37.5002697, 126.8725686),
        new navermaps.LatLng(37.4933399, 126.8711786),
        new navermaps.LatLng(37.4760577, 126.8756663),
        new navermaps.LatLng(37.4634352, 126.8887979),
        new navermaps.LatLng(37.448467, 126.8947082),
        new navermaps.LatLng(37.4346374, 126.8977132),
        new navermaps.LatLng(37.4242394, 126.8949032),
        new navermaps.LatLng(37.4033979, 126.8806084),
        new navermaps.LatLng(37.3848775, 126.8691937),
        new navermaps.LatLng(37.371033, 126.8693097),
        new navermaps.LatLng(37.3724101, 126.9126676),
        new navermaps.LatLng(37.3830471, 126.9660813),
        new navermaps.LatLng(37.3807849, 126.9762181),
        new navermaps.LatLng(37.3971504, 127.0267188),
        new navermaps.LatLng(37.3961676, 127.0715545),
        new navermaps.LatLng(37.3730718, 127.0659032),
        new navermaps.LatLng(37.35114, 127.063139),
        new navermaps.LatLng(37.3268898, 127.0575003),
        new navermaps.LatLng(37.3210994, 127.0517556),
        new navermaps.LatLng(37.3084352, 127.0590529),
        new navermaps.LatLng(37.2877049, 127.0692822),
        new navermaps.LatLng(35.890425, 128.611994)
    ];

      return (
        <NaverMap 
            mapDivId={"react-naver-map"} // default: react-naver-map
            style={{
                width: '100%',
                height: '100%',
            }}
            defaultCenter={new navermaps.LatLng(35.890425, 128.611994)} //지도의 초기 중심 좌표
            defaultZoom={17} //지도의 초기 줌 레벨
            {...this.state}
            >

            {/* <OverlayTrigger trigger="click" placement="top" overlay={popover}></OverlayTrigger> */}
                <Marker 
                    position={new navermaps.LatLng(35.890425, 128.611994)}
                    animation={navermaps.Animation.BOUNCE}
                    onClick={() => {

                      }}
                />
            

            <Polyline 
                path={polylinePath}
                clickable={true} // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                strokeColor={'#5347AA'}
                //strokeStyle={'longdash'}
                strokeOpacity={0.5}
                strokeWeight={5}        
            />
        </NaverMap>
      )
    }
  }

<RenderAfterNavermapsLoaded
    clientId={YOUR_CLIENT_ID}
>
    <Navigate />
</RenderAfterNavermapsLoaded>

export default Navigate;