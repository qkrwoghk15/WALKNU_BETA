import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Polyline } from "react-naver-maps";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button'

const YOUR_CLIENT_ID = "pzvby0c802a";

class Navigate extends React.Component {
    constructor (props) {
      super(props)
      this.mapRef = React.createRef();
      this.markerRef = React.createRef();
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
            position: window.naver.maps.Position.TOP_RIGHT
        },
        mapTypeControl: true,
      }

    }
 
    render () { 
      const navermaps = window.naver.maps;

      var polylinePath = [
        new navermaps.LatLng(35.88754, 128.609084),
        new navermaps.LatLng(35.887388, 128.609061),
        new navermaps.LatLng(35.886385, 128.609587),
        new navermaps.LatLng(35.88616, 128.613132)
    ];

    return (
      <div style={{width: '100%', height: '100%'}}>
        <div>
          <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="#home">운동</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">홈으로</Nav.Link>
            </Nav>
            <Form inline>
                <Dropdown variant="Light" as={ButtonGroup}>
                    <Button variant="danger" disabled>거리</Button>

                    <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1KM</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">3KM</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">5KM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

            <Polyline 
                path={polylinePath}
                clickable={true} // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                strokeColor={'#6667CB'}
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