import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, typography, Space} from 'antd';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css';
import Typography from 'antd/es/typography/Typography';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                  <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/exchanges" element={<Exchanges/>}/>
                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                    <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                    <Route exact path="/news" element={<News/>}/>
                    
                    {/* <Route exact path="/exchanges">
                        <Exchanges/>
                    </Route>
                    <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies/>
                    </Route>
                    <Route exact path="/crypto/:coinId">
                        <CryptoDetails/>
                    </Route>
                    <Route exact path="/news">
                        <News/>
                    </Route> */}
                  </Routes>
              </div>
            </Layout>
            <div classname="footer">
                <Typography.Title level={5} style={{color:'white', textAlign: 'center'}}>
                  Cryptoverse<br/>
                  All rights reserved
                  <Space>
                    <Link to="/">Homepage</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                  </Space>
                </Typography.Title>
            </div>
        </div>
    </div>
  );
}

export default App
