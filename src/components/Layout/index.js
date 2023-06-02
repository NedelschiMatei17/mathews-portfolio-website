import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
        <div className="page">
        <span className="tags top-tags">
            <span className="top-tag-html">&lt;html&gt;</span>
              <br />
            <span className="body-up-tag">&lt;body&gt;</span>
          </span>
          <Outlet />
        <div className="bottom-tags">
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Layout