import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Polyline } from "react-naver-maps";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay'

const YOUR_CLIENT_ID = "pzvby0c802a";

class Navigate extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        show: false,

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
            position: window.naver.maps.Position.TOP_RIGHT
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

    var HOME_PATH = window.HOME_PATH || '.';
    var contentString = [
          '<div class="iw_inner">',
          '   <h3>서울특별시청</h3>',
          '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
          '       <img src="'+ HOME_PATH +'/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />',
          '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
          '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
          '   </p>',
          '</div>'
      ].join('');
  
    var infowindow = new navermaps.InfoWindow({
      position: new navermaps.LatLng(35.890425, 128.611994),
      content: contentString,
      /*maxWidth: 140,
      backgroundColor: "#eee",
      borderColor: "#2db400",
      borderWidth: 5,
      anchorSize: new window.N.Size(30, 30),
      anchorSkew: true,
      anchorColor: "#eee",

      pixelOffset: new window.N.Point(20, -20)*/
    });

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );

    return (
      <div style={{width: '100%', height: '100%'}}>
        <div>
          <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="#home">길찾기</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">홈으로</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="목적지" className="mr-sm-2"/>
              <Button variant="success">Search</Button>
            </Form>
          </Navbar>
        </div>

        <div style={{width: '100%', height: '100%'}}>
          <NaverMap
            ref={this.mapRef}
            mapDivId={"react-naver-map"} // default: react-naver-map
            style={{
                width: '100%',
                height: '100%',
            }}
            defaultCenter={new navermaps.LatLng(35.890425, 128.611994)} //지도의 초기 중심 좌표
            defaultZoom={17} //지도의 초기 줌 레벨
            {...this.state}
            >

            <Marker
              ref={this.markerRef}
              position={new navermaps.LatLng(35.890425, 128.611994)}
              animation={navermaps.Animation.BOUNCE}
              onClick={()=>
                this.setState({show: !this.state.show })
              }
            />

            <Overlay>{this.state.show ? <popover></popover> : <></>}</Overlay>

            <Polyline 
                path={polylinePath}
                clickable={true} // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                strokeColor={'#5347AA'}
                //strokeStyle={'longdash'}
                strokeOpacity={0.5}
                strokeWeight={5}        
            />
          </NaverMap>
        </div>
      </div>
    )
  }
}

<RenderAfterNavermapsLoaded
    clientId={YOUR_CLIENT_ID}
>
    <Navigate />
</RenderAfterNavermapsLoaded>

export default Navigate;