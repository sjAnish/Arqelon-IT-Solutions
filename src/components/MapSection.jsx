import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default icon issue with Vite/Webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const pulseIcon = L.divIcon({
  className: '',
  html: `
    <div style="position:relative;width:20px;height:20px;">
      <div style="width:20px;height:20px;border-radius:50%;background:rgba(0,212,255,0.25);border:2px solid #00D4FF;"></div>
      <div style="position:absolute;top:-6px;left:-6px;width:32px;height:32px;border-radius:50%;border:2px solid rgba(0,212,255,0.2);animation:pulse-ring 2s ease-out infinite;"></div>
    </div>
    <style>
      @keyframes pulse-ring {
        0%   { transform:scale(0.8); opacity:1; }
        100% { transform:scale(1.6); opacity:0; }
      }
    </style>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -14],
})

const ARA_COORDS = [25.5559, 84.6706]

export default function MapSection() {
  return (
    <div id="map-section" style={{ height: 420, borderTop: '1px solid rgba(26,115,232,0.2)', position: 'relative' }}>
      <MapContainer
        center={ARA_COORDS}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={ARA_COORDS} icon={pulseIcon}>
          <Popup className="dark-popup">
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.65 }}>
              <strong style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#00D4FF', display: 'block', marginBottom: 4 }}>
                Arqelon IT Solutions
              </strong>
              3rd Floor, Aditya Towers<br />
              New Ramna Road, Ara – 802301<br />
              <span style={{ color: '#8A9BBF', fontSize: 12 }}>Bihar, India</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
